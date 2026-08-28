# TravelTrucks

A web application for browsing and booking camper vans. Built as a homework project for GoIT Fullstack course.

## Features

- **Home page** — hero banner with a call-to-action button linking to the catalog
- **Catalog page** — paginated list of campers with backend filtering (location, vehicle type, engine, transmission) and Load More pagination via TanStack Query `useInfiniteQuery`
- **Camper details page** — full camper information, Swiper image gallery with thumbnails, user reviews with star ratings, and a booking form

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Query](https://tanstack.com/query) — infinite scroll pagination
- [Swiper](https://swiperjs.com/) — image gallery
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Hot Toast](https://react-hot-toast.com/) — booking notifications
- CSS Modules

## API

Backend: [Campers API](https://campers-api.goit.study/docs)

Base URL: `https://campers-api.goit.study`

## Links

- **Repository:** [github.com/BohdanOvcharenko/HW-TravelTrucks](https://github.com/BohdanOvcharenko/HW-TravelTrucks)
- **Live Demo:** add your Vercel or Netlify URL after deployment

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/BohdanOvcharenko/HW-TravelTrucks.git
cd HW-TravelTrucks
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Environment Variables

Optional — defaults to the GoIT API:

```env
NEXT_PUBLIC_API_BASE_URL=https://campers-api.goit.study
```

## Deployment

The project is ready for deployment on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/):

1. Push the repository to GitHub
2. Import the project on Vercel/Netlify
3. Deploy (no extra configuration required)
4. Update the **Live Demo** link in this README with your deployment URL

## Author

**Богдан** — GoIT Fullstack student
