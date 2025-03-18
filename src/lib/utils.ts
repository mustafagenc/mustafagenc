import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function timeAgo({ date }: { date: Date }): string {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count > 0) {
      return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
    }
  }
  return "just now";
}

export function formatDate({
  date,
  short,
}: {
  date: string;
  short?: boolean;
}): string | null {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) return null;

  const standardDate = parsedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (short) return standardDate;

  const timeAgoText = timeAgo({ date: parsedDate });
  return `${standardDate} (${timeAgoText})`;
}

export function parseMDX({ markdown }: { markdown: string }): string {
  let parsedMarkdown = removeMDXAcorns({ markdown });
  parsedMarkdown = removeAlignProperty({ markdown: parsedMarkdown });

  return parsedMarkdown;
}

function removeMDXAcorns({ markdown }: { markdown: string }): string {
  const acornLineRegex = /^(.*%\[.*?\].*)$/gm;
  const acornBlockRegex = /{%.*?%}/g;

  markdown = markdown.replace(acornLineRegex, "").replace(acornBlockRegex, "");

  return markdown;
}

function removeAlignProperty({ markdown }: { markdown: string }): string {
  const regex = /(!\[.*?\]\(.*?\s+align=".*?"\))/g;

  return markdown.replace(regex, (match) => {
    return match.replace(/\s+align=".*?"/, "");
  });
}
