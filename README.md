# PawMatch

A portfolio dog-discovery demo built with JavaScript and Supabase. PawMatch combines searchable sample listings with a transparent, illustrative score based on each dog's size and energy.

**Live demo:** [nikhilchowdarybonthu.github.io/PawMatch](https://nikhilchowdarybonthu.github.io/PawMatch/)

<img width="1012" height="1096" alt="PawMatch homepage with sample dog listings" src="https://github.com/user-attachments/assets/611cf81b-5607-453d-bf69-82835e520de8" />


## Features

- Browse and filter available dogs by size and energy level
- Transparent demo scores based on listing size and energy; scores are not personalized yet
- Email/password authentication with Supabase
- Persistent favorites for signed-in users
- Demo adoption-interest records stored securely in Supabase; no shelter is contacted
- Row Level Security protecting personal data
- Responsive, browser-first interface

## Set up your own Supabase project

The published demo connects to its own Supabase project. To run an independent copy:

1. Create a new Supabase project and run [`supabase/schema.sql`](supabase/schema.sql) once in its SQL Editor. The script creates the three tables, row security policies, grants, and four sample listings. **Do not run it on the existing live PawMatch project.**
2. Replace the Supabase URL and browser-safe publishable key in `main.js` with those from your new project. Never put a service-role key or database password in frontend code.
3. In Supabase Authentication → URL Configuration, set the Site URL and allowed redirect URL to your deployed site. Update `emailRedirectTo` in `main.js` to that same URL. For local sign-up testing, allow your localhost URL too.
4. Start a local static server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`. Use your own Supabase project before testing sign-up or database writes.

## Tests

Run the matching, search, and filter tests with Node.js 22 or newer:

```bash
node --test tests/match.test.mjs
```

GitHub Actions runs this check on pushes and pull requests.

## Architecture

- **Frontend:** HTML, CSS, JavaScript modules
- **Backend services:** Supabase Auth and Postgres
- **Security:** Supabase Row Level Security
- **Data:** four sample listings; real adoption listings would require an approved provider integration

## Privacy and security

The frontend uses Supabase's browser-safe publishable key. Database access is governed by Row Level Security; the database password and service-role credentials are never stored in this repository.

## Project status

PawMatch is a portfolio MVP, not a live adoption service. Authentication and favorites work, and interest notes are stored in Supabase, but they are not sent to shelters. Before a production launch, add verified live listings, a staff review workflow, and end-to-end tests.

## Roadmap

- **Real listings:** integrate an officially supported adoption-data provider through a secure Supabase Edge Function.
- **Better matching:** let adopters describe their lifestyle and show the factors behind each score.
- **Application workflow:** provide a moderated staff dashboard for reviewing adoption-interest submissions.
- **Quality:** expand automated tests and add end-to-end coverage before a production launch.

## License

Licensed under the [MIT License](LICENSE).
