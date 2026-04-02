"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 w-full border-b border-surface-subtle bg-surface/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-22 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          aria-label="GLK Transit — home"
        >
          <Image
            src="/assets/logo.png"
            alt=""
            width={72}
            height={72}
            className="transition-all hover:scale-110"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="/privacy"
            className="text-sm font-semibold text-content-secondary hover:text-brand transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm font-semibold text-content-secondary hover:text-brand transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Terms
          </Link>
          <Link
            href="/wallet-policy"
            className="text-sm font-semibold text-content-secondary hover:text-brand transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Wallet
          </Link>
          <Link
            href="/support"
            className="text-sm font-semibold text-content-secondary hover:text-brand transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Support
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <DownloadButton
            icon={<AppleIcon />}
            label="App Store"
            className="bg-black text-white hover:bg-zinc-800"
          />
          <DownloadButton
            icon={<GooglePlayIcon />}
            label="Google Play"
            className="bg-brand text-white hover:bg-brand/90"
          />
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-xl text-content-primary hover:bg-surface-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            {open ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-surface-subtle bg-white px-4 py-4 flex flex-col gap-1"
        >
          <Link
            onClick={() => setOpen(false)}
            href="/privacy"
            className="rounded-xl px-4 py-3 text-sm font-semibold text-content-secondary hover:bg-surface-subtle hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset"
          >
            Privacy
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/terms"
            className="rounded-xl px-4 py-3 text-sm font-semibold text-content-secondary hover:bg-surface-subtle hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset"
          >
            Terms
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/wallet-policy"
            className="rounded-xl px-4 py-3 text-sm font-semibold text-content-secondary hover:bg-surface-subtle hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset"
          >
            Wallet
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/support"
            className="rounded-xl px-4 py-3 text-sm font-semibold text-content-secondary hover:bg-surface-subtle hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset"
          >
            Support
          </Link>
        </div>
      )}
    </nav>
  );
};

const AppleIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 814 1000"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.8 135.4-317.8 270-317.8 36.4 0 84.5 9.1 119.5 42.4 35 33.3 51.7 60.4 87.8 60.4 36.1 0 60.8-27.1 103.7-60.8 43-33.7 87.8-56.3 142.5-56.3zM544.1 113.6c21.9-25.7 37.9-61.6 37.9-97.5 0-4.5-.6-9.7-1.3-14.2-36.4 1.3-80.1 24.5-106.5 54.1-20.7 22.5-40.1 58.4-40.1 94.9 0 4.5.6 9.7 1.3 12.3 3.2.6 5.8.6 8.4.6 32.4 0 74.2-21.9 100.3-50.2z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l232.6-232.6L47 0zm414 211.8L372.5 193 326.7 256l45.8 63 88.3-50.8c12.6-7.3 20.2-19.5 20.2-32.7-.1-13.2-7.7-25.4-20.2-32.7zm-388 218.3L104.6 499l280.8-161.2-60.1-60.1-252 192.4z" />
  </svg>
);

const DownloadButton = ({
  icon,
  label,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  className: string;
}) => (
  <button
    className={`hidden sm:flex items-center gap-2 rounded-xl px-4 py-2.5 transition-all hover:-translate-y-0.5 active:scale-95 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ${className}`}
  >
    {icon}
    <div className="flex flex-col items-start leading-none">
      <span className="text-[9px] uppercase font-bold opacity-70">
        Download on
      </span>
      <span className="text-sm font-bold">{label}</span>
    </div>
  </button>
);

export const Footer = () => {
  return (
    <footer className="border-t border-surface-subtle bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/assets/logo.png"
                alt=""
                width={36}
                height={36}
                aria-hidden="true"
              />
              <span className="text-2xl font-bold tracking-tight">
                GLK Transit
              </span>
            </div>
            <p className="max-w-xs text-base text-content-secondary leading-relaxed">
              Modernizing public transportation for the Municipality of Grand
              Lake. Safe, reliable, and connected.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-content-primary mb-6">
              Legal & Info
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm font-medium text-content-secondary hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm font-medium text-content-secondary hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/wallet-policy"
                  className="text-sm font-medium text-content-secondary hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                >
                  Wallet & Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-content-primary mb-6">
              Support
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm font-medium text-content-secondary">
                <Mail size={16} className="text-brand" aria-hidden="true" />
                <a
                  href="https://mail.google.com/mail/?view=cm&to=Info@maplebridgesolutions.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                >
                  Info@maplebridgesolutions.ca
                </a>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-sm font-medium text-content-secondary hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-surface-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-content-muted">
            &copy; {new Date().getFullYear()} Municipality of Grand Lake. All
            rights reserved.
          </p>
          <p className="text-xs text-content-muted">
            Technology by Maplebridge Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};
