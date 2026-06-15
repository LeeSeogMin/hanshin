create extension if not exists pgcrypto;

create table if not exists public.hanshin_board_posts (
  id uuid primary key default gen_random_uuid(),
  author_name text not null,
  affiliation text,
  category text not null,
  body text not null,
  status text not null default 'published',
  created_at timestamptz not null default now(),
  constraint hanshin_board_author_name_len check (char_length(trim(author_name)) between 1 and 40),
  constraint hanshin_board_affiliation_len check (affiliation is null or char_length(trim(affiliation)) <= 80),
  constraint hanshin_board_body_len check (char_length(trim(body)) between 5 and 1200),
  constraint hanshin_board_category_allowed check (
    category in ('계열제 평가', '계열제 보완', '전공신설', '기타')
  ),
  constraint hanshin_board_status_allowed check (status in ('published', 'hidden'))
);

create index if not exists hanshin_board_posts_created_at_idx
  on public.hanshin_board_posts (created_at desc);

alter table public.hanshin_board_posts enable row level security;

drop policy if exists "hanshin board public read" on public.hanshin_board_posts;
create policy "hanshin board public read"
  on public.hanshin_board_posts
  for select
  to anon, authenticated
  using (status = 'published');

drop policy if exists "hanshin board public insert" on public.hanshin_board_posts;
create policy "hanshin board public insert"
  on public.hanshin_board_posts
  for insert
  to anon, authenticated
  with check (
    status = 'published'
    and char_length(trim(author_name)) between 1 and 40
    and (affiliation is null or char_length(trim(affiliation)) <= 80)
    and char_length(trim(body)) between 5 and 1200
    and category in ('계열제 평가', '계열제 보완', '전공신설', '기타')
  );
