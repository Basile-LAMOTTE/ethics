<p align="center"><img src="https://i.postimg.cc/HLGn6Zwy/Screenshot-2024-03-10-at-01-55-51-Create-Next-App.png" alt="TAG"></p>

# Fuze.ai

This is a small school project where we had to make a "creative" ai.

## Getting Started

First, install dependencies:

```bash
npm i
```

Run the frontend:

```bash
npm run dev
```

and the backend:

```bash
node backend.js
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Details about the project

Our ai is within the `ai.py` file at the root of the repos. The algorithm take 4 parameters, that are folder names.
It will then pick random images within those folders, mix them, and apply some filters, to output a single image.
Our ai is ran by our very simple backend `backend.js`, that will get the generated image and send it to the ui when the user press the button `Let's go`.
