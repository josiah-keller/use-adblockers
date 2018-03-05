import "fuckadblock";
import bowser from "bowser";
import { $, $$, clickable, setConditionalClass, bindText, bindProp, bindArray, toArray } from "./utils";
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
        if (bowser.ios) {
            browserName = "mobilesafari";
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
            setConditionalClass("first-adblocker-selected", selectedAdblockerIndex === 0, $(".wizard-adblocker-absent"));
            setConditionalClass("multiple-options", browser.adblockers.length > 1, $(".wizard-adblocker-absent"));

            let adblockerOptions = browser.adblockers.filter((item, index) => index !== selectedAdblockerIndex);
            bindArray(
                adblockerOptions,
                $(".wizard-adblocker-selector-options"),
                $(".wizard-adblocker-selector-option"),
                (item, className) => {
                    if (className.match(/wizard-adblocker-selector-icon/)) {
                        bindProp(className, "src", item.icon);
                    }
                    if (className.match(/wizard-adblocker-selector-name/)) {
                        bindText(className, item.name);
                    }
                }
            );
            toArray($$(".wizard-adblocker-selector-option")).forEach(element => {
                clickable(element, () => {
                    // Have to translate between index within "options" array and index within "full" array
                    let index = parseInt(element.getAttribute("data-array-index"), 10);
                    let selection = adblockerOptions[index];
                    selectedAdblockerIndex = browser.adblockers.indexOf(selection);
                    this.updateUi();
                });
            });
        }
    },
};