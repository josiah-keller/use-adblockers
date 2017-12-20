import "fuckadblock";
import { $, clickable } from "./utils";

let fab = new FuckAdBlock({
    checkOnLoad: true,
    resetOnEnd: true,
});

let initialized = false, adblockerPresent = null;

export default {
    initialize: function() {
        fab.onDetected(() => {
            adblockerPresent = true;
        });
        fab.onNotDetected(() => {
            adblockerPresent = false;
        });
        
        initialized = true;
        
        this.updateUi();
    },
    updateUi: function() {
        $("wizard-contents").innerHTML = adblockerPresent ? "Present" : "Not present";
    },
};