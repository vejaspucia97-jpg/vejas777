import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronDown,
  CircleDollarSign,
  Menu,
  MessageCircle,
  Radio,
  Shield,
  X,
} from "lucide-react";
import multicamBackground from "../assets/dark-multicam.jpg";
import {
  DiscordIcon,
  KickIcon,
  TikTokIcon,
  YouTubeIcon,
} from "../components/BrandIcons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VEJAS777 — Tiesioginės transliacijos ir bendruomenė" },
      {
        name: "description",
        content:
          "Oficiali VEJAS777 svetainė — tiesioginės transliacijos, YouTube, TikTok, Kick, Discord ir parama.",
      },
      { property: "og:title", content: "VEJAS777 — Transliacijos ir bendruomenė" },
      {
        property: "og:description",
        content: "Žiūrėk VEJAS777 tiesiogiai ir prisijunk prie bendruomenės.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VejasPage,
});

const links = {
  youtube: "https://www.youtube.com/@Vejas777",
  tiktok: "https://www.tiktok.com/@vejas7770",
  kick: "https://kick.com/vejas777",
  discord: "https://discord.gg/CR4a6t8ufj",
  donate: "https://streamlabs.com/vejaspucia/tip",
};

const channels = [
  {
    name: "YouTube",
    description: "Video, klipai ir naujas turinys.",
    href: links.youtube,
    icon: YouTubeIcon,
    color: "#FF0000",
    code: "YT.01",
  },
  {
    name: "TikTok",
    description: "Trumpi video ir geriausi momentai.",
    href: links.tiktok,
    icon: TikTokIcon,
    color: "#ffffff",
    code: "TT.02",
  },
  {
    name: "Kick",
    description: "Tiesioginės VEJAS777 transliacijos.",
    href: links.kick,
    icon: KickIcon,
    color: "#53FC18",
    code: "KK.03",
  },
  {
    name: "Discord",
    description: "Prisijunk prie bendruomenės.",
    href: links.discord,
    icon: DiscordIcon,
    color: "#5865F2",
    code: "DC.04",
  },
];

function ExternalLink({
  href,
  className,
  children,
  label,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
    >
      {children}
    </a>
  );
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-label="VEJAS777 pradžia">
      <span className="brand-chevron" aria-hidden="true">V</span>
      <span>VEJAS<span className="text-primary">777</span></span>
    </span>
  );
}

function VejasPage() {
  // Rankiniu būdu valdoma būsena. Vėliau čia galima prijungti Kick ar YouTube API.
  const isLive = true;

  return (
    <div className="site-shell">
      <img
        src={multicamBackground}
        alt=""
        width={1920}
        height={1280}
        className="multicam-background"
        aria-hidden="true"
      />
      <div className="site-overlay" aria-hidden="true" />

      <header className="site-header">
        <nav className="site-container nav-row" aria-label="Pagrindinė navigacija">
          <a href="#pradzia" className="brand-link"><BrandMark /></a>
          <div className="desktop-nav">
            <a href="#live">LIVE</a>
            <a href="#kanalai">Kanalai</a>
            <a href="#parama">Parama</a>
          </div>
          <ExternalLink href={links.discord} className="button button-discord nav-discord">
            <span className="status-dot status-dot-small" aria-hidden="true" />
            JOIN DISCORD
          </ExternalLink>
          <details className="mobile-menu">
            <summary aria-label="Atidaryti meniu">
              <Menu className="menu-open" size={22} aria-hidden="true" />
              <X className="menu-close" size={22} aria-hidden="true" />
            </summary>
            <div className="mobile-menu-panel">
              <a href="#live">LIVE STATUS</a>
              <a href="#kanalai">MANO KANALAI</a>
              <a href="#parama">PARAMA</a>
              <ExternalLink href={links.discord} className="mobile-discord-link">
                JOIN DISCORD <ArrowUpRight size={17} aria-hidden="true" />
              </ExternalLink>
            </div>
          </details>
        </nav>
      </header>

      <main>
        <section id="pradzia" className="hero-section">
          <div className="site-container hero-grid">
            <div className="hero-copy fade-up">
              <div className="eyebrow"><span /> LIETUVIŠKAS TURINYS <span /></div>
              <h1>VEJAS<span>777</span></h1>
              <p className="hero-lead">Sveikas atvykęs į mano kampą.</p>
              <p className="hero-subcopy">Transliacijos, video, bendruomenė ir dar daugiau.</p>
              <div className="hero-actions">
                <ExternalLink href={links.kick} className="button button-live">
                  <span className="status-dot" aria-hidden="true" />
                  ŽIŪRĖTI TIESIOGIAI
                  <ArrowUpRight size={19} aria-hidden="true" />
                </ExternalLink>
                <a href="#kanalai" className="button button-ghost">
                  MANO KANALAI <ChevronDown size={19} aria-hidden="true" />
                </a>
              </div>
              <div className="quick-links" aria-label="Greitos nuorodos">
                {channels.map((channel) => (
                  <ExternalLink key={channel.name} href={channel.href} className="quick-link">
                    {channel.name}
                  </ExternalLink>
                ))}
              </div>
            </div>

            <aside id="live" className={`live-panel fade-up ${isLive ? "is-live" : ""}`} aria-label="Transliacijos būsena">
              <div className="panel-corner panel-corner-tl" aria-hidden="true" />
              <div className="panel-corner panel-corner-tr" aria-hidden="true" />
              <div className="panel-corner panel-corner-bl" aria-hidden="true" />
              <div className="panel-corner panel-corner-br" aria-hidden="true" />
              <div className="live-panel-top">
                <span>LIVE STATUS</span>
                <span className="signal-code">SIGNAL / 777</span>
              </div>
              <div className="radar-wrap" aria-hidden="true">
                <div className="radar-circle"><Radio size={34} /></div>
                <span className="radar-line" />
              </div>
              <div className="live-state">
                <span className="status-dot status-dot-large" aria-hidden="true" />
                <span>{isLive ? "DABAR TIESIOGIAI" : "ŠIUO METU OFFLINE"}</span>
              </div>
              <h2>{isLive ? "VEJAS777 TRANSLIUOJA" : "TRANSLIACIJA NETRUKUS"}</h2>
              <p>Prisijunk prie transliacijos ir būk veiksmo centre.</p>
              <ExternalLink href={links.kick} className="button button-live button-full">
                <Play size={19} fill="currentColor" aria-hidden="true" /> ŽIŪRĖTI LIVE
              </ExternalLink>
              <div className="manual-status"><span /> RANKINIU BŪDU NUSTATYTA BŪSENA</div>
            </aside>
          </div>
          <div className="hero-index" aria-hidden="true">77</div>
        </section>

        <section id="kanalai" className="content-section channels-section">
          <div className="site-container">
            <div className="section-heading">
              <div><span className="section-code">01 / KANALAI</span><h2>MANO KANALAI</h2></div>
              <p>Pasirink platformą ir prisijunk.</p>
            </div>
            <div className="channel-grid">
              {channels.map(({ name, description, href, icon: Icon, color, code }) => (
                <ExternalLink key={name} href={href} className="channel-card" label={`Atidaryti ${name}`}>
                  <div className="channel-card-top">
                    <span className="channel-icon" style={{ color }}>
                      <Icon size={26} />
                    </span>
                    <span className="channel-code">{code}</span>
                  </div>
                  <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                  </div>
                  <span className="channel-open">ATIDARYTI <ArrowUpRight size={17} aria-hidden="true" /></span>
                </ExternalLink>
              ))}
            </div>
          </div>
        </section>

        <section id="parama" className="content-section support-section">
          <div className="site-container support-layout">
            <div className="support-icon" aria-hidden="true"><CircleDollarSign size={42} /></div>
            <div className="support-copy">
              <span className="section-code">02 / PARAMA</span>
              <h2>PAREMK VEJAS777</h2>
              <p>Jeigu patinka turinys ir nori prisidėti prie kanalo – gali mane paremti.</p>
            </div>
            <div className="support-actions">
              <ExternalLink href={links.donate} className="button button-support">
                <span aria-hidden="true">💚</span> PAREMTI <ArrowUpRight size={19} aria-hidden="true" />
              </ExternalLink>
              <ExternalLink href={links.donate} className="button button-ghost">STREAMLABS</ExternalLink>
            </div>
          </div>
        </section>

        <section className="content-section community-section">
          <div className="site-container community-inner">
            <div className="community-copy">
              <span className="section-code">03 / BENDRUOMENĖ</span>
              <h2>PRISIJUNK PRIE<br />BENDRUOMENĖS</h2>
              <p>Visi naujienų pranešimai, bendravimas ir bendruomenė – Discord serveryje.</p>
              <ExternalLink href={links.discord} className="button button-discord-large">
                <MessageCircle size={21} aria-hidden="true" /> JOIN DISCORD <ArrowUpRight size={19} aria-hidden="true" />
              </ExternalLink>
            </div>
            <div className="community-emblem" aria-hidden="true">
              <div className="emblem-ring"><Shield size={74} strokeWidth={1.2} /><span>777</span></div>
              <p>VEJAS777 // COMMUNITY UNIT</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-main">
          <BrandMark />
          <p>Visos nuorodos vienoje vietoje.</p>
          <div className="footer-links">
            {channels.map((channel) => (
              <ExternalLink key={channel.name} href={channel.href} className="footer-link">{channel.name}</ExternalLink>
            ))}
            <ExternalLink href={links.donate} className="footer-link">Streamlabs</ExternalLink>
          </div>
        </div>
        <div className="site-container footer-bottom">
          <span>© 2026 VEJAS777</span>
          <span>LT // STREAMER &amp; CONTENT CREATOR</span>
        </div>
      </footer>
    </div>
  );
}