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
    impressions: "81.1K",
    impressionsGrowth: "117%",
    views: "17,995",
    watchHours: "486.8",
    ctr: "4.5%",
    averageViewDuration: "4:33",
    subscribers: "3,668",
  },
  instagram: {
    views: "21,266",
    viewers: "5,092",
    interactions: "636",
    nonFollowerViews: "37.9%",
    followers: "2,110",
  },
  boardGameGeek: {
    thumbs: "14,019",
    geekGold: "13,022",
    geekListThumbs: "3,271",
    videoThumbs: "1,189",
  },
  twitch: {
    liveViews: "125",
    uniqueViewers: "109",
    peakViewers: "51",
    averageViewers: "23",
    followers: "670",
  },
} as const;

export const contactAddress = ["hi", "@", "boardgaymesjames.com"].join("");

export function contactHref(subject?: string) {
  return `mailto:${contactAddress}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
}
