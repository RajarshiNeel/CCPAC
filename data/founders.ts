// The three students who founded CCPAC on 13 February 2025.
// To add a founder, copy one object below and edit the fields.

export type Founder = {
  name: string;
  batch: string;
  achievements: string[];
};

export const founders: Founder[] = [
  {
    name: "Mohammad Abdullah",
    batch: "Chittagong College '24",
    achievements: [
      "APhO 2023 Participant",
      "IPhO TST Camper",
      "3× BdPhO National Winner",
      "BdOAA National Winner",
    ],
  },
  {
    name: "Rahul Nandi",
    batch: "Chittagong College '25",
    achievements: [
      "Bangladesh's First EuPhO Honourable Mention 2024",
      "APhO 2025 Honourable Mention",
      "Physics Cup 2025 Bronze Medalist",
      "IPhO TST Camper",
      "BdPhO 2025 National Champion",
      "5× BdPhO National Winner",
      "2× BdOAA National Winner",
    ],
  },
  {
    name: "Aditya Das Jitu",
    batch: "Chittagong College '25",
    achievements: [
      "Bangladesh's First APhO Bronze Medalist 2025",
      "Physics Cup 2025 Honorable Mention",
      "APhO 2024 & EuPhO 2024 Participant",
      "IPhO TST Camper",
      "3× BdPhO National Winner",
      "2× BdOAA National Winner",
    ],
  },
];

export const foundersIntro =
  "The strength of CCPAC begins with three trailblazers whose achievements span from national excellence to international physics and astronomy stages, where they have represented Bangladesh with distinction.";
