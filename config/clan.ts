// ============================================================
//  RYUKAI CLAN — Central Configuration File
//  Edit this file to update all site content, data, and links
// ============================================================

export const CLAN_CONFIG = {
  name: "Ryukai Clan",
  tagline: "Rise Above. Dominate Together.",
  game: "The Strongest Battlegrounds",
  discordInvite: "https://discord.gg/98JcUEP9",
  discordServerId: "YOUR_SERVER_ID", // Optional for widget later
  logo: "/logo.jpg", // Added logo path

  socialLinks: {
    discord: "https://discord.gg/98JcUEP9",
    youtube: "",
    twitter: "",
    roblox: "",
  },

  stats: {
    members: 120,
    wins: 3,
    activePlayers: 25,
    clanRank: 106,
  },
};

// ============================================================
//  FOUNDERS
// ============================================================

export interface FounderConfig {
  id: string;
  displayName: string;
  username: string;
  avatar: string;
  role?: string;
  discordProfileUrl?: string;
}

export const FOUNDERS: FounderConfig[] = [
  {
    id: "1153392848490737684",
    displayName: "curz",
    username: "curzzeddd",
    avatar: "https://cdn.discordapp.com/avatars/1153392848490737684/dbad3d657cd5e0e22d5c2f914711bb4e.png?size=256",
    role: "Founder",
    discordProfileUrl: "https://discord.com/users/1153392848490737684",
  },
  {
    id: "1444334130644127817",
    displayName: "Destro",
    username: "yepimdestro",
    avatar: "https://cdn.discordapp.com/avatars/1444334130644127817/1ac09e82180a71775131f90550604862.png?size=256",
    role: "Founder",
    discordProfileUrl: "https://discord.com/users/1444334130644127817",
  },
];

// ============================================================
//  STAFF MEMBERS
// ============================================================

export interface StaffMember {
  displayName: string;
  username: string;
  avatar: string;
  role: string;
  description: string;
}

export const STAFF_MEMBERS: StaffMember[] = [
  {
    displayName: "Staff Member 1",
    username: "staffmember1",
    avatar: "/images/staff/staff1.png",
    role: "Head Moderator",
    description: "Responsible for maintaining order and enforcing clan rules with precision.",
  },
  {
    displayName: "Staff Member 2",
    username: "staffmember2",
    avatar: "/images/staff/staff2.png",
    role: "Trial Manager",
    description: "Oversees all tryout processes, evaluations, and candidate rankings.",
  },
  {
    displayName: "Staff Member 3",
    username: "staffmember3",
    avatar: "/images/staff/staff3.png",
    role: "Event Coordinator",
    description: "Plans and organizes competitive events, tournaments, and scrimmages.",
  },
  {
    displayName: "Staff Member 4",
    username: "staffmember4",
    avatar: "/images/staff/staff4.png",
    role: "Community Manager",
    description: "Bridges the gap between leadership and community members.",
  },
];

// ============================================================
//  LEADERBOARD
// ============================================================

export interface LeaderboardEntry {
  rank: number;
  username: string;
  avatar: string;
  wins: number;
  points: number;
  badge?: string; // e.g. "Champion", "Elite", "Rising Star"
}

export const LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, username: "PlayerOne", avatar: "/images/avatars/p1.png", wins: 482, points: 9640, badge: "Champion" },
  { rank: 2, username: "PlayerTwo", avatar: "/images/avatars/p2.png", wins: 421, points: 8420, badge: "Elite" },
  { rank: 3, username: "PlayerThree", avatar: "/images/avatars/p3.png", wins: 398, points: 7960, badge: "Elite" },
  { rank: 4, username: "PlayerFour", avatar: "/images/avatars/p4.png", wins: 365, points: 7300, badge: "Veteran" },
  { rank: 5, username: "PlayerFive", avatar: "/images/avatars/p5.png", wins: 340, points: 6800, badge: "Veteran" },
  { rank: 6, username: "PlayerSix", avatar: "/images/avatars/p6.png", wins: 312, points: 6240, badge: "Rising Star" },
  { rank: 7, username: "PlayerSeven", avatar: "/images/avatars/p7.png", wins: 289, points: 5780, badge: "Rising Star" },
  { rank: 8, username: "PlayerEight", avatar: "/images/avatars/p8.png", wins: 261, points: 5220, badge: "Member" },
  { rank: 9, username: "PlayerNine", avatar: "/images/avatars/p9.png", wins: 243, points: 4860, badge: "Member" },
  { rank: 10, username: "PlayerTen", avatar: "/images/avatars/p10.png", wins: 220, points: 4400, badge: "Member" },
];

// ============================================================
//  GALLERY
// ============================================================

export interface GalleryItem {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  title: string;
  date: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { type: "image", src: "/images/gallery/event1.png", title: "Clan Tournament Finals", date: "May 2026" },
  { type: "image", src: "/images/gallery/event2.png", title: "Ranked Sweep — Season 4", date: "April 2026" },
  { type: "image", src: "/images/gallery/event3.png", title: "Squad Practice Session", date: "March 2026" },
  { type: "image", src: "/images/gallery/event4.png", title: "Community Event", date: "March 2026" },
  { type: "image", src: "/images/gallery/event5.png", title: "Top 10 Showcase", date: "February 2026" },
  { type: "image", src: "/images/gallery/event6.png", title: "Season 3 Champions", date: "January 2026" },
];

// ============================================================
//  RULES
// ============================================================

export const CLAN_RULES = [
  {
    number: "01",
    title: "Respect All Members",
    description:
      "Treat every clan member with respect regardless of rank, skill level, or background. Toxicity, harassment, or discrimination of any kind will not be tolerated.",
    icon: "shield",
  },
  {
    number: "02",
    title: "No Cheating or Exploiting",
    description:
      "Any member caught using exploits, hacks, or unfair advantages will be immediately and permanently removed from the clan without appeal.",
    icon: "ban",
  },
  {
    number: "03",
    title: "Activity Requirements",
    description:
      "Members must maintain a minimum activity level. Inactivity exceeding 14 days without prior notice may result in removal from the roster.",
    icon: "activity",
  },
  {
    number: "04",
    title: "Represent Ryukai Proudly",
    description:
      "Your behavior in public lobbies, Discord servers, and other platforms directly reflects on Ryukai Clan. Act professionally at all times.",
    icon: "star",
  },
  {
    number: "05",
    title: "Follow Staff Instructions",
    description:
      "All staff decisions are final unless formally appealed through proper channels. Undermining staff authority or causing disruption is grounds for removal.",
    icon: "users",
  },
  {
    number: "06",
    title: "No Drama or Witchhunts",
    description:
      "Keep personal conflicts out of clan spaces. Do not target, expose, or create drama around other members. Bring concerns to staff privately.",
    icon: "message-circle",
  },
  {
    number: "07",
    title: "Clan Tag Requirements",
    description:
      "Active members are required to display the [Ryukai] tag in their username when participating in official clan matches and events.",
    icon: "tag",
  },
  {
    number: "08",
    title: "No Sharing of Sensitive Info",
    description:
      "Do not share private clan strategies, internal communications, or confidential information with outside parties or rival clans.",
    icon: "lock",
  },
];
