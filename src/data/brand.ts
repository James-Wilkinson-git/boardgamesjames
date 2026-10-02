export const platforms = {
  youtube: {
    name: "YouTube",
    action: "Watch plays",
    href: "https://www.youtube.com/@BoardGaymesJames",
  },
  twitch: {
    name: "Twitch",
    action: "Watch live",
    href: "https://www.twitch.tv/boardgaymesjames",
  },
  boardGameGeek: {
    name: "BoardGameGeek",
    action: "Read reviews",
    href: "https://boardgamegeek.com/user/BoardGaymesJames",
  },
  instagram: {
    name: "Instagram",
    action: "Review graphics / social",
    href: "https://www.instagram.com/boardgaymesjames/",
  },
} as const;

export const mediaMetrics = {
  period: "September 2026",
  youtube: {
    impressions: "138.2K",
    impressionsGrowth: "32%",
    views: "33.1k",
    watchHours: "645",
    subscribers: "3,871",
  },
  instagram: {
    views: "7,750",
    viewers: "2242",
    interactions: "322",
    nonFollowerViews: "38.5%",
    followers: "2,048",
  },
  boardGameGeek: {
    thumbs: "14,821",
    geekGold: "13,133",
    geekListThumbs: "3,599",
    videoThumbs: "1,229",
  },
  twitch: {
    followers: "686",
  },
} as const;

export const contactAddress = ["hi", "@", "boardgaymesjames.com"].join("");

export function contactHref(subject?: string) {
  return `mailto:${contactAddress}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
}
