import type { ImageMetadata } from "astro";

import squeezeIcon from "../content/projects/assets/squeeze.webp";
import formfitIcon from "../content/projects/assets/formfit.webp";
import mangadIcon from "../content/projects/assets/ranobem.png";
import ranobeIcon from "../content/projects/assets/ranobe.png";

const shots = import.meta.glob<{ default: ImageMetadata }>("../assets/apps/*/*.{png,jpg,webp}", {
  eager: true,
});
const shot = (path: string) => {
  const img = shots[`../assets/apps/${path}`];
  if (!img) throw new Error(`Missing screenshot: ${path}`);
  return img.default;
};

export type Feature = { icon: string; title: string; body: string };
export type Shot = { src: ImageMetadata; alt: string; caption?: string };

export type Landing = {
  slug: string;
  name: string;
  tagline: string;
  /** Short line under the hero heading. */
  lede: string;
  metaDescription: string;
  icon: ImageMetadata;
  /** Which theme block in the template styles this page. */
  theme: "squeeze" | "formfit" | "mangad" | "ranobe";
  playUrl: string;
  extraLinks?: { title: string; url: string }[];
  badges: string[];
  features: Feature[];
  /** "framed" screenshots get a CSS phone frame; "poster" ones are already store graphics. */
  shotStyle: "framed" | "poster";
  /** Indexes into `shots` for the hero [front, back] (poster themes). */
  heroShots?: [number, number];
  shots: Shot[];
  steps?: { title: string; body: string }[];
  faq: { q: string; a: string }[];
};

export const landings: Landing[] = [
  {
    slug: "squeeze",
    name: "Squeeze",
    tagline: "Free up storage. Keep the quality.",
    lede: "A video compressor that shrinks the videos on your phone by 50–80%, so they look the same on screen and take a fraction of the space. Everything runs on your phone.",
    metaDescription:
      "Squeeze compresses videos on Android up to 80% smaller. Batch compression, HEVC, works fully offline.",
    icon: squeezeIcon,
    theme: "squeeze",
    playUrl: "https://play.google.com/store/apps/details?id=in.atulpatare.video",
    badges: ["Up to 80% smaller", "Batch & background", "H.265 / HEVC", "100% offline"],
    features: [
      {
        icon: "🔍",
        title: "Find what's eating your storage",
        body: "See how much space your videos use, sort them largest first, and select the biggest ones in one tap.",
      },
      {
        icon: "📦",
        title: "Batch compress in the background",
        body: "Compress one video or hundreds. Progress stays in your notifications while you use other apps.",
      },
      {
        icon: "📐",
        title: "Know the savings before you start",
        body: "Pick High quality, Balanced or Smallest, or set an exact target size. You see the size after and the expected quality first.",
      },
      {
        icon: "🛡️",
        title: "Smart quality protection",
        body: "Auto resolution keeps the picture sharp instead of blocky, and videos that are already compressed are skipped.",
      },
      {
        icon: "⚖️",
        title: "Compare, then delete safely",
        body: "Play the original and the compressed copy side by side. Originals go only when you say so, with Android's own confirmation.",
      },
      {
        icon: "⚙️",
        title: "Full control when you want it",
        body: "H.265 or H.264, 1080p/720p/480p, 30 or 24 fps, remove audio. Uses your phone's hardware encoder, so it's fast and easy on the battery.",
      },
    ],
    shotStyle: "framed",
    shots: [
      { src: shot("squeeze/results.png"), alt: "Results screen showing 237 MB saved", caption: "Saved 237 MB" },
      { src: shot("squeeze/home_dark.png"), alt: "Home screen with storage card and largest videos", caption: "Largest videos first" },
      { src: shot("squeeze/compress_top.png"), alt: "Compression presets with estimated savings", caption: "See the savings first" },
      { src: shot("squeeze/progress.png"), alt: "Batch compression progress", caption: "Runs in the background" },
      { src: shot("squeeze/advanced.png"), alt: "Advanced codec, resolution and frame-rate options", caption: "Advanced options" },
    ],
    steps: [
      { title: "Pick your videos", body: "Or tap “Select largest” and let Squeeze choose." },
      { title: "Choose a size", body: "A preset or an exact target. See the result before you start." },
      { title: "Free up space", body: "Compare, then delete the originals you no longer need." },
    ],
    faq: [
      {
        q: "Will my videos look worse?",
        a: "Phone cameras record at a far higher bitrate than a phone screen needs. Squeeze re-encodes at a smarter bitrate, so on a phone screen the difference is very hard to spot, and you can compare before deleting anything.",
      },
      {
        q: "Are my videos uploaded anywhere?",
        a: "No. Squeeze doesn't even request the Internet permission. Every video is processed on your phone.",
      },
      {
        q: "Where are the compressed videos saved?",
        a: "In Movies/Squeeze. They keep the original date, so they stay in the same place in your gallery timeline.",
      },
    ],
  },
  {
    slug: "formfit",
    name: "FormFit",
    tagline: "Photos that fit every form.",
    lede: "Stuck on “Image size must be between 20 KB and 50 KB”? FormFit resizes your photo and signature to exactly what the exam or government form asks for, in seconds and fully offline.",
    metaDescription:
      "FormFit resizes photos and signatures to the exact KB and pixel size for SSC, UPSC, IBPS, NEET, PAN and passport forms. Offline, no ads.",
    icon: formfitIcon,
    theme: "formfit",
    playUrl: "https://play.google.com/store/apps/details?id=in.atulpatare.compress",
    badges: ["Exam presets", "Signature cleaner", "English & हिन्दी", "No ads, no watermark"],
    features: [
      {
        icon: "🎯",
        title: "Ready-made exam presets",
        body: "SSC, UPSC, IBPS / SBI, Railway RRB, NEET / JEE, State PSC, PAN card, passport photo. Each sets the right pixels, crop, KB range and DPI.",
      },
      {
        icon: "📏",
        title: "Hits the KB limit, not the quality",
        body: "Meets both maximum and minimum KB limits automatically, without making the photo blurry.",
      },
      {
        icon: "🙂",
        title: "Smart crop",
        body: "Exact pixel sizes like 200×230 px, with a crop that keeps the face in frame.",
      },
      {
        icon: "✍️",
        title: "Signature cleaner",
        body: "Turns a phone photo of your signature into dark ink on clean white paper.",
      },
      {
        icon: "🗂️",
        title: "Batch mode",
        body: "Resize up to 100 photos in one go. Convert JPG, PNG and WEBP, and see the size before and after.",
      },
      {
        icon: "🔒",
        title: "100% private",
        body: "No internet permission at all. Your Aadhaar, PAN and personal photos never leave your phone.",
      },
    ],
    shotStyle: "framed",
    shots: [
      { src: shot("formfit/results_light.png"), alt: "Results: 4 photos made 98% smaller", caption: "98% smaller, ready to upload" },
      { src: shot("formfit/sheet_light.png"), alt: "Choosing a target size or exam preset", caption: "Pick your exam" },
      { src: shot("formfit/adv_dark.png"), alt: "Advanced width, height, KB and format controls", caption: "Advanced controls" },
      { src: shot("formfit/hindi_light.png"), alt: "FormFit in Hindi", caption: "हिन्दी में भी" },
    ],
    steps: [
      { title: "Add photos", body: "One or many, or share straight from Gallery or WhatsApp." },
      { title: "Pick your form", body: "Choose an exam preset or set your own size." },
      { title: "Save or share", body: "Tap Compress, then upload with confidence." },
    ],
    faq: [
      {
        q: "Are the preset sizes official?",
        a: "Presets use commonly published values. Always check your exam's official notification before applying, and use a custom size if it differs.",
      },
      {
        q: "Does it add a watermark?",
        a: "No. No watermark, no ads and no login.",
      },
      {
        q: "Where are my photos saved?",
        a: "In Pictures/FormFit on your phone. Nothing is uploaded, because the app has no internet permission.",
      },
    ],
  },
  {
    slug: "ranobem",
    name: "MangaD",
    tagline: "Read manga your way.",
    lede: "A clean, fast reader for manga, manhwa, manhua and webtoons. Follow the series you love, get told the moment a new chapter drops, and read it the way you like.",
    metaDescription:
      "MangaD is a clean, fast manga, manhwa and webtoon reader for Android with chapter notifications, AniList sync and EPUB downloads. No ads.",
    icon: mangadIcon,
    theme: "mangad",
    heroShots: [2, 3],
    playUrl: "https://play.google.com/store/apps/details?id=in.atulpatare.ranobem.pro",
    badges: ["No ads", "New chapter alerts", "AniList sync", "EPUB downloads"],
    features: [
      {
        icon: "🔔",
        title: "Never miss a chapter",
        body: "Your library is checked every 12 hours and you're told which series updated. New chapters are tagged so you spot them right away.",
      },
      {
        icon: "📖",
        title: "Four reading modes",
        body: "Webtoon scroll, left to right, right to left and vertical pages. Fit screen, fit width or smart fit for long strips.",
      },
      {
        icon: "🔄",
        title: "AniList tracking",
        body: "Progress, status, score and notes sync as you read, and even work offline until you're back online.",
      },
      {
        icon: "📥",
        title: "Take it offline",
        body: "Save a whole series or a few chapters as EPUB books and read them in any e-book reader.",
      },
      {
        icon: "📚",
        title: "One library",
        body: "Everything you follow in one place, with read chapters checked off and history to jump back in.",
      },
      {
        icon: "⚡",
        title: "Light and fast",
        body: "Small, quick to open, light and dark themes. No sign-up needed, and available in English and Russian.",
      },
    ],
    shotStyle: "poster",
    shots: [
      { src: shot("ranobem/1.webp"), alt: "MangaD: unlimited manga" },
      { src: shot("ranobem/2.webp"), alt: "Browse the library" },
      { src: shot("ranobem/3.webp"), alt: "Read your favourite titles" },
      { src: shot("ranobem/4.webp"), alt: "Chapter list" },
      { src: shot("ranobem/5.webp"), alt: "Reader" },
    ],
    faq: [
      {
        q: "Is it really free?",
        a: "Yes. New chapter notifications, EPUB downloads, AniList tracking and the full reader are all free, with no ads.",
      },
      {
        q: "Do I need an account?",
        a: "No. An AniList login is optional, only if you want your progress to sync.",
      },
      {
        q: "Was it called something else?",
        a: "Yes, MangaD was previously called RanobeM.",
      },
    ],
  },
  {
    slug: "ranobe",
    name: "Ranobe",
    tagline: "Your pocket light novel reader.",
    lede: "A simple, open-source reader for light novels and web novels. Browse many sources, read in a reader you can tune to your liking, and save novels as EPUB to keep.",
    metaDescription:
      "Ranobe is a simple, open-source light novel reader for Android with multiple sources, EPUB export and a customisable reader.",
    icon: ranobeIcon,
    theme: "ranobe",
    playUrl: "https://play.google.com/store/apps/details?id=org.ranobe.downloader",
    extraLinks: [
      { title: "GitHub", url: "https://github.com/ranobe-org/ranobe" },
      { title: "Discord", url: "https://discord.gg/6CQ6u64dca" },
    ],
    badges: ["Open source", "No paywall", "Many sources", "Save as EPUB"],
    features: [
      {
        icon: "🧭",
        title: "Many sources",
        body: "Browse novels from many sources in English and Russian, with new sources added often. Turn on just the ones you want.",
      },
      {
        icon: "🔎",
        title: "Search everywhere",
        body: "Search across every source at once, then search and sort a novel's chapters.",
      },
      {
        icon: "📜",
        title: "Immersive reader",
        body: "Continuous vertical reading with adjustable font size and page themes, in light or dark.",
      },
      {
        icon: "💾",
        title: "Save chapters",
        body: "Download chapters for offline reading and export novels as EPUB books.",
      },
      {
        icon: "🔓",
        title: "No paywall",
        body: "Unlimited novel browsing and reading, free.",
      },
      {
        icon: "🧑‍💻",
        title: "Open source",
        body: "The code is on GitHub, and the community helps shape what comes next on Discord.",
      },
    ],
    shotStyle: "poster",
    shots: [
      { src: shot("ranobe/2.png"), alt: "Explore and choose sources" },
      { src: shot("ranobe/3.png"), alt: "Save chapters for offline reading" },
      { src: shot("ranobe/4.png"), alt: "Immersive, customisable reader" },
      { src: shot("ranobe/5.png"), alt: "Search across all sources" },
    ],
    faq: [
      {
        q: "Is Ranobe free?",
        a: "Yes, with no paywall. The Downloader edition on Google Play shows optional rewarded ads that you choose to watch.",
      },
      {
        q: "Can I read offline?",
        a: "Yes. Save chapters to your device, or export a novel as an EPUB and read it in any e-book app.",
      },
      {
        q: "Can I contribute?",
        a: "Please do. The project is open source on GitHub, and you can suggest sources or report bugs on Discord.",
      },
    ],
  },
];
