# PawMatch

A full-stack dog-adoption discovery platform built with JavaScript and Supabase. PawMatch combines searchable dog listings with transparent, explainable compatibility scores.

**Live demo:** [nikhilchowdarybonthu.github.io/PawMatch](https://nikhilchowdarybonthu.github.io/PawMatch/)

## Features

- Browse and filter available dogs by size and energy level
- Transparent match scores that explain compatibility
- Email/password authentication with Supabase
- Persistent favorites for signed-in users
- Adoption-interest submissions stored securely in Supabase
- Row Level Security protecting personal data
- Responsive, browser-first interface

## Run locally

Open `index.html` with a local static server, for example:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Architecture

- **Frontend:** HTML, CSS, JavaScript modules
- **Backend services:** Supabase Auth and Postgres
- **Security:** Supabase Row Level Security
- **Data:** seeded starter dog listings; Petfinder integration is planned as an optional backend enhancement

## Privacy and security

The frontend uses Supabase's browser-safe publishable key. Database access is governed by Row Level Security; the database password and service-role credentials are never stored in this repository.

## Project status

PawMatch is a portfolio MVP. It supports real authentication, favorites, and adoption-interest submissions. Before a production launch, add end-to-end tests, Petfinder-backed listings, and a moderated staff workflow for applications.

## License

Licensed under the [MIT License](LICENSE).
