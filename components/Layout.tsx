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

        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://apps.apple.com/us/app/glktransit/id6760796005"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
            className="inline-block transition-all hover:-translate-y-0.5 hover:opacity-90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-lg"
          >
            <Image
              src="/assets/appstore-badge.svg"
              alt="Download on the App Store"
              width={110}
              height={37}
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
            className="inline-block transition-all hover:-translate-y-0.5 hover:opacity-90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-lg"
          >
            <Image
              src="/assets/googleplay-badge.png"
              alt="Get it on Google Play"
              width={124}
              height={37}
            />
          </a>
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
