import "fuckadblock";
import bowser from "bowser";
import { $, clickable, setConditionalClass } from "./utils";
import wizardData from "./wizard-data";

let fab = new FuckAdBlock({
    checkOnLoad: true,
    resetOnEnd: true,
});

let initialized = false, adblockerPresent = null, browserName = null, unknownBrowser = false;

export default {
    initialize: function() {
        fab.onDetected(() => {
            adblockerPresent = true;
        });
        fab.onNotDetected(() => {
            adblockerPresent = false;
        });

        if (bowser.chrome) {
            browserName = "chrome";
        }
        if (bowser.firefox) {
            browserName = "firefox";
        }
        if (bowser.msedge) {
            browserName = "edge";
        }
        if (bowser.msie) {
            browserName = "ie";
        }
        
        if (! browserName || ! wizardData.hasOwnProperty(browserName)) {
            unknownBrowser = true;
        }
        
        initialized = true;
        
        this.updateUi();
    },
    updateUi: function() {
        setConditionalClass("unknown-browser", unknownBrowser);
        setConditionalClass("adblocker-present", adblockerPresent);
        setConditionalClass("adblocker-absent", ! adblockerPresent);
    },
};