import "fuckadblock";
import { $, clickable } from "./utils";

let fab = new FuckAdBlock({
    checkOnLoad: true,
    resetOnEnd: true,
});

let initialized = false, adblockerPresent = null;

export default {
    initialize: () => {
        fuckAdBlock.onDetected(() => {
            adblockerPresent = true;
        });
        fuckAdBlock.onNotDetected(() => {
            adblockerPresent = false;
        });
        
        initialized = true;
        
        this.updateUi();
    },
    updateUi: () => {
        $("wizard-contents").innerHTML = adblockerPresent ? "Present" : "Not present";
    },
};