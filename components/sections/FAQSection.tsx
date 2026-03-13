import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => (
  <section className="py-32 bg-surface-page border-y border-surface-subtle">
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-content-primary mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-content-secondary">
          Find quick answers to common questions about GLK Transit.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-bold">
            How do I purchase a ticket?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Download the GLK Transit app, create an account, and head to the
            &quot;Buy Tickets&quot; section. Choose your ticket type, select a payment
            method — credit/debit card or your Transit Wallet — and confirm your
            purchase. Your ticket will appear instantly in &quot;My Tickets&quot; and is
            ready to use right away.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-bold">
            Is real-time tracking accurate?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Our buses are equipped with high-precision GPS that updates every
            few seconds, giving you reliable, real-time arrival estimates. While
            rare disruptions like heavy traffic or weather may cause minor
            delays, the app always reflects the most current location data
            available.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-bold">
            Can I get a refund for an unused ticket?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Yes. If a ticket has not been activated, you may request a refund
            within 2 hours of purchase directly through the app under &quot;My
            Tickets.&quot; Once a ticket is activated or the 2-hour window has
            passed, it becomes non-refundable. For further assistance, contact
            us at Info@maplebridgesolutions.ca.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-bold">
            What is the Transit Wallet?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            The Transit Wallet is a secure, prepaid balance built into the GLK
            Transit app. You can top it up anytime using a credit or debit card,
            then use it to buy tickets instantly without re-entering your
            payment details. It&apos;s the fastest way to pay and helps you keep
            track of your transit spending in one place.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-bold">
            Does the app work offline?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            An internet connection is required to purchase tickets, top up your
            wallet, and view live bus tracking. However, once a ticket is
            purchased, it is stored on your device and can be displayed for
            boarding even without a connection — so you&apos;re never stuck at the
            stop.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
);
