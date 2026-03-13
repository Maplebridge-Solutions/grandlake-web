import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const AppleIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 814 1000"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.8 135.4-317.8 270-317.8 36.4 0 84.5 9.1 119.5 42.4 35 33.3 51.7 60.4 87.8 60.4 36.1 0 60.8-27.1 103.7-60.8 43-33.7 87.8-56.3 142.5-56.3zM544.1 113.6c21.9-25.7 37.9-61.6 37.9-97.5 0-4.5-.6-9.7-1.3-14.2-36.4 1.3-80.1 24.5-106.5 54.1-20.7 22.5-40.1 58.4-40.1 94.9 0 4.5.6 9.7 1.3 12.3 3.2.6 5.8.6 8.4.6 32.4 0 74.2-21.9 100.3-50.2z" />
  </svg>
);

export const GooglePlayIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l232.6-232.6L47 0zm414 211.8L372.5 193 326.7 256l45.8 63 88.3-50.8c12.6-7.3 20.2-19.5 20.2-32.7-.1-13.2-7.7-25.4-20.2-32.7zm-388 218.3L104.6 499l280.8-161.2-60.1-60.1-252 192.4z" />
  </svg>
);

export const DownloadButtonLarge = ({
  icon,
  platform,
  className,
}: {
  icon: React.ReactNode;
  platform: string;
  className: string;
}) => (
  <button
    aria-label={`Download on the ${platform}`}
    className={`flex items-center gap-4 rounded-2xl px-8 py-4 transition-all hover:-translate-y-1 hover:shadow-xl active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ${className}`}
  >
    {icon}
    <div className="flex flex-col items-start leading-none">
      <span className="text-xs uppercase font-bold opacity-70 mb-1">
        Download on the
      </span>
      <span className="text-xl font-bold">{platform}</span>
    </div>
  </button>
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
