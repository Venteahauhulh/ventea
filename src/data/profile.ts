// Every fact on the site lives in this file. Nothing here is invented:
// a field set to null is something not confirmed yet, and the page leaves it out.

export const profile = {
  name: 'H Vanlalvenhima',
  nickname: 'Ventea',
  role: 'Full-stack & mobile developer',
  level: 'Beginner',
  location: 'Upper Republic, Aizawl',
  region: 'Mizoram, India',
  timeZone: 'Asia/Kolkata',
  bio: "Hi, I'm Ventea, who loves tea parties.",
  photo: '/me/ventea-child.jpeg',
  github: 'https://github.com/Venteahauhulh',
  githubHandle: 'Venteahauhulh',
  email: 'mrventea13@gmail.com' as string | null,
};

export type Entry = {
  role: string;
  org: string;
  note?: string;
  place?: string;
  period: string | null;
  points?: string[];
};

export const experience: Entry[] = [
  {
    role: 'Software Engineer Trainee',
    org: 'Lailen Consultancy Pvt Ltd',
    place: 'Tuikhuahtlang, Aizawl',
    period: 'May 2026 – Sep 2026',
    points: [
      'Mobile development in Flutter',
      'Fixing bugs in production apps',
      'Publishing and updating apps on Google Play Console',
    ],
  },
  {
    role: 'Android Developer Virtual Intern',
    org: 'Eduskill',
    note: 'Supported by India Edu Program & Google for Developers',
    period: 'Apr 2024 – Jun 2024',
  },
  {
    role: 'Web Development Intern',
    org: 'Rareminds',
    period: '2022 – 2023',
  },
];

export const education: Entry = {
  role: 'Bachelor of Engineering, Computer Science and Engineering',
  org: 'PES College of Engineering',
  place: 'Mandya, Karnataka',
  note: 'First Class',
  period: '2021 – 2025',
};

// Zin: facts from the product document and git history of the private repo.
export const zin = {
  name: 'Zin',
  line: 'Seat booking for Sumos in Mizoram.',
  summary:
    'A mobile app for iOS and Android. Passengers pick an exact seat in a shared Sumo taxi and get a ticket; drivers manage their schedule, mark phone and walk-in bookings, and record who boarded. MST buses may come later.',
  facts: [
    ['Role', 'Solo — design, app, backend'],
    ['Platform', 'iOS & Android'],
    ['Status', 'Pilot in preparation · Android preview build'],
    ['Repository', 'Private'],
  ] as [string, string][],
  stack: [
    ['App', 'React Native, Expo Router, TypeScript, TanStack Query'],
    ['Backend', 'NestJS, Drizzle ORM, PostgreSQL'],
    ['Auth', 'Phone number + OTP (Firebase)'],
    ['Hosting', 'Render (API), Neon (database), EAS (builds)'],
  ] as [string, string][],
  built: [
    'Seat picking with conflict handling, so two people cannot book the same seat',
    'Phone sign-in with one-time codes, required only when booking',
    'Tickets with the driver’s name, phone, a Call button and the Sumo’s number plate',
    'PDF tickets, My bookings, and cancelling',
    'Driver tools: weekly days and times, passenger list, boarding',
    'Place search, calendar, light and dark themes',
  ],
  pilot: {
    operator: 'Joba',
    fare: 500,
    routes: [
      { from: 'Haulawng', to: 'Aizawl', time: '6:00 AM', board: 'Lamthuamthum' },
      { from: 'Aizawl', to: 'Haulawng', time: '2:00 PM', board: 'Millennium Centre' },
    ],
  },
  rules: [
    'Choose a specific seat before booking',
    'Every seat on a route costs the same',
    'Up to 4 seats in one booking',
    'Book up to 7 days ahead',
  ],
  // Front row: seats 1, 2, gap, driver. Then 3–6 and 7–10.
  layout: [
    [1, 2, null, 'driver'],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
  ] as (number | 'driver' | null)[][],
  maxSeats: 4,
  mergedPRs: 29,
  countedOn: '8 Nov 2026',
};
