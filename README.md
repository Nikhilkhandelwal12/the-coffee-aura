# The कॉffee Aura — Cafe Ordering Platform

Brand: **The कॉffee Aura** · Tagline: **A Sip of Good Vibes.**

## Included
- Next.js + TypeScript responsive branded homepage, menu page, theme toggle, owner dashboard entry.
- Cafe logo asset used as the brand emblem.
- Starter menu cards, category/search UI, cart count and total.
- Supabase PostgreSQL migration for categories, products, weekday offers, customers, orders, order items, inventory, admin users and payments.
- Razorpay server-side order creation and signature verification endpoints.
- `.env.example` for configuration.

## Run locally
1. Install Node.js 20+ and create a Supabase project.
2. Copy `.env.example` to `.env.local`; set Supabase and Razorpay **test** credentials.
3. Run SQL in `supabase/migrations/001_schema.sql` in Supabase SQL editor.
4. `npm install`
5. `npm run dev`
6. Open `http://localhost:3000`.

## Logo
The uploaded logo is stored at `public/brand-logo.png`. Replace with a transparent/high-resolution original if available.

## Important launch checklist
This is a runnable starter implementation, not yet a certified production commerce deployment. Before accepting live orders:
- Replace the sample menu data with server-side Supabase queries and seed real categories/products.
- Implement transactional order creation that re-reads product/offer prices on the server, locks/checks inventory, computes tax/discount, and stores order + items.
- Complete Razorpay webhook signature verification and idempotent event processing; only set `paid` after verified server-side payment/webhook confirmation.
- Add authenticated admin CRUD screens and enforce owner/staff authorization in database policies and server routes.
- Add delivery zone/fees, cancellation/refund workflow, receipt/order tracking, and account pages as required.
- Configure Supabase RLS for every table; never ship the service-role key to the client.
- Set up Razorpay webhook URL, HTTPS, domain, privacy/terms/refund policies and cafe contact details.
- Replace placeholder cafe address, phone, social links, timings and image choices.
- Verify stock semantics for pickup/delivery and shared ingredients.

## Razorpay test flow
The API endpoint `POST /api/payments/create-order` creates a Razorpay order from a validated paise amount. `POST /api/payments/verify` checks the checkout signature with constant-time comparison. For production, the server must derive the amount from persisted order rows, and payment status must be updated only after verification plus an idempotent webhook or trusted server check. Never trust an amount supplied by the browser.

## Offers
Weekday is stored as 0=Sunday through 6=Saturday, matching JavaScript `Date.getDay()`. Use `Asia/Kolkata` for local offer schedules. The schema supports percent/fixed/special pricing, date/time windows, minimum cart and max discount; the final offer engine should apply one eligible offer unless stacking is explicitly permitted.

## Deploy
Deploy to Vercel, add all environment variables, apply SQL migration, configure Supabase Auth redirect URLs and Razorpay webhook. Do not switch to live Razorpay keys until test transactions and server-side validation are verified.
