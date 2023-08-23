import { defineConfig } from "vite";
/* The Function is adapted from https://learn.microsoft.com/en-us/microsoftteams/platform/apps-in-teams-meetings/teams-live-share-tutorial*/
// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: "../dist",
    },
    resolve: {
        preserveSymlinks: true,
    },
    root: "./src",
    server: {
        port: 8080,
        open: true,
    },
    optimizeDeps: {
        force: true,
    },
});
