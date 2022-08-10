export default {
    browsers: {
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
                    name: "AdGuard",
                    url: "https://apps.apple.com/us/app/adguard-for-safari/id1440147259?mt=12",
                    button: "Get it from Safari Extensions",
                    description: `AdGuard is an extension that you can add to Safari.  It's fast and
                    can block ads, trackers, and other nuisances.  To get it, click the button below, and then click
                    "GET."`,
                    icon: "/images/3rd-party-icons/adguard.svg",
                },
            ],
        },
        mobilesafari: {
            name: "iOS",
            adblockers: [
                {
                    name: "AdGuard",
                    url: "https://itunes.apple.com/us/app/adguard-adblock-privacy/id1047223162?mt=8",
                    button: "Get it on the App Store",
                    description: `AdGuard is an extension that you can add to Safari.  It's fast and
                    can block ads, trackers, and other nuisances.  To get it, tap the button below, and then tap
                    "GET."  Then, follow the instructions in the app to turn it on.`,
                    icon: "/images/3rd-party-icons/adguard.svg",
                },
                {
                    name: "Brave",
                    url: "https://itunes.apple.com/us/app/brave-browser-fast-adblocker/id1052879175?mt=8",
                    button: "Get it on the App Store",
                    description: `Brave is an alternative browser that you can use instead of Safari.  It blocks
                    ads and trackers, making your browsing experience safer and faster.  It also provides security
                    features like HTTPS Everywhere.  To get it, tap the button below, and then tap "GET."`,
                    icon: "/images/3rd-party-icons/brave.png",
                },
            ],
        },
        android: {
            name: "Android",
            adblockers: [
                {
                    name: "Brave",
                    url: "https://play.google.com/store/apps/details?id=com.brave.browser&hl=en",
                    button: "Get it on the Play Store",
                    description: `Brave is an alternative browser that you can use instead of Chrome or your
                    default browser.  It blocks ads and trackers, making your browsing experience safer and faster.
                    It also provides security features like HTTPS Everywhere.  To get it, tap the button below,
                    and then tap "Install."`,
                    icon: "/images/3rd-party-icons/brave.png",
                },
            ],
        },
    },
    socialSuggestions: [
        `I'm browsing safer with an adblocker. Learn how at https://useadblockers.org`,
        `Tired of seeing ads everywhere?  So was I. Learn how to get rid of them at https://useadblockers.org`,
        `My web experience is so much faster since I started blocking ads. Go to https://useadblockers.org to learn more.`,
        `I don't like big companies spying on me. I make it harder for them by blocking ads and trackers. Find out how at https://useadblockers.org`,
    ],
};