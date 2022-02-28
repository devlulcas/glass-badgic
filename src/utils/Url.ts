export function safeUrl(url: string) {
  return url.replaceAll(" ", "+");
}
