-- Tabla para almacenar las claves VAPID
create table push_keys (
  id uuid primary key default uuid_generate_v4(),
  public_key text not null,
  private_key text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tabla para almacenar las suscripciones de los usuarios
create table push_subscriptions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  endpoint text not null,
  auth text not null,
  p256dh text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, endpoint)
);

-- Función para enviar notificaciones push cuando se crea un nuevo mensaje
create or replace function handle_new_message()
returns trigger
language plpgsql
security definer
as $$
begin
  -- Obtener la suscripción del receptor
  perform
    graphql.send_push_notification(
      sub.endpoint,
      sub.auth,
      sub.p256dh,
      json_build_object(
        'message', 'Nuevo mensaje de ' || (
          select full_name
          from profiles
          where id = new.sender_id
        ),
        'url', '/chat'
      )
    )
  from push_subscriptions sub
  where sub.user_id = new.receiver_id;
  
  return new;
end;
$$;

-- Trigger para enviar notificaciones cuando se crea un nuevo mensaje
create trigger on_new_message
  after insert
  on messages
  for each row
  execute function handle_new_message(); 