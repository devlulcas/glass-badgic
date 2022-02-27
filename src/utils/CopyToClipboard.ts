export function copyText(text: string) {
  try {
    navigator.clipboard.writeText(text);
    const el = document.createElement("textarea");
  } catch (err) {
    console.log(err);
  }
}

export function copyUrl(url: string) {
  const safeUrl = url.replaceAll(" ", "+");
  copyText(safeUrl);
}
