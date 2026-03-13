import { MapPin, CreditCard, Wallet } from "lucide-react";
import { FeatureItem } from "@/components/HomeComponents";

export const FeaturesSection = () => (
  <section className="py-32 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-20">
        <h2 className="text-4xl font-bold text-content-primary sm:text-5xl tracking-tight mb-6">
          Designed for the modern rider.
        </h2>
        <p className="text-xl text-content-secondary leading-relaxed">
          We've built GLK Transit to make your daily commute as smooth as
          possible with these core features.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        <FeatureItem
          icon={<MapPin size={32} />}
          title="Live Tracking"
          description="Never miss a bus again. See real-time bus locations and accurate arrival estimates for every route in Grand Lake Municipality."
        />
        <FeatureItem
          icon={<CreditCard size={32} />}
          title="Digital Tickets"
          description="Buy single rides or multi-ride passes instantly in the app. Just show your ticket when boarding — no cash or paper needed."
        />
        <FeatureItem
          icon={<Wallet size={32} />}
          title="Transit Wallet"
          description="Load funds into your Transit Wallet and pay for rides in seconds. Your balance is always with you, right in the app."
        />
      </div>
    </div>
  </section>
);
