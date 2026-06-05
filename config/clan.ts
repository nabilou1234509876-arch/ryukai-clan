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
    youtube: "https://www.youtube.com/@YepImDestro",
    tiktok: "https://www.tiktok.com/@yepimdestro",
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
    displayName: "red",
    username: "reddie0312",
    avatar: "https://cdn.discordapp.com/avatars/1452711629321011352/9a826320150efcec69f4c4b9c45302bb.png?size=256",
    role: "Co-Owner",
    description: "Responsible for maintaining order and enforcing clan rules with precision.",
  },
  {
    displayName: "dev",
    username: "firr.dev",
    avatar: "https://cdn.discordapp.com/avatars/1355340039260737577/ef700a1313119b20f67d83d8debe3a17.png?size=256",
    role: "Co-Owner",
    description: "Oversees all tryout processes, evaluations, and candidate rankings.",
  },
  {
    displayName: "Lee ???",
    username: "huhnercaesarlol_53076",
    avatar: "https://cdn.discordapp.com/avatars/1389950463566151750/48e6584975671b11e39d8cd412edbfc0.png?size=256",
    role: "Server Overseer",
    description: "Plans and organizes competitive events, tournaments, and scrimmages.",
  },
  {
    displayName: "Brian",
    username: "imbrian_tsb",
    avatar: "https://cdn.discordapp.com/avatars/1324286623969443871/3a8fb2c96b6bf4a23a330af5f5e257f4.png?size=256",
    role: "Right Wing",
    description: "Bridges the gap between leadership and community members.",
  },
];

// ============================================================
//  LEADERBOARD
// ============================================================

export interface LeaderboardEntry {
  rank: number;
  displayName: string;
  username: string;
  avatar: string;
  stage: string;
  badge?: string; // e.g. "Champion", "Elite", "Rising Star"
}

export const LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, displayName: "levis", username: "ipqv", avatar: "https://cdn.discordapp.com/avatars/770679193000214538/710e82a77bcea67d13fda8ac6c5d9a26.png?size=256", stage: "stage 1 high", badge: "Champion" },
  { rank: 2, displayName: "Skyvn", username: "skyvenn.", avatar: "https://cdn.discordapp.com/avatars/1076865486530289704/0c7c28b85791287e04fd9fb557ef21b8.png?size=256", stage: "stage 1 mid", badge: "Elite" },
  { rank: 3, displayName: "Destro", username: "yepimdestro", avatar: "https://cdn.discordapp.com/avatars/1444334130644127817/1ac09e82180a71775131f90550604862.png?size=256", stage: "stage 1 weak", badge: "Elite" },
  { rank: 4, displayName: "red", username: "reddie0312", avatar: "https://cdn.discordapp.com/avatars/1452711629321011352/9a826320150efcec69f4c4b9c45302bb.png?size=256", stage: "stage 1 weak", badge: "Veteran" },
  { rank: 5, displayName: "curz", username: "curzzeddd", avatar: "https://cdn.discordapp.com/avatars/1153392848490737684/dbad3d657cd5e0e22d5c2f914711bb4e.png?size=256", stage: "stage 1 weak", badge: "Veteran" },
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
