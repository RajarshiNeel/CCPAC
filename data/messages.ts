// "Message Desk" quotes shown on the homepage.
// To add another message, copy one of the objects below and edit it.

export type Message = {
  name: string;
  role: string;
  quote: string;
};

export const messages: Message[] = [
  {
    name: "Professor Mohammad Mozahidul Islam Chowdhury",
    role: "Principal",
    quote:
      "I firmly believe that the Chittagong College Physics & Astronomy Club will continue to inspire students in their pursuit of knowledge and scientific creativity, guiding them toward exploring and understanding the mysteries of the universe. I wish the club continued success in all its future endeavors.",
  },
  {
    name: "Md. Zahirul Islam",
    role: "Moderator",
    quote:
      "As the Moderator of CCPAC, I believe excellence begins with curiosity and grows through perseverance. In every equation we balance and every cosmic mystery we explore, we are sharpening not only our intellect but our character. May this club inspire each member to think deeply, compete boldly, and never lose the sense of wonder that first drew us to the stars.",
  },
];
