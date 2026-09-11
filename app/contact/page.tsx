import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Questions, ideas, or want to partner with Every Kid Can? Send us a message directly.",
};

export default function ContactPage() {
  return (
    <div className="flex-1">
      <PageHeader
        title="Contact Us"
        description="Questions, ideas, or want to partner with us? Send a message directly."
      />

      <section>
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
