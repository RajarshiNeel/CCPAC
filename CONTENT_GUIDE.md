# Content Guide (for non-technical committee members)

This guide explains how to update the website **without any coding knowledge**.
Everything you'll ever need to edit lives in the `data` folder, in plain files that
look like simple lists.

## Before you start

- Open the project folder in any code editor (VS Code is free: https://code.visualstudio.com).
- All the files you'll edit are inside the `data` folder.
- Each entry is wrapped in `{ }` curly braces — copy one, paste it, edit the text
  inside the quotes, and you're done. Don't delete the commas or quotation marks.

## Add a new committee member

Open `data/committee.ts`. Copy a line like this:

```ts
{ name: "Sajjad Hosen Sakib", position: "President" },
```

Paste it anywhere in the list, then change the name and position:

```ts
{ name: "Your New Member", position: "Executive Member" },
```

Save the file. Done.

## Add a new session

Open `data/activities.ts`, find the `sessions` list near the top, and copy an entry:

```ts
{
  number: 4,
  date: "15 May 2026",
  topic: "Your session topic",
  instructor: "Instructor Name",
  instructorNote: "Their background, one line",
},
```

Add it to the **top** of the list (so newest shows first) and increase `number` by 1.

## Add a new Weekly Physics Challenge

Same file, `challenges` list:

```ts
{ number: 6, topic: "Your challenge topic" },
```

## Add a new article

Same file, `articles` list:

```ts
{
  number: 7,
  topic: "Your article title",
  authors: ["Author Name"],
},
```

## Add a new podcast episode

Same file, `podcastEpisodes` list:

```ts
{ number: 3, guest: "Guest Name", host: "Host Name", youtubeId: "XXXXXXXXXXX" },
```

The `youtubeId` is the part of the YouTube URL after `watch?v=`. Leave it out
(`youtubeId` line removed entirely) if there's no video yet.

## Add a new event

Open `data/events.ts` and copy the whole event object, then edit:

- `slug`: a short URL-safe name, e.g. `"summer-astronomy-camp-2026"` — this becomes
  the page address `/events/summer-astronomy-camp-2026`.
- `title`, `description`, `sessionTime`: plain text.
- `days`: one line per day, `{ date: "...", topic: "..." }`.
- `instructors`: one line per instructor, `{ name: "...", credentials: "..." }`.

## Change the mission statement, email, or address

Open `data/site.ts` and edit the text inside the quotes for `tagline`, `description`,
`address`, or `email`.

## Change the Principal or Moderator message

Open `data/messages.ts` and edit the `quote`, `name`, or `role` text.

## After making changes

- **Running locally?** Just save the file — the site updates automatically.
- **Already live on Vercel?** Commit your change and push to GitHub. Vercel will
  rebuild and publish the update automatically within a minute or two.

## Something broke?

The most common mistake is a missing comma `,` or quotation mark `"` at the end of
a line. Compare your new entry closely to the one you copied — the structure
(commas, brackets, quotes) must stay exactly the same; only the text inside the
quotes should change.
