# Vercel Deployment Guide

## Required Environment Variables

Add these in your Vercel project → **Settings** → **Environment Variables**:

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | **Yes** | PostgreSQL connection string (e.g. from Railway, Neon, or Vercel Postgres) |
| `NEXTAUTH_SECRET` | **Yes** | Random string for NextAuth session encryption (generate with `openssl rand -base64 32`) |
| `NEXTAUTH_URL` | **Yes** | Your production URL (e.g. `https://your-app.vercel.app`) |

Without `DATABASE_URL`, admin pages and auth will fail at runtime.

## Database Setup

1. Create a PostgreSQL database (Railway, Neon, Supabase, or Vercel Postgres)
2. Run migrations: `npx prisma migrate deploy` (or use your DB provider's console)
3. Optionally seed: `npx prisma db seed`
4. Copy the connection string to `DATABASE_URL` in Vercel
