// Emails the owner through the contact form's EmailJS service and template (the review copy and review
// reports). Fire-and-forget: a failure is logged and never blocks what the visitor is doing.
const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim(),
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim(),
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim(),
};

/** Field names match {{name}}, {{email}}, {{subject}}, {{message}} and {{time}} in the template. */
export function notifyOwner(mail: { subject: string; name: string; email?: string; message: string }): void {
  const { serviceId, templateId, publicKey } = EMAILJS;
  if (!serviceId || !templateId || !publicKey) return;
  import("@emailjs/browser")
    .then(({ default: emailjs }) =>
      emailjs.send(
        serviceId,
        templateId,
        {
          name: mail.name,
          email: mail.email || "(not given)",
          subject: mail.subject,
          message: mail.message,
          time: new Date().toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" }),
        },
        { publicKey },
      ),
    )
    .catch((err) => console.error("[EmailJS] owner email not sent:", err));
}
