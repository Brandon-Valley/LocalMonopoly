# LocalMonopoly

A local map board-game page published with GitHub Pages.

## Play

[https://brandon-valley.github.io/LocalMonopoly/](https://brandon-valley.github.io/LocalMonopoly/)

## Screenshot

[![Local Tycoon live game screenshot](https://image.thum.io/get/width/1400/crop/900/https://brandon-valley.github.io/LocalMonopoly/)](https://brandon-valley.github.io/LocalMonopoly/)

## Local Tycoon

**Local Tycoon** is a single-file, browser-based board game that turns a real city or address into a playable property board. Search for a place, use your browser location, or load the demo board, then roll around a route built from nearby real-world locations.

The game is designed around a satellite/local-map feel, emoji player tokens, animated movement, buyable properties, rent, ownership, upgrades, and a mobile-friendly interface.

## Features

- Build a local board from a city, address, browser location, or demo mode
- Generates a 40-space board from nearby real places
- Satellite-style map board with a route overlay
- Emoji player tokens with animated movement
- Human player vs bot
- Buy properties, collect rent, and upgrade owned places
- Property cards with names, addresses, prices, rent, owner, and visual previews
- 2D, 3D, and Spin view controls
- Game log, player money HUD, and owned-property badges
- Single-file static web app that runs directly in the browser

## How to Play

1. Open the live game.
2. Search for a city or address, use your current location, or tap Demo.
3. Review the generated local board.
4. Start the game.
5. Roll, move, buy places, collect rent, and try to outlast the bot.

## Tech Notes

This is a static browser game. It does not require a backend server, database, login, or install step. The repo is published as a GitHub Pages site.

## Deployment

This repository deploys automatically with GitHub Actions on every push to `master`.

The published site is served from:

[https://brandon-valley.github.io/LocalMonopoly/](https://brandon-valley.github.io/LocalMonopoly/)

## Project Structure

```text
LocalMonopoly/
├── index.html
├── README.md
└── .github/
    └── workflows/
        └── pages.yml
```

## Notes

The screenshot above is a live preview of the published GitHub Pages site. Clicking it opens the game.
