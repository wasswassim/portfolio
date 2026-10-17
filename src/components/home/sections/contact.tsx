"use client";

import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { AUTHOR_EMAIL } from "@/content/author";
import { BoxReveal, Card, SectionWrapper, buttonClass } from "../ui";

// "Let's work together", as in the template: a contact card on the left (the 3D keyboard floats on
// the right). The card plays the former hero video behind the form. Same EmailJS template as before:
// the field names map onto {{name}}, {{email}}, {{subject}}, {{message}} and {{time}}.
const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";
const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim(),
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim(),
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim(),
};

type Status = "idle" | "sending" | "success" | "error";
const field =
  "pointer-events-auto w-full rounded-md border border-input bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  // Play the video only while it is on screen (it is muted and decorative)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    io.observe(video);
    return () => io.disconnect();
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    if (!EMAILJS.serviceId || !EMAILJS.templateId || !EMAILJS.publicKey) {
      console.error("[EmailJS] Missing NEXT_PUBLIC_EMAILJS_* env vars at build time.");
      setStatus("error");
      return;
    }
    const time = form.elements.namedItem("time") as HTMLInputElement | null;
    if (time) time.value = new Date().toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, form, { publicKey: EMAILJS.publicKey });
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("[EmailJS] send failed:", err);
      setStatus("error");
    }
  };

  return (
    <SectionWrapper id="contact" ariaLabelledby="contact-title" className="mx-auto min-h-screen max-w-7xl py-24">
      <div className="mb-14">
        <BoxReveal width="100%">
          <h2 id="contact-title" className="text-center text-4xl font-bold md:text-7xl">
            LET&apos;S WORK <br />
            TOGETHER
          </h2>
        </BoxReveal>
      </div>
      <div className="mx-4 grid grid-cols-1 md:grid-cols-2">
        <Card className="relative mt-10 overflow-hidden rounded-xl bg-black/70 md:mt-20">
          <video
            ref={videoRef}
            src={VIDEO}
            loop
            muted
            playsInline
            preload="none"
            disablePictureInPicture
            aria-hidden="true"
            tabIndex={-1}
            className="absolute inset-0 size-full object-cover opacity-35"
          />
          <div className="relative p-6 md:p-8">
            <h3 className="text-3xl font-bold md:text-4xl">Contact form</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Write to me directly at{" "}
              <a href={`mailto:${AUTHOR_EMAIL}`} className="pointer-events-auto text-foreground underline underline-offset-4">{AUTHOR_EMAIL}</a>{" "}
              or leave your details here.
            </p>
            <form ref={formRef} onSubmit={onSubmit} method="post" className="mt-6 flex flex-col gap-4">
              <input type="hidden" name="time" />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm">
                  Name
                  <input name="name" type="text" required autoComplete="name" className={field} placeholder="Your name" />
                </label>
                <label className="flex flex-col gap-1.5 text-sm">
                  Email
                  <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
                </label>
              </div>
              <label className="flex flex-col gap-1.5 text-sm">
                Subject
                <input name="subject" type="text" required className={field} placeholder="Website, campaign, automation..." />
              </label>
              <label className="flex flex-col gap-1.5 text-sm">
                Message
                <textarea name="message" required rows={5} className={`${field} resize-none`} placeholder="Tell me about your project" />
              </label>
              <button type="submit" disabled={status === "sending"} className={buttonClass("default", "mt-2")}>
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
              <p role="status" className="min-h-5 text-sm">
                {status === "success" && "Thank you, your message is on its way. I'll reply soon."}
                {status === "error" && `Your message could not be sent. Please write to ${AUTHOR_EMAIL}.`}
              </p>
            </form>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
