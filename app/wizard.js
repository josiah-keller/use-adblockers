import "fuckadblock";
import Bowser from "bowser";
import dateFormat from "dateformat";
import { $, $$, clickable, setConditionalClass, bindText, bindProp, bindArray, toArray, copyText } from "./utils";
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

        const browser = Bowser.getParser(navigator.userAgent);

        if (browser.isBrowser("chrome", true)) {
            browserName = "chrome";
        }
        if (browser.isBrowser("firefox", true)) {
            browserName = "firefox";
        }
        if (browser.isBrowser("edge", true)) {
            browserName = "edge";
        }
        if (browser.isBrowser("ie", true)) {
            browserName = "ie";
        }
        if (browser.isBrowser("safari", true) && browser.getOSName() == "macOS") {
            browserName = "safari";
        }
        if (browser.isBrowser("safari", true) && browser.getOSName() == "iOS") {
            browserName = "mobilesafari";
        }
        if (browser.getOSName() == "Android") {
            browserName = "android";
        }
        if (! browserName || ! wizardData.browsers.hasOwnProperty(browserName)) {
            unknownBrowser = true;
        }
        
        initialized = true;
        
        this.updateUi();
    },
    updateUi: function() {
        setConditionalClass("unknown-browser", unknownBrowser);
        setConditionalClass("adblocker-present", adblockerPresent);
        setConditionalClass("adblocker-absent", ! adblockerPresent);
        if (adblockerPresent) {
            let socialSuggestions = [], socialSuggestionOptions = wizardData.socialSuggestions.slice(), count = 2;
            while (count--) {
                let suggestion = socialSuggestionOptions.splice(
                    Math.floor(Math.random() * socialSuggestionOptions.length), 1)[0];
                socialSuggestions.push(suggestion);
            }
            bindText("wizard-social-suggestion-date", dateFormat(new Date(), "mmm d h:MM TT"));
            bindArray(
                socialSuggestions,
                $(".wizard-social-suggestions"),
                $(".wizard-social-suggestion"),
                (suggestion, className) => {
                    if (className.match(/wizard-social-suggestion-text/)) {
                        bindText(className, suggestion);
                    }
                }
            );
            toArray($$(".wizard-social-copy-button")).forEach(button => {
                clickable(button, () => {
                    let textElement = button.parentNode.parentNode.querySelector(".wizard-social-suggestion-text");
                    let copied = copyText(textElement.innerText);
                    setConditionalClass("action-successful", copied, button);
                });
            });
        }
        if (! unknownBrowser) {
            let browser = wizardData.browsers[browserName];
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