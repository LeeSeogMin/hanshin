# 한신대 학사구조개편 공론화 웹

Next.js 기반 공론화 페이지입니다. Vercel preview 배포를 전제로 구성했습니다.

```bash
npm install
cp .env.example .env.local
npm run dev
npm run build
vercel deploy . -y
```

초기 메뉴:

- 계열제 평가
- 계열제 보완
- 전공신설

## Supabase

자유게시판은 Supabase `hanshin_board_posts` 테이블을 사용합니다.

```bash
supabase link --project-ref <project-ref>
supabase db query --linked --file supabase/migrations/202606160001_create_hanshin_board_posts.sql
```

필요한 공개 환경변수:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```
