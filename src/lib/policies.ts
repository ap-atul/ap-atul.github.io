export type Section = { heading: string; items: string[] };

export type Policy = {
  slug: string;
  name: string;
  intro: string;
  summary: string[];
  sections: Section[];
};

const OFFLINE = "The app does not request the Internet permission, so it cannot send anything off your device.";
const NO_TRACKING = "No analytics, no crash reporting, no tracking, no third-party SDKs, no account or login.";
const LOCAL_SETTINGS = {
  heading: "Settings & local data",
  items: [
    "Your preferences are stored only on your device. They are never sent anywhere and are removed when you uninstall the app or clear its data.",
  ],
};

export const policies: Policy[] = [
  {
    slug: "ranobe",
    name: "Ranobe",
    intro: "Ranobe is a light novel reader and downloader.",
    summary: [
      "No personal data collection by the developer. Your library and downloads stay on your device.",
      "The Downloader edition shows optional rewarded ads from Google AdMob. Other editions contain no ads.",
    ],
    sections: [
      {
        heading: "Network access",
        items: [
          "Ranobe fetches novels and chapters from the external sources you browse. No personally identifiable data is sent to them by the app.",
        ],
      },
      {
        heading: "Advertising (Downloader edition only)",
        items: [
          "The Downloader edition uses Google AdMob to show rewarded ads that you choose to watch.",
          "Google may collect device identifiers such as the advertising ID, IP address and ad interaction data. See Google's policy at https://policies.google.com/technologies/ads.",
          "You can reset or opt out of personalised ads in your device's Google settings.",
        ],
      },
      {
        heading: "Permissions",
        items: [
          "Internet and network state: to load and download content.",
          "Foreground service, wake lock and notifications: to keep downloads running and show their progress.",
          "Storage (older Android versions): to save downloaded chapters.",
        ],
      },
      LOCAL_SETTINGS,
    ],
  },
  {
    slug: "ranobem",
    name: "MangaD",
    intro: "MangaD (formerly RanobeM) is a manga reader and downloader.",
    summary: [
      "No personal data collection. Your library and downloads stay on your device.",
      "No ads. " + NO_TRACKING,
    ],
    sections: [
      {
        heading: "Network access",
        items: [
          "MangaD fetches manga from the external sources you browse. No personally identifiable data is sent to them by the app.",
        ],
      },
      {
        heading: "Permissions",
        items: [
          "Internet and network state: to load and download content.",
          "Foreground service, wake lock and notifications: to keep downloads running and show their progress.",
          "Storage (older Android versions): to save downloaded chapters.",
        ],
      },
      LOCAL_SETTINGS,
    ],
  },
];
