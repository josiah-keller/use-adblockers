import wizard from "./wizard";
import { $, clickable } from "./utils";

let wizardVisible = false;

function toggleSecondaryReasons() {
    document.body.classList.toggle("secondary-reasons-toggled");
}

function toggleWhatIs() {
    document.body.classList.toggle("what-is-toggled");
}

function toggleWizard() {
    document.body.classList.toggle("wizard-toggled");
    wizardVisible = ! wizardVisible;
    if (wizardVisible) {
        wizard.updateUi();
    }
}

function toggleLegal(e) {
    document.body.classList.toggle("legal-toggled");
}

function init() {
    clickable($(".secondary-reasons-toggle"), toggleSecondaryReasons);
    clickable($(".what-is-button"), toggleWhatIs);
    clickable($(".wizard-close"), toggleWizard);
    clickable($(".get-started-button"), toggleWizard);
    clickable($(".legal-link"), toggleLegal);

    wizard.initialize();
}

document.addEventListener("DOMContentLoaded", init);