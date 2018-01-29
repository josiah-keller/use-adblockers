export default {
    chrome: {
        name: "Google Chrome",
        adblockers: [
            {
                name: "uBlock Origin",
                url: "https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm",
                button: "Get it in the Chrome Web Store",
                description: `uBlock Origin is an extension that you can add to Google Chrome.  It is very
                    effective at blocking ads and trackers.  To get it, click the button below, and then
                    click "Add to Chrome."`,
                icon: "/images/3rd-party-icons/ublock-origin.svg",
            },
        ],
    },
    firefox: {
        name: "Firefox",
        adblockers: [
            {
                name: "uBlock Origin",
                url: "https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/",
                button: "Get it from the Firefox Add-ons website",
                description: `uBlock Origin is an extension that you can add to Firefox.  It is very effective
                at blocking ads and trackers.  To get it, click the button below, and then click "Add to Firefox."`,
                icon: "/images/3rd-party-icons/ublock-origin.svg",
            },
        ],
    },
    edge: {
        name: "Microsoft Edge",
        adblockers: [
            {
                name: "uBlock Origin",
                url: "https://www.microsoft.com/store/productId/9NBLGGH444L4",
                button: "Get it from the Microsoft Store",
                description: `uBlock Origin is an extension that you can add to Microsoft Edge.  It is very
                effective at blocking ads and trackers.  To get it, click the button below, and then click
                "Install."`,
                icon: "/images/3rd-party-icons/ublock-origin.svg",
            },
        ],
    },
    ie: {
        name: "Internet Explorer",
        adblockers: [
            {
                name: "EasyList Standard Tracking Protection List",
                url: "https://www.microsoft.com/en-us/iegallery#tracking-protection-list",
                button: "Get it on the Microsoft IE Gallery",
                description: `Internet Explorer can block ads without additional software if you provide it a
                    list of things to block.  The EasyList Standard list will block most ads for you.  To get it,
                    click the button below, scroll down, and then click the Add button next to
                    "EasyList Standard."`,
                icon: "/images/3rd-party-icons/easylist.png",
            },
        ],
    },
    safari: {
        name: "Safari",
        adblockers: [
            {
                name: "Adguard",
                url: "https://safari-extensions.apple.com/details/?id=com.adguard.safari-N33TQXN8C7",
                button: "Get it from Safari Extensions",
                description: `Adguard Adblocker is an extension that you can add to Safari.  It's fast and
                can block ads, trackers, and other nuisances.  To get it, click the button below, and then click
                "Install."`,
                icon: "/images/3rd-party-icons/adguard.svg",
            },
        ],
    },
};