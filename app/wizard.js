import "fuckadblock";
import bowser from "bowser";
import { $, clickable, setConditionalClass, bindText, bindProp } from "./utils";
import wizardData from "./wizard-data";

let fab = new FuckAdBlock({
    checkOnLoad: true,
    resetOnEnd: true,
});

let initialized = false,
    adblockerPresent = null,
    browserName = null,
    unknownBrowser = false,
    selectedAdblockerIndex = 0;

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
        if (bowser.safari) {
            browserName = "safari";
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
        if (! unknownBrowser) {
            let browser = wizardData[browserName];
            let selectedAdblocker = browser.adblockers[selectedAdblockerIndex];

            bindText("wizard-browser-name", browser.name);
            bindText("wizard-adblocker-name", selectedAdblocker.name);
            bindProp("wizard-adblocker-icon", "src", selectedAdblocker.icon);
            bindText("wizard-adblocker-description", selectedAdblocker.description);
            bindText("wizard-adblocker-install", selectedAdblocker.button);
            bindProp("wizard-adblocker-install", "href", selectedAdblocker.url);
        }
    },
};