-- Run once in a NEW Supabase project. Do not run this over the live PawMatch project.
-- These are portfolio sample listings, not live adoptable dogs.

create table public.dogs (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  breed text not null,
  size text not null,
  energy_level text not null,
  description text,
  image_url text,
  is_available boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.favorites (
  user_id uuid not null references auth.users(id) on delete cascade,
  dog_id uuid not null references public.dogs(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, dog_id)
);

create table public.adoption_interests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  dog_id uuid not null references public.dogs(id) on delete cascade,
  message text,
  status text not null default 'submitted',
  created_at timestamptz not null default now()
);

alter table public.dogs enable row level security;
alter table public.favorites enable row level security;
alter table public.adoption_interests enable row level security;

create policy "read_available_dogs"
  on public.dogs for select
  to anon, authenticated
  using (is_available = true);

create policy "own_favorites"
  on public.favorites for all
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "create_own_interest"
  on public.adoption_interests for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "view_own_interest"
  on public.adoption_interests for select
  to authenticated
  using (auth.uid() = user_id);

grant usage on schema public to anon, authenticated;
grant select on public.dogs to anon, authenticated;
grant select, insert, update, delete on public.favorites to authenticated;
grant select, insert on public.adoption_interests to authenticated;

insert into public.dogs
  (id, name, breed, size, energy_level, description, image_url)
values
  ('11111111-1111-4111-8111-111111111111', 'Luna', 'Australian Shepherd', 'Medium', 'High', 'Loyal and brilliant', 'https://images.unsplash.com/photo-1770345629583-01333c1c31b0?auto=format&fit=crop&w=700&q=80'),
  ('22222222-2222-4222-8222-222222222222', 'Milo', 'Beagle', 'Small', 'Medium', 'Curious and friendly', 'https://images.unsplash.com/photo-1608113240010-e76286118bf2?auto=format&fit=crop&w=700&q=80'),
  ('33333333-3333-4333-8333-333333333333', 'Nova', 'Labrador Mix', 'Large', 'Medium', 'Gentle family companion', 'https://images.unsplash.com/photo-1658833944717-ce9680d3c4d5?auto=format&fit=crop&w=700&q=80'),
  ('44444444-4444-4444-8444-444444444444', 'Teddy', 'Pomeranian', 'Small', 'Low', 'Calm and affectionate', 'https://images.unsplash.com/photo-1623542723243-3efce8898534?auto=format&fit=crop&w=700&q=80');
