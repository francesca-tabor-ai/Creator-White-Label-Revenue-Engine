# Admin Login Credentials

**⚠️ IMPORTANT: This file contains sensitive credentials. Do not commit to version control in production. Add to `.gitignore` if needed.**

## Admin Dashboard Access

- **URL:** `/admin` (or `https://your-domain.com/admin`)
- **Login URL:** `/auth/login`

## Default Admin Account (after running seed)

| Field | Value |
|-------|-------|
| **Email** | `admin@creator-revenue.com` |
| **Password** | `Admin123!` |

## First-Time Setup

1. Run database migrations: `npm run db:migrate`
2. Seed the database: `npm run db:seed`
3. Log in at `/auth/login` with the credentials above
4. You will be redirected to `/admin`

## Security Recommendation

**Change the default password immediately** after first login. You can update it via the Admin dashboard under Users → Edit the admin user.

For production, ensure:
- Strong, unique password
- `NEXTAUTH_SECRET` is set to a secure random value
- `ADMIN_CREDENTIALS.md` is in `.gitignore` or excluded from repos
