// Club events. To add a new event, copy the object below and edit it.
// "days" is optional — use it for multi-day programs like the camp.

export type EventDay = { date: string; topic: string };
export type Instructor = { name: string; credentials: string };

export type ClubEvent = {
  slug: string;
  title: string;
  status: "upcoming" | "past";
  description: string;
  sessionTime: string;
  days: EventDay[];
  instructors: Instructor[];
};

export const events: ClubEvent[] = [
  {
    slug: "winter-physics-camp-2025",
    title: "Winter Physics Camp 2025",
    status: "past",
    description:
      "Chittagong College Physics & Astronomy Club presents Winter Physics Camp 2025, conducted by our honorable alumni.",
    sessionTime: "10:00 AM – 12:15 PM · two 1-hour sessions with a 15-minute break",
    days: [
      { date: "23 Dec 2025", topic: "Heat & Thermodynamics" },
      { date: "24 Dec 2025", topic: "Work, Energy & Power" },
      { date: "27 Dec 2025", topic: "Simple Harmonic Motion (SHM) & Waves" },
      { date: "28 Dec 2025", topic: "Relativity & Quantum Mechanics" },
      { date: "29 Dec 2025", topic: "Electricity & Magnetism, Newtonian Mechanics" },
      { date: "30 Dec 2025", topic: "Winter Physics Mastery Test 2025 (Open Book Exam) & Wrap-Up" },
    ],
    instructors: [
      { name: "Siddhartha Hrishit Chakraborty", credentials: "BUET CSE '22 (Ranked 5th, BUET Admission Test 2022) · CC '22" },
      { name: "Lubaba Tasnia Khan", credentials: "BUET EEE '22 · CC '22" },
      { name: "Md. Shafitul Hasan Ovi", credentials: "BUET EEE '22 · CC '22" },
      { name: "Krettika Roy", credentials: "BUET IPE '22 · CC '22" },
      { name: "Tashfia Siddiqua", credentials: "BUET EEE '22 · CC '22" },
      { name: "Sababa Tamanna", credentials: "CUET EEE '22 · CC '22" },
      { name: "Ahamed Hamza", credentials: "BUET ME '23 · CC '23" },
      { name: "Abrar Azmain", credentials: "CUET ME '22 · CC '22" },
      { name: "Swayambhu Naiwrit Chakraborty", credentials: "BUET Archi '22 · CC '22" },
      { name: "Al Jawad", credentials: "BUET ME '22 · CC '22" },
      { name: "Anuprash Barua", credentials: "BUET Civil '22 · CC '22" },
    ],
  },
];
