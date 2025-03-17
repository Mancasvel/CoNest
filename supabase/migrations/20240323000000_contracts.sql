-- Enum para el estado del contrato
create type contract_status as enum (
  'pending',      -- Esperando firma
  'active',       -- Contrato activo
  'completed',    -- Contrato finalizado
  'cancelled'     -- Contrato cancelado
);

-- Tabla de contratos
create table contracts (
  id uuid primary key default uuid_generate_v4(),
  match_id uuid references matches(id) on delete restrict not null,
  host_id uuid references auth.users(id) on delete restrict not null,
  student_id uuid references auth.users(id) on delete restrict not null,
  status contract_status default 'pending' not null,
  start_date date not null,
  end_date date not null,
  monthly_rent decimal(10,2) not null,
  services_included text[] not null default '{}',
  student_responsibilities text[] not null default '{}',
  additional_terms text,
  host_signed boolean default false,
  student_signed boolean default false,
  host_signed_at timestamp with time zone,
  student_signed_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  -- Asegurar que las fechas sean válidas
  constraint valid_dates check (end_date > start_date),
  -- Asegurar que el monto sea positivo
  constraint valid_rent check (monthly_rent > 0),
  -- Solo puede haber un contrato activo por match
  constraint unique_active_contract unique (match_id, status) 
    where status = 'active'
);

-- Tabla para pagos mensuales
create table payments (
  id uuid primary key default uuid_generate_v4(),
  contract_id uuid references contracts(id) on delete restrict not null,
  amount decimal(10,2) not null,
  due_date date not null,
  paid_date timestamp with time zone,
  status text not null default 'pending',
  payment_method text,
  transaction_id text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
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
create trigger update_contracts_updated_at
  before update
  on contracts
  for each row
  execute function update_updated_at_column();

-- Políticas de seguridad
alter table contracts enable row level security;
alter table payments enable row level security;

-- Políticas para contratos
create policy "Usuarios pueden ver sus propios contratos"
  on contracts
  for select
  using (auth.uid() in (host_id, student_id));

create policy "Hosts pueden crear contratos"
  on contracts
  for insert
  with check (auth.uid() = host_id);

create policy "Participantes pueden actualizar sus contratos"
  on contracts
  for update
  using (auth.uid() in (host_id, student_id));

-- Políticas para pagos
create policy "Participantes pueden ver pagos de sus contratos"
  on payments
  for select
  using (
    auth.uid() in (
      select host_id from contracts where id = payments.contract_id
      union
      select student_id from contracts where id = payments.contract_id
    )
  );

create policy "Solo hosts pueden crear pagos"
  on payments
  for insert
  with check (
    auth.uid() = (
      select host_id from contracts where id = contract_id
    )
  );

create policy "Solo hosts pueden actualizar pagos"
  on payments
  for update
  using (
    auth.uid() = (
      select host_id from contracts where id = contract_id
    )
  ); 