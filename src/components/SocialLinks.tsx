import {
    Facebook,
    Instagram,
    Youtube,
    Music2, // TikTok icon style
  } from "lucide-react";
  
  const socials = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61586788132334",
      icon: Facebook,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/fronteracode/",
      icon: Instagram,
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@frontera.code",
      icon: Music2,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@FronteraCode",
      icon: Youtube,
    },
  ];
  
  export default function SocialLinks({
    size = 18,
    className = "",
  }: {
    size?: number;
    className?: string;
  }) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {socials.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/60 transition hover:text-white hover:bg-white/10 hover:scale-105"
            >
              <Icon size={size} />
            </a>
          );
        })}
      </div>
    );
  }
  