"use client";

import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Music2,
  ExternalLink,
} from "lucide-react";

type Props = {
  size?: number;
  className?: string;
  variant?: "icons" | "brand";
  lang?: "es" | "en";
};

const links = [
  {
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61586788132334",
    Icon: Facebook,
    // color sutil en glow (sin ser chillón)
    glow: "rgba(59,130,246,0.25)", // blue-500
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/fronteracode/",
    Icon: Instagram,
    glow: "rgba(255,79,216,0.22)",
  },
  {
    key: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@frontera.code",
    Icon: Music2,
    glow: "rgba(255,255,255,0.18)",
  },
  {
    key: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@FronteraCode",
    Icon: Youtube,
    glow: "rgba(239,68,68,0.20)", // red-500
  },
];

export default function SocialLinks({
  size = 18,
  className = "",
  variant = "brand",
  lang = "es",
}: Props) {

  // “brand”: pills con texto (desktop) + icon-only (mobile)
  // “icons”: solo iconos (si algún día lo ocupas)
  const showText = variant === "brand";

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {showText && (
        <span className="mr-1 hidden sm:inline text-xs text-white/50">
        </span>
      )}

      {links.map(({ key, label, href, Icon, glow }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
          className={[
            // Base
            "group inline-flex items-center gap-2 rounded-full",
            "border border-white/10 bg-white/5",
            "px-3 py-2 text-sm text-white/80",
            "transition",
            // Hover/focus
            "hover:border-white/25 hover:bg-white/10 hover:text-white",
            "hover:-translate-y-[1px] active:translate-y-0",
            "focus:outline-none focus:ring-2 focus:ring-purple-500/40",
          ].join(" ")}
          style={{
            boxShadow: `0 0 0 rgba(0,0,0,0)`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 26px ${glow}`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
          }}
        >
          <span className="grid place-items-center rounded-full border border-white/10 bg-black/20 p-1.5">
            <Icon
              className="text-purple-200/90 group-hover:text-white"
              style={{ width: size, height: size }}
            />
          </span>

          {/* Texto solo en sm+ para que en mobile se vea limpio */}
          {showText && (
            <span className="hidden sm:inline font-medium tracking-tight">
              {label}
            </span>
          )}

          {/* micro detalle “external link” en hover (solo desktop) */}
          <ExternalLink className="hidden sm:inline h-4 w-4 text-white/30 opacity-0 transition group-hover:opacity-100" />
        </a>
      ))}
    </div>
  );
}
