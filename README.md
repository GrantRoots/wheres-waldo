# Where's Waldo

My recreation of the game Where's Waldo. Find all 5 characters to win! Built with Express, Prisma (PostgreSQL), and React.

## Live

https://odinsta-gram.netlify.app

Frontend deployed on Netlify  
Backend hosted on Koyeb

## Features

- Stores coordinates of characters in the database and starts timer on game start
- Click a character then submit to check if its correct
- Checks if the click is inside the correct coordinates
- Puts a checkmark on the character if correct, and has a message telling them its right or wrong
- Rules button shows the user how to play the game
- Stores user's entered name and time when they finish

## Installation

1. `git clone git@github.com:GrantRoots/wheres-waldo.git`
2. `cd wheres-waldo/api`
3. `npm install`
4. `npm run build`
5. `node app.js`

- Open new terminal window for the frontend

6. `cd wheres-waldo/frontend`
7. `npm install`
8. `npm run dev`

## Environment Variables

```
DATABASE_URL="your db url"
VITE_API_URL="http://localhost:3000" - Backend url for frontend API calls
```
