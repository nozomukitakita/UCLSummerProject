/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/* The Function is adapted from https://learn.microsoft.com/en-us/microsoftteams/platform/apps-in-teams-meetings/teams-live-share-tutorial*/
import { pages } from "@microsoft/teams-js";

export function renderTabConfig(elem, theme) {
    const settingsTemplate = document.createElement("template");
    settingsTemplate["innerHTML"] = `
    <div class="wrapper ${theme}">
        <p class="title">Welcome to Game with MotionInput!</p>
        <p class="text">Press the save button to continue.</p>
    </div>
    `;
    elem.appendChild(settingsTemplate.content.cloneNode(true));

    // Save the configurable tab
    pages.config.registerOnSaveHandler((saveEvent) => {
        pages.config.setConfig({
            websiteUrl: window.location.origin,
            contentUrl: window.location.origin + "?inTeams=1&view=content",
            entityId: "Game with MotionInput",
            suggestedDisplayName: "Game with MotionInput",
        });
        saveEvent.notifySuccess();
    });

    // Enable the Save button in config dialog
    pages.config.setValidityState(true);
}
