"use client";

import { useEffect, useState } from "react";
import { notifyOwner } from "@/lib/notify-owner";

export type ReportLabels = { report: string; confirm: string; yes: string; cancel: string; done: string };

const KEY = "reported-reviews";
const readReported = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
};

/**
 * "Report" link under a published review: after a confirmation, emails the owner the review to check.
 * Nothing is hidden or deleted automatically; only the owner removes a review (Supabase dashboard).
 */
export default function ReportReview({ review, page, labels }: { review: { id: string; author: string; body: string }; page: string; labels: ReportLabels }) {
  const [step, setStep] = useState<"idle" | "confirm" | "done">("idle");
  // Remember reports in this browser so one visitor does not send the same report twice
  useEffect(() => {
    if (readReported().includes(review.id)) setStep("done");
  }, [review.id]);

  const send = () => {
    notifyOwner({
      subject: `Review reported: ${review.author}`,
      name: "Blog visitor (report)",
      message: [
        `A visitor reported this review on ${page}`,
        `Review id: ${review.id}`,
        `Name shown: ${review.author}`,
        "",
        review.body,
        "",
        "To remove it: Supabase > wassimgatri-blog-reviews > Table Editor > reviews (delete the row, or set hidden to true).",
      ].join("\n"),
    });
    try {
      localStorage.setItem(KEY, JSON.stringify([...readReported(), review.id].slice(-50)));
    } catch {
      /* private mode: the report is still sent */
    }
    setStep("done");
  };

  if (step === "done") return <p className="blog-review-report" role="status">{labels.done}</p>;
  if (step === "confirm") {
    return (
      <p className="blog-review-report" role="group" aria-label={labels.confirm}>
        <span>{labels.confirm}</span>{" "}
        <button type="button" onClick={send}>{labels.yes}</button>{" "}
        <button type="button" onClick={() => setStep("idle")}>{labels.cancel}</button>
      </p>
    );
  }
  return (
    <p className="blog-review-report">
      <button type="button" onClick={() => setStep("confirm")}>{labels.report}</button>
    </p>
  );
}
