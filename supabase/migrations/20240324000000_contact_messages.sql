create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  status text not null default 'pending',
  responded_at timestamp with time zone,
  response text
);

-- Enable RLS
alter table public.contact_messages enable row level security;

-- Create policies
create policy "Contact messages are viewable by admins only"
  on public.contact_messages for select
  to authenticated
  using (auth.jwt() ->> 'email' = 'admin@conest.mx');

create policy "Anyone can create contact messages"
  on public.contact_messages for insert
  to public
  with check (true);

create policy "Only admins can update contact messages"
  on public.contact_messages for update
  to authenticated
  using (auth.jwt() ->> 'email' = 'admin@conest.mx')
  with check (auth.jwt() ->> 'email' = 'admin@conest.mx'); 