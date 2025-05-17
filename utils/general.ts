export function capitalize(str: string) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getTimeAgo(dateString: string): string {
    const now = new Date();
    const past = new Date(dateString);
    const diffMs = now.getTime() - past.getTime();

    const seconds = Math.floor(diffMs / 1000);

    const thresholds = [
        { limit: 60, value: seconds, unit: "second" },
        { limit: 3600, value: Math.floor(seconds / 60), unit: "minute" },
        { limit: 86400, value: Math.floor(seconds / 3600), unit: "hour" },
        { limit: 604800, value: Math.floor(seconds / 86400), unit: "day" },
        { limit: 2592000, value: Math.floor(seconds / 604800), unit: "week" },
        { limit: 31536000, value: Math.floor(seconds / 2592000), unit: "month" },
        { limit: Infinity, value: Math.floor(seconds / 31536000), unit: "year" },
    ];

    for (const { limit, value, unit } of thresholds) {
        if (seconds < limit) {
            return `${value} ${unit}${value !== 1 ? "s" : ""} ago`;
        }
    }

    return "just now";
}