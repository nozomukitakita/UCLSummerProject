// The Code is adapted from https://learn.microsoft.com/en-us/microsoftteams/platform/apps-in-teams-meetings/teams-live-share-tutorial


## Getting started

After cloning the repository from https://github.com/microsoft/live-share-sdk, you must first set up the npm workspace from the root of the project. 

And run the following commands.

```bash
npm install
npm run build:packages # Build Live Share packages
cd game-with-motioninput
npm start
```

### Make a ngrok tunnel

1. [Download ngrok](https://ngrok.com/download).
2. Start ngrok with port 8080.
   `ngrok http 8080 --host-header=localhost`


### Make the app package into Teams

1. Open `manifest.json` and replace `https://<<BASE_URI_DOMAIN>>` with the https path to your ngrok tunnel.
   For example,
   "configurationUrl": "https://<<BASE_URI_DOMAIN>>/?view=config&inTeams=1&load=1",

2. Create a zip file with the contents of `.\manifest` directory so that manifest.json, color.png, and outline.png are in the root directory of the zip file.

3. Upload the zipped file, then you can play games in teams.