export type Section = { heading: string; items: string[] };

export type Policy = {
  slug: string;
  name: string;
  /** Overrides the page-wide "Last updated" date. */
  updated?: string;
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
    slug: "squeeze",
    name: "Squeeze",
    updated: "14 November 2026",
    intro: "Squeeze is a video compressor that shrinks the videos on your phone to free up storage.",
    summary: [
      "No personal data is collected. Your videos never leave your device.",
      "No ads. " + NO_TRACKING,
      OFFLINE,
    ],
    sections: [
      {
        heading: "Your videos",
        items: [
          "Squeeze reads the list of videos on your device (name, size, length and resolution) to show how much storage they use and to let you pick the ones to compress.",
          "Compression happens entirely on your device using its built-in video encoder. Videos are never uploaded, copied to a server or shared with anyone.",
          "Compressed copies are saved to the Movies/Squeeze folder on your device. Temporary files used while compressing are kept in the app's private cache and deleted as soon as each video is saved.",
          "Original videos are deleted only when you choose to, and Android asks you to confirm before anything is removed.",
        ],
      },
      {
        heading: "Permissions",
        items: [
          "Videos (photos and videos access, or storage on older Android versions): to list your videos, save compressed copies and delete originals when you ask.",
          "Notifications: to show compression progress and when a batch is finished.",
          "Foreground service and wake lock: to keep compressing while you use other apps or the screen is off. Compression stops when the batch finishes or you tap Cancel.",
        ],
      },
      LOCAL_SETTINGS,
      {
        heading: "Data sharing & deletion",
        items: [
          "No data is shared with third parties because no data is collected.",
          "Uninstalling the app removes its settings and cache. Compressed videos in Movies/Squeeze are your files and stay until you delete them.",
        ],
      },
    ],
  },
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
