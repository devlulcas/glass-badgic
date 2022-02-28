export function copyText(text: string) {
  try {
    navigator.clipboard.writeText(text);
    const el = document.createElement("textarea");
  } catch (err) {
    console.log(err);
  }
}
