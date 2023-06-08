import Script from "next/script";

export default function Steam() {
  return (
    <div
      id="steam-widget"
      data-steamid="76561198150487970"
      data-num="8"
      data-width="400px"
      data-target="https://steam-embeds.vercel.app"
      style={{ display: "inline" }}
    >
      <Script src="https://steam-embeds.vercel.app/widget.js" />
    </div>
  );
}
