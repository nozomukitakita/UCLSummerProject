/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/* The Function is adapted from https://learn.microsoft.com/en-us/microsoftteams/platform/apps-in-teams-meetings/teams-live-share-tutorial*/
import { PresenceState, UserMeetingRole } from "@microsoft/live-share";

export async function renderMeetingStage(container, elem, theme) {
    const stageTemplate = document.createElement("template");
    stageTemplate["innerHTML"] = `
    <div class="wrapper ${theme} stage">
        <canvas id="unity-canvas"></canvas>
        <div id="unity-warning"> </div>
    </div>
    `;

    elem.appendChild(stageTemplate.content.cloneNode(true));
    const wrapperElem = elem.querySelector(".wrapper");
    await renderScreen(elem, wrapperElem);
}

async function renderScreen(elem, wrapperElem) {
    var canvas = wrapperElem.querySelector("#unity-canvas");

    var buildUrl = "Build";
    var loaderUrl = buildUrl + "/build.loader.js";
    var config = {
        dataUrl: buildUrl + "/build.data",
        frameworkUrl: buildUrl + "/build.framework.js",
        codeUrl: buildUrl + "/build.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "UCL student",
        productName: "Game with MotionInput",
        productVersion: "1.0",
    };
    canvas.style.width = "170vh";
    canvas.style.height = "90vh";
    
    var script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
        createUnityInstance(canvas, config).catch((message) => {
            alert(message);
        });
    };
    elem.appendChild(script);
}
