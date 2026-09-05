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
  period: "August 2026",
  youtube: {
    impressions: "107.7K",
    impressionsGrowth: "52%",
    views: "24k",
    watchHours: "645",
    subscribers: "3,737",
  },
  instagram: {
    views: "12,947",
    viewers: "3344",
    interactions: "542",
    nonFollowerViews: "14.9%",
    followers: "2,087",
  },
  boardGameGeek: {
    thumbs: "14,591",
    geekGold: "13,115",
    geekListThumbs: "3,510",
    videoThumbs: "1,112",
  },
  twitch: {
    followers: "683",
  },
} as const;

export const contactAddress = ["hi", "@", "boardgaymesjames.com"].join("");

export function contactHref(subject?: string) {
  return `mailto:${contactAddress}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
}
