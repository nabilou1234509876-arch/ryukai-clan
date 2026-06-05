export function getStatusColor(status: string) {
  switch (status) {
    case "online": return "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]";
    case "idle": return "bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]";
    case "dnd": return "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]";
    case "offline": return "bg-gray-500 shadow-[0_0_8px_rgba(107,114,128,0.6)]";
    default: return "bg-gray-500";
  }
}
