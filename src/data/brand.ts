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
  period: "October 2026",
  youtube: {
    impressions: "93.9K",
    impressionsGrowth: "32%",
    views: "13,504",
    watchHours: "645",
    subscribers: "3,918",
  },
  instagram: {
    views: "9,885",
    viewers: "4,126",
    interactions: "354",
    nonFollowerViews: "26.3%",
    followers: "2,048",
  },
  boardGameGeek: {
    thumbs: "14.926",
    geekGold: "13,141",
    geekListThumbs: "1,078",
    videoThumbs: "1,243",
  },
  twitch: {
    followers: "686",
  },
} as const;

export const contactAddress = ["hi", "@", "boardgaymesjames.com"].join("");

export function contactHref(subject?: string) {
  return `mailto:${contactAddress}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
}
