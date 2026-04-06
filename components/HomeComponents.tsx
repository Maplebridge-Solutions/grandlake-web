import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const AppStoreBadge = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Download on the App Store"
    className="inline-block transition-all hover:-translate-y-1 hover:opacity-90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-xl"
  >
    <Image
      src="/assets/appstore-badge.svg"
      alt="Download on the App Store"
      width={160}
      height={53}
      priority
    />
  </a>
);

export const GooglePlayBadge = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Get it on Google Play"
    className="inline-block transition-all hover:-translate-y-1 hover:opacity-90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-xl"
  >
    <Image
      src="/assets/googleplay-badge.png"
      alt="Get it on Google Play"
      width={180}
      height={53}
      priority
    />
  </a>
);

export const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col">
    <div aria-hidden="true" className="mb-8 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-brand-light text-brand shadow-sm ring-1 ring-brand/10">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-content-primary mb-4">{title}</h3>
    <p className="text-content-secondary leading-relaxed">{description}</p>
  </div>
);

export const PolicyLink = ({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
}) => (
  <Link
    href={href}
    className="inline-flex items-center gap-3 rounded-2xl bg-surface-page px-8 py-4 font-bold text-content-primary hover:bg-brand-light hover:text-brand transition-all ring-1 ring-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
  >
    <span aria-hidden="true">{icon}</span>
    {title}
    <ArrowRight size={18} aria-hidden="true" />
  </Link>
);
