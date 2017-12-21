export default {
    chrome: {
        name: "Google Chrome",
        adblockers: [
            {
                name: "uBlock Origin",
                url: "https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm",
                button: "Get it in the Chrome Web Store",
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
                    click the button above, and then click the Add button next to "EasyList Standard."`,
            },
        ],
    },
};