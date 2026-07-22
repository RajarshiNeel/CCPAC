// Everything under the "Activities" page: sessions, the Weekly Physics
// Challenge, articles, and the EigenTalks podcast.
// To add a new item, copy an object in the matching list and edit it.
// Newest items should go at the TOP of each list.

export type Session = {
  number: number;
  date: string;
  topic: string;
  instructor: string;
  instructorNote: string;
};

export const sessions: Session[] = [
  {
    number: 3,
    date: "09 Apr 2026",
    topic: "Mechanics Problems: A Casual Deep Dive",
    instructor: "Ahnaf Fayaz",
    instructorNote:
      "Mechanical Engineering, BUET '25 · Chittagong College '25 · National Champion, BdPhO '22",
  },
  {
    number: 2,
    date: "11 Dec 2025",
    topic: "Particles in Nuclear Physics",
    instructor: "Enamul Hoque Jewel",
    instructorNote:
      "Nuclear Engineering, University of Dhaka (Batch 103) · Chittagong College '23",
  },
  {
    number: 1,
    date: "07 Dec 2025",
    topic: "Celestial Mechanics",
    instructor: "Srishti Bhattacharjee Ichchha",
    instructorNote:
      "Chittagong College '26 · BdOAA '25 National Winner and TST Camper",
  },
];

export type Challenge = {
  number: number;
  topic: string;
};

export const challenges: Challenge[] = [
  { number: 5, topic: "Equilibrium & Collision" },
  { number: 4, topic: "Gravitation and Orbital Mechanics" },
  { number: 3, topic: "Classical Mechanics and Electromagnetism" },
  { number: 2, topic: "Projectile Motion and Electrostatics" },
  { number: 1, topic: "Stratified Atmosphere and Particle Motion" },
];

export type Article = {
  number: number;
  topic: string;
  authors: string[];
};

export const articles: Article[] = [
  {
    number: 6,
    topic: "Through the Hill: How Quantum Mechanics Breaks the Rules",
    authors: ["Farhan Ahmad"],
  },
  {
    number: 5,
    topic: "Evolution of Stars — Episode 2: Stellar Lifecycle",
    authors: ["Rajarshi Das Gupta", "Efaj Mahadi Bhuiyan"],
  },
  {
    number: 4,
    topic: "Evolution of Stars — Episode 1: The Birth of Stars",
    authors: ["Rajarshi Das Gupta", "Efaj Mahadi Bhuiyan"],
  },
  {
    number: 3,
    topic: "π tends To 4: Story of Pi and Number 4",
    authors: ["Prithwijit Mallik"],
  },
  {
    number: 2,
    topic: "The Physics of a Skipping Stone: An Initiative Approach to Underdamped Motion",
    authors: ["Rajarshi Das Gupta"],
  },
  {
    number: 1,
    topic: "Particle Dynamics in Stratified Planetary Atmospheres",
    authors: ["Sajjad Hosen Sakib"],
  },
];

export type PodcastEpisode = {
  number: number;
  guest: string;
  host: string;
  youtubeId?: string;
};

export const podcastName = "EigenTalks";

export const podcastEpisodes: PodcastEpisode[] = [
  { number: 2, guest: "Ankon Dey Animesh", host: "Sajjad Hosen Sakib", youtubeId: "ObHHiHpdgzw" },
  { number: 1, guest: "Mohammad Abdullah", host: "Mashrukha Islam Chowdhury" },
];

export const activitiesIntro =
  "At CCPAC, we engage our members through a diverse range of activities designed to nurture curiosity, scientific thinking, and problem-solving skills — regular academic sessions, a Weekly Physics Challenge, article writing, and our own podcast, EigenTalks.";
