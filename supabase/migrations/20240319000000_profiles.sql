-- Enum para el tipo de usuario
create type user_type as enum (
  'host',
  'student'
);

-- Tabla de perfiles
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text,
  avatar_url text,
  user_type user_type not null,
  bio text,
  location text,
  date_of_birth date,
  phone_number text,
  emergency_contact text,
  preferences jsonb,
  verification_status text default 'pending' check (verification_status in ('pending', 'verified', 'rejected')),
  embedding vector(1536),
  has_paid boolean default false,
  payment_id uuid
);

-- Habilitar RLS
alter table profiles enable row level security;

-- Políticas de seguridad
create policy "Los usuarios pueden ver sus propios perfiles."
  on profiles for select
  using (auth.uid() = id);

create policy "Los usuarios pueden actualizar sus propios perfiles."
  on profiles for update
  using (auth.uid() = id);

create policy "Los usuarios pueden insertar sus propios perfiles."
  on profiles for insert
  with check (auth.uid() = id);

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
create trigger update_profiles_updated_at
  before update
  on profiles
  for each row
  execute function update_updated_at_column(); 