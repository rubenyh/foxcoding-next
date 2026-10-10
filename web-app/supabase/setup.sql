-- Product catalog setup for the Next.js demo.
-- Safe to run more than once: it never deletes rows and never duplicates the sample products.

-- 1. Table
create table if not exists public.products (
  id bigint generated always as identity primary key,
  name text not null unique check (char_length(trim(name)) between 1 and 120),
  description text not null default '',
  price numeric(10, 2) not null check (price >= 0),
  category text not null check (char_length(trim(category)) between 1 and 60),
  created_at timestamptz not null default now()
);

-- 2. Row Level Security: anyone may read, nobody may write through the public API.
alter table public.products enable row level security;

drop policy if exists "Products are publicly readable" on public.products;
create policy "Products are publicly readable"
  on public.products
  for select
  to anon, authenticated
  using (true);

-- RLS has no INSERT/UPDATE/DELETE policies, so those are blocked.
-- TRUNCATE is not covered by RLS, so remove write privileges explicitly as well.
revoke insert, update, delete, truncate on public.products from anon, authenticated;
grant select on public.products to anon, authenticated;

-- 3. Sample data: only inserts products whose name is not already in the table.
insert into public.products (name, description, price, category)
select v.name, v.description, v.price, v.category
from (
  values
    ('Wireless Headphones', 'Over-ear headphones with active noise cancelling and 30-hour battery life.', 129.99, 'Electronics'),
    ('Mechanical Keyboard', 'Compact 75% keyboard with hot-swappable switches and a solid aluminum frame.', 89.50, 'Electronics'),
    ('Ceramic Coffee Mug', 'A 350 ml stoneware mug with a matte glaze. Dishwasher and microwave safe.', 14.00, 'Kitchen'),
    ('Chef''s Knife', 'An 8-inch stainless steel knife for everyday chopping, slicing, and dicing.', 59.95, 'Kitchen'),
    ('Canvas Backpack', 'Water-resistant 20 L backpack with a padded laptop sleeve.', 64.00, 'Accessories'),
    ('Desk Lamp', 'Adjustable LED lamp with three color temperatures and a USB charging port.', 39.99, 'Home'),
    ('Yoga Mat', 'Non-slip 6 mm mat with a carrying strap, made from recycled materials.', 32.00, 'Sports'),
    ('Paperback Notebook', 'A5 dotted notebook with 160 pages of thick, fountain-pen-friendly paper.', 9.75, 'Stationery')
) as v(name, description, price, category)
where not exists (
  select 1 from public.products p where p.name = v.name
);
