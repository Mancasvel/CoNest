-- Enum para el estado del pago
create type payment_status as enum (
  'pending',    -- Pago pendiente
  'completed',  -- Pago completado
  'failed',     -- Pago fallido
  'refunded'    -- Pago reembolsado
);

-- Tabla para almacenar los pagos de matching
create table matching_payments (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete restrict not null,
  amount decimal(10,2) not null,
  status payment_status default 'pending' not null,
  payment_method text,
  payment_intent_id text unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  constraint valid_amount check (amount > 0)
);

-- Función para actualizar el timestamp
create or replace function update_updated_at_column()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$;

-- Trigger para actualizar el timestamp
create trigger update_matching_payments_updated_at
  before update
  on matching_payments
  for each row
  execute function update_updated_at_column();

-- Políticas de seguridad
alter table matching_payments enable row level security;

-- Los usuarios solo pueden ver sus propios pagos
create policy "Usuarios pueden ver sus propios pagos"
  on matching_payments
  for select
  using (auth.uid() = user_id);

-- Los usuarios solo pueden crear sus propios pagos
create policy "Usuarios pueden crear sus propios pagos"
  on matching_payments
  for insert
  with check (auth.uid() = user_id);

-- Solo el sistema puede actualizar los pagos
create policy "Sistema puede actualizar pagos"
  on matching_payments
  for update
  using (auth.uid() in (
    select id from auth.users where email = 'admin@conest.com'
  ));

-- Añadir columna para tracking de pago en perfiles
alter table profiles
  add column if not exists has_paid boolean default false,
  add column if not exists payment_id uuid references matching_payments(id);

-- Función para actualizar el estado de pago del perfil
create or replace function update_profile_payment_status()
returns trigger
language plpgsql
as $$
begin
  if new.status = 'completed' then
    update profiles
    set has_paid = true,
        payment_id = new.id
    where id = new.user_id;
  end if;
  return new;
end;
$$;

-- Trigger para actualizar el estado de pago del perfil
create trigger update_profile_payment_status_trigger
  after update
  on matching_payments
  for each row
  execute function update_profile_payment_status(); 