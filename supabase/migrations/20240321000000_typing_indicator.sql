-- Tabla para rastrear el estado de escritura
create table typing_status (
  id uuid primary key default uuid_generate_v4(),
  match_id uuid references matches(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete cascade not null,
  is_typing boolean default false not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(match_id, user_id)
);

-- Función para actualizar el timestamp cuando se actualiza el estado
create or replace function update_typing_timestamp()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$;

-- Trigger para actualizar el timestamp
create trigger typing_status_timestamp
  before update
  on typing_status
  for each row
  execute function update_typing_timestamp();

-- Habilitar realtime para la tabla typing_status
alter publication supabase_realtime add table typing_status; 