# VibeVault Music Playing App

## Overview

VibeVault is a modern music playing app built with Next.js 13.4, React, Stripe for payment processing, Supabase for backend, PostgreSQL as the database, and Tailwind CSS for styling. This app allows users to discover and enjoy their favorite music while providing a seamless and intuitive user experience.

## Features

- User authentication and authorization
- Music catalog with a vast collection of songs
- User-friendly interface for playing and managing playlists
- Secure payment processing using Stripe
- Cloud-based storage and database management with Supabase and PostgreSQL
- Responsive design with Tailwind CSS for an optimal experience on various devices

## Prerequisites

Before running the app, make sure you have the following installed:

- Node.js
- npm or yarn
- PostgreSQL
- Supabase account with database setup
- Stripe account for payment processing

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/VibeVault.git
cd VibeVault
```
2. Install dependencies:
```bash
Copy code
npm install
```
3. Set up environment variables:
Create a .env.local file in the root directory and add the following variables:
```env
Copy code
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
STRIPE_PUBLIC_KEY=your-stripe-public-key
NEXT_PUBLIC_API_URL=your-api-url
NEXT_PUBLIC_SERVER_API_KEY=your-server-api-key
```
Replace the placeholders with your actual Supabase, Stripe, and server API information.

4. Running the App
Once you've completed the installation steps, you can run the app using the following command:

```bash
Copy code
npm run dev
```
Visit http://localhost:3000 in your web browser to access the VibeVault app.
