// Executive Committee, 2025-26 term.
// To add a member, copy one object below and edit the fields.
// "photo" is optional — leave it out to show initials instead.

export type CommitteeMember = {
  name: string;
  position: string;
};

export const committee: CommitteeMember[] = [
  { name: "Sajjad Hosen Sakib", position: "President" },
  { name: "Srishti Bhattacharjee Ichchha", position: "Vice President" },
  { name: "Prithwijit Mallik", position: "General Secretary" },
  { name: "Mashrukha Islam Chowdhury", position: "Joint Secretary" },
  { name: "Fahmida Nowrin", position: "Creative Secretary" },
  { name: "Sejuti Karmakar", position: "Academic Secretary" },
  { name: "Apurba Chowdhury", position: "Academic Secretary" },
  { name: "Rajarshi Das Gupta", position: "Academic Secretary" },
  { name: "Nirnoy Nil Paul", position: "Academic Secretary" },
  { name: "Mehraj Tajwar", position: "Organizing Secretary" },
  { name: "Labib Hasan", position: "Management Secretary" },
  { name: "Arithra Chowdhury", position: "Human Resource Secretary" },
  { name: "Tahsin Al Hossain", position: "Executive Member" },
  { name: "Abadullah Morshed Nayem", position: "Executive Member" },
  { name: "Farhan Ahmad", position: "Executive Member" },
  { name: "Tasnim Jahan", position: "Executive Member" },
  { name: "Towsif Uddin", position: "Executive Member" },
];

export const committeeTerm = "2025–26";
