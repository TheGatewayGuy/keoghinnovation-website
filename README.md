# Keogh Innovation — Website

Next.js 14 + Tailwind CSS + Vercel. Built by KewBot.

## What's Included

- **5 pages:** Home, Services, About, Content, Contact
- **Live content:** Hashnode tutorials + dev.to articles auto-fetch on every build (ISR, 1hr cache)
- **YouTube:** Pulls latest videos via channel RSS (or Data API if key provided)
- **Responsive:** Mobile-first design
- **Dark theme:** Navy + electric blue, DM Sans + Inter fonts

## Deploy to Vercel (5 minutes)

### 1. Push to GitHub
```bash
cd keogh-innovation
git init
git add .
git commit -m "Initial commit"
gh repo create keogh-innovation --private --source=. --push
```

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your `keogh-innovation` GitHub repo
3. Vercel auto-detects Next.js — click **Deploy**
4. Done. Live in ~90 seconds.

### 3. Add Environment Variables (optional)
In Vercel dashboard → Settings → Environment Variables:

| Variable | Value | Required? |
|---|---|---|
| `YOUTUBE_CHANNEL_ID` | Your YouTube channel ID | Optional (falls back to channel page link) |
| `YOUTUBE_API_KEY` | YouTube Data API v3 key | Optional |

### 4. Add a Custom Domain
Vercel dashboard → Settings → Domains → Add `keoghinnovation.com`

---

## Local Dev

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## How Content Updates Work

**Automatic (zero effort):**
- Hashnode posts → fetched fresh every hour via ISR
- dev.to articles → fetched fresh every hour via ISR
- Publish something → it appears on the site within 60 minutes

**Manual updates (ask KewBot):**
- Copy changes, new sections, new pages
- Design tweaks
- New service offerings

---

## File Structure

```
app/
  page.tsx          — Home (dynamic content)
  services/         — Services page
  about/            — About page
  content/          — Full content hub (all posts)
  contact/          — Contact form
components/
  Nav.tsx           — Navigation
  Footer.tsx        — Footer
  ArticleCard.tsx   — Reusable article/tutorial card
lib/
  hashnode.ts       — Hashnode GraphQL API
  devto.ts          — dev.to REST API
  youtube.ts        — YouTube RSS / Data API
```

---

## Contact Form

The contact form UI is built. To make it functional, choose one:

**Option A — Formspree (easiest, free tier):**
1. Create account at formspree.io
2. Create a form, get the endpoint URL
3. Add `action="https://formspree.io/f/yourformid"` to the `<form>` in `app/contact/page.tsx`

**Option B — Resend (best for custom email):**
1. Add `resend` npm package
2. Create `app/api/contact/route.ts` API route
3. Wire the form to POST to `/api/contact`

Ask KewBot to implement either option.
