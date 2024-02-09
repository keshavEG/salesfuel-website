import { headers } from "next/headers";
import { createCsrfToken } from "../security";
import { getExtensionStatus } from "../session";

export function isCrawlerBot() {
  const headersList = headers();
  const ua = headersList.get("user-agent")?.toLowerCase();
  const botsUaRegex =
    /(BingBot|GoogleBot|slurp|YandexBot|DuckDuckBot|BaiduSpider)/gi;
  if (ua) return ua.match(botsUaRegex) !== null;
  return false;
}

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const isBot = isCrawlerBot();
  const isExtensionInstalled = await getExtensionStatus();

  const url = new URL(input as string)

  const csrfToken = await createCsrfToken(
    url.pathname,
    init?.body
  );


  const headers = {
    "x-extension-installed": isExtensionInstalled ? "true" : "false",
    "x-crawler-bot": isBot ? "true" : "false",
    "x-csrf-token": csrfToken,
    ...(init?.headers || {}),
  };

  const options = {
    ...init,
    headers,
  };
  const res = await fetch(input, options);

  if (!res.ok) {
    const json = await res.json();
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number;
      };
      error.status = res.status;
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }

  return res.json();
}
