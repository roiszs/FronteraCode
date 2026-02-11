"use client";

import React from "react";
import { Facebook, Instagram, Youtube, Music2 } from "lucide-react";

type Props = {
  size?: number;
  className?: string;
  variant?: "icons" | "brand";
};

const links = [
  {
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61586788132334",
    Icon: Facebook,
    glow: "rgba(59,130,246,0.35)",
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/fronteracode/",
    Icon: Instagram,
    glow: "rgba(255,79,216,0.30)",
  },
  {
    key: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@frontera.code",
    Icon: Music2,
    glow: "rgba(255,255,255,0.22)",
  },
  {
    key: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@FronteraCode",
    Icon: Youtube,
    glow: "rgba(239,68,68,0.26)",
  },
];

export default function SocialLinks({
  size = 18,
  className = "",
  variant = "brand",
}: Props) {
  const isIconsOnly = variant === "icons";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map(({ key, label, href, Icon, glow }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
          className={
            isIconsOnly
              ? [
                  // ✅ ICONOS “NAKED” (footer)
                  "group inline-flex items-center justify-center",
                  "text-white/60 hover:text-white",
                  "transition",
                  "hover:-translate-y-[1px] active:translate-y-0",
                  "focus:outline-none focus:ring-2 focus:ring-purple-500/40 rounded-md",
                ].join(" ")
              : [
                  // ✅ PILLS (secciones)
                  "group inline-flex items-center justify-center gap-2",
                  "rounded-full border border-white/10 bg-white/5",
                  "px-3 py-2 text-sm text-white/80",
                  "transition",
                  "hover:border-white/25 hover:bg-white/10 hover:text-white",
                  "hover:-translate-y-[1px] active:translate-y-0",
                  "focus:outline-none focus:ring-2 focus:ring-purple-500/40",
                ].join(" ")
          }
          style={{ filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = `drop-shadow(0 0 18px ${glow})`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = "drop-shadow(0 0 0 rgba(0,0,0,0))";
          }}
        >
          <Icon
            className="transition-transform group-hover:scale-[1.06]"
            style={{ width: size, height: size }}
          />

          {!isIconsOnly && (
            <span className="hidden sm:inline font-medium tracking-tight">
              {label}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
