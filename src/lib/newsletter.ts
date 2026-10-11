import type { Lang } from "@/lib/i18n/config";

/**
 * Brevo "Simple HTML" form endpoints, one form (and list) per language so the double opt-in
 * email arrives in the reader's language. Public URLs only: no API key ever goes here.
 * While a value is empty the newsletter card is not rendered for that language.
 */
const BREVO = "https://58dbe215.sibforms.com/serve/";

export const NEWSLETTER_ACTION: Record<Lang, string> = {
  en: BREVO + "MUIFAM2ZJV_jKIoRWGE_vxk7c0x7wHvzXSeHLijbDQAOAa9WtKxjm6yuUrdaBAiSVvrHZUR3JlkqhRfZjuTPEPvIFU4vkxrSJnhO3tmuWQxF6m7a6jybsEpTGkhY_G5r8ZxdMqfMi-TVagQhzlWrLeJbJears0JvfgPti0inroQvdtGertD-_Vu4xlqGvFx300fcXqn0S4TRL4CMVw==",
  fr: BREVO + "MUIFAMtYkELMOOFQ0fFcG1_L7yEvhJFhMelEf3gjdpK252ZY3pn5enF8iLh0bnaRCAa30z4_oYI8WgHH3BEfXk5jx652h53lLJc9VXqvdc5NXg29M208yQCUaSRKIW-JjjPq5V1-OFbGVEbiaPL8NVFlPiNQpFt1jwHkOjwAikSa0CMj7uPOPfsnCUMtx6YSeSFZahGzQ3BiTjjWTw==",
  ar: BREVO + "MUIFAB5G7LAZxppt0MlV3CQkoWzkdCfxntR9Zp5nNDG-X074zhAzASjP0_UeLmmkvbL_OmeMYgbMxjshyfsK1jWG4sjtI5JxSfMlRABb2KJqx0Y5IbOc3lmDPKj-PLf088yD03jN5b43C98v5nDUxYbnPPmsjR8lnMaCq1LhWl_0B5ayuEramuiRLpLDWaIGt_s2rYBfhtKBBsp2Nw==",
};
