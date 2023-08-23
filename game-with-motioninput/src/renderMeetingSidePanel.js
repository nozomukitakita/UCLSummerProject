/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/* The Function is adapted from https://learn.microsoft.com/en-us/microsoftteams/platform/apps-in-teams-meetings/teams-live-share-tutorial*/
import { meeting } from "@microsoft/teams-js";

export async function renderMeetingSidePanel(container, elem, theme) {
    const sideBarTemplate = document.createElement("template");
    sideBarTemplate["innerHTML"] = `
    <div class="wrapper ${theme}">
        <h1>Let's get started</h1>
        <p class="text">Press the share to meeting button to play game with MotionInput</p>
        <button class="share">Share to meeting</button>
        <div class="divider"></div>
    </div>
    `;
    elem.appendChild(sideBarTemplate.content.cloneNode(true));
    const shareButton = elem.querySelector(".share");
    shareButton.onclick = shareToStage;
}

// Share to the meeting stage
function shareToStage() {
    const urlToShare = window.location.origin + "?inTeams=1&view=stage";
    meeting.shareAppContentToStage((error, result) => {
        if (!error) {
            console.log("Started sharing, sharedToStage result");
        } else {
            console.warn("SharingToStageError", error);
        }
    }, urlToShare);
}

