import type { ArticleTranslation } from "../../types";

// Part 4 of the payment series. French and Arabic mirror this structure (same heading ids, two tables,
// one fee box, one referral block after the comparison table).
export const en: ArticleTranslation = {
  slug: "redotpay-tunisia",
  title: "RedotPay in Tunisia",
  subtitle: "Card Fees, P2P Explained, Legal Risks and Safe Wallet Transfers",
  seoTitle: "RedotPay in Tunisia: Crypto Card Fees, P2P and Legal Risks",
  metaDescription:
    "RedotPay explained for Tunisians: card fees and limits, how P2P escrow works, why Rizon is not an option, the legal risks in Tunisia and safe wallet transfers.",
  imageAlt: "The Colosseum in Rome with a giant Italian flag hanging from its side and crowds in front",
  keywords: ["RedotPay Tunisia", "RedotPay card fees", "Binance P2P explained", "Rizon Tunisia", "crypto card Tunisia legal", "send USDT safely"],
  summary:
    "RedotPay is a Hong Kong crypto card service (Visa) whose official pages do not exclude Tunisian citizens, but no Tunisian text authorises residents to buy or hold crypto, so using it from Tunisia carries a real legal risk and this guide does not recommend it. For readers who already live abroad, it explains the fees, how P2P escrow works, why Rizon is not an option and how to send stablecoins without losing them.",
  body: [
    {
      type: "callout",
      tone: "warning",
      title: "Important notice",
      text: "This guide is for information only and is not legal or financial advice. Exchange rules, crypto rules and fees change often. Check the official sources linked below, and ask a lawyer or your bank if you are unsure.",
    },
    { type: "p", text: "**Can you use RedotPay in Tunisia, and is it a safe way to pay in euros?**" },
    {
      type: "p",
      text: "The short answer: RedotPay's official pages do not exclude Tunisian citizens or users located in Tunisia (checked 10 October 2026). But Tunisian exchange law says foreign-currency operations go through authorised intermediaries, and no Tunisian text authorises residents to buy or hold crypto. For a resident of Tunisia, funding a crypto card is legally risky, and we do not recommend it.",
    },
    {
      type: "p",
      text: "The practical parts below (P2P, wallet safety) are written for readers who **already live abroad**, for example students in Italy, where they can use such services lawfully. For the legal ways to pay from Tunisia, start with our [guide to paying Italian fees with an international card](article:international-card-tunisia).",
    },

    { type: "h2", id: "what-is-redotpay", text: "1. What is RedotPay and how does the card work?" },
    {
      type: "p",
      text: "RedotPay describes itself as \"a fintech service provider and not a bank\" (RedotPay). You deposit crypto, mainly stablecoins such as USDT or USDC, and spend it with a **Visa** card (the network named in its Terms). The physical card also works at ATMs.",
    },
    {
      type: "figure",
      src: "/blog/card-payment-terminal.webp",
      width: 1600,
      height: 1200,
      alt: "A card payment terminal with a Visa card inserted in its chip reader",
      caption: "For the shop, a crypto card is an ordinary Visa card: the crypto is converted into the local currency at the moment you pay.",
      credit: {
        text: "Photo: Basile Morin, CC BY-SA 4.0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Credit_card_terminal_in_Laos.jpg",
      },
    },
    {
      type: "fees",
      title: "RedotPay card fees (as of October 2026)",
      text: "There is no monthly or annual maintenance fee. Funding with a bank card costs 3% (minimum 1 USD).",
      feeIds: ["redotpay-virtual", "redotpay-physical", "redotpay-fx", "redotpay-conversion"],
    },
    {
      type: "ul",
      items: [
        "**Limits**: up to 100,000 USD per transaction; ATM withdrawals 3 a day and 30 a month, up to 3,750 USD a day on a USD card (lower in some countries) (fee and limit table).",
        "**KYC**: a photo of your original ID, a face scan, your home address and 4-5 questions on your job and source of funds (identity verification).",
        "**Who holds the money**: balances are held by Red Dot Trust Ltd, a Hong Kong trust company. The Terms say the account is not a bank account, and no deposit insurance is mentioned.",
        "**Binance Pay**: Binance ended Binance Pay support on RedotPay on 3 April 2026 ([Cointelegraph](https://cointelegraph.com/news/binance-redotpay-lawsuit-alleged-473-million-losses)), so do not plan to top up that way.",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "Risks to know before you deposit",
      text: "The Terms allow RedotPay to freeze or close an account \"at any time, without notice\". Users on [Trustpilot](https://www.trustpilot.com/review/www.redotpay.com) report funds blocked for weeks during source-of-funds checks. In August 2026, Binance affiliates sued RedotPay's co-founders in Hong Kong for about USD 472.8 million; these are allegations, no ruling has been reported, and RedotPay says it is defending itself.",
    },

    { type: "h2", id: "legal-status", text: "2. Is a crypto card legal for residents of Tunisia?" },
    {
      type: "p",
      text: "No Tunisian law or Central Bank (BCT) circular that expressly authorises buying crypto or stablecoins could be found. The exchange code ([law 76-18](https://www.finances.gov.tn/sites/default/files/17.pdf)) sets the frame:",
    },
    {
      type: "ul",
      items: [
        "**Art. 3**: foreign-exchange operations go only through the BCT or authorised intermediaries (banks, La Poste).",
        "**Art. 16 and 17**: residents must declare their assets abroad and may not dispose of them without authorisation. A crypto balance on a foreign platform is arguably such an asset.",
        "**Art. 21**: settlements between residents take place in Tunisia and in dinars.",
        "**Art. 35**: offences are punishable by 1 month to 5 years in prison and a fine of at least five times the amount involved.",
      ],
    },
    {
      type: "figure",
      src: "/blog/central-bank-tunisia-sign.webp",
      width: 1600,
      height: 681,
      alt: "Sign of the Central Bank of Tunisia with the national coat of arms and its name in Arabic and French",
      caption: "The Central Bank of Tunisia (BCT). None of its circulars expressly authorises residents to buy crypto.",
      credit: {
        text: "Photo: Wael Ghabara, CC BY-SA 3.0, via Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Tunisia441.jpg",
      },
    },
    {
      type: "p",
      text: "Buying USDT with dinars, through P2P or a foreign card, sits outside these channels. A new exchange code (bill 115/2025) is under discussion but had not been adopted at the last report found. Read more in [the exchange rules section of our payment guide](article:international-card-tunisia#exchange-rules).",
    },

    { type: "h2", id: "compare", text: "3. RedotPay, Rizon and the technology card compared" },
    {
      type: "table",
      caption: "Three cards Tunisians ask about, as of October 2026.",
      head: ["", "RedotPay", "Rizon", "Technology card (CTI)"],
      rows: [
        ["Who can open it", "Tunisian citizens are not excluded; approval not guaranteed", "Does not list Tunisia among supported nationalities", "Tunisian residents with at least the baccalaureate"],
        ["Card network", "Visa", "Visa", "Not stated on issuer pages"],
        ["Card fee", "10 USD virtual, 100 USD physical, no monthly fee", "10 USD virtual (Standard plan)", "Varies by issuer (Banque Zitouna: 20 TND a year)"],
        ["FX / conversion cost", "1.2% FX + 1% conversion", "1.7% + 0.10 USD (Standard)", "Your bank's rate and fees"],
        ["Limits", "100,000 USD per transaction", "No card limit stated", "1,000 TND per calendar year"],
        ["How it is funded", "Crypto deposit, bank card (3%), P2P", "USDC or USDT only", "Dinars at a Tunisian bank or La Poste"],
        ["Legal status for residents of Tunisia", "No authorising text; exposed under the exchange code", "Tunisia not among supported nationalities", "Legal, for the uses listed by the BCT"],
        ["Main risks", "Freezes, no deposit insurance, lawsuit", "KYC rejection is final", "Narrow list of allowed uses"],
      ],
    },
    {
      type: "p",
      text: "For residents of Tunisia, the legal option is the [international technology card](article:technology-card-tunisia), within [the uses the BCT allows](article:technology-card-tunisia#allowed-uses).",
    },
    {
      type: "p",
      text: "If you already live where using RedotPay is lawful and decide to open an account, you can register with the card below; the referral code must be entered at registration, because it cannot be added later.",
    },
    { type: "referral", provider: "redotpay" },

    { type: "h2", id: "why-not-rizon", text: "4. Why this guide does not recommend Rizon" },
    {
      type: "p",
      text: "Rizon is a stablecoin app with a Visa card, but it decides eligibility by **passport**. Its help centre (July 2026) does not list Tunisia among supported nationalities, its Terms say the product is intended for residents of the United States and Latin America, and its help centre says a KYC rejection is final. A Tunisian passport holder would very likely be refused, so we do not link to it.",
    },

    { type: "h2", id: "p2p-explained", text: "5. P2P explained: how an escrow order works" },
    {
      type: "p",
      text: "P2P (peer-to-peer) means buying crypto directly from another person on a platform. You pay them in local money, and the platform holds their crypto in **escrow** until they confirm your payment. Binance P2P and RedotPay's P2P Marketplace both work this way. Binance's [Terms](https://www.binance.com/en/terms) exclude users for whom using it would be illegal locally, even if their country is not on its [prohibited list](https://www.binance.com/en/legal/list-of-prohibited-countries).",
    },
    { type: "h3", id: "p2p-order-steps", text: "How escrow protects (and does not protect) a P2P order, for readers living abroad" },
    {
      type: "steps",
      items: [
        { title: "Choose an ad", text: "In the P2P zone you pick a seller; in Express the system picks one. Read the seller's terms and check their completion rate." },
        { title: "The crypto is locked", text: "When you place the order, the seller's crypto is reserved in Binance escrow." },
        { title: "Pay outside the app", text: "Pay with the method shown in the order, from an account in **your own name**, within the payment window (often 15 to 45 minutes)." },
        { title: "Notify, then wait", text: "Tap \"Transferred, notify seller\" only after paying. The seller checks and releases the crypto. Never cancel after paying; use the Appeal button instead ([Binance guide](https://www.binance.com/en/support/faq/detail/360039384951))." },
      ],
    },
    { type: "h3", id: "p2p-fees", text: "Fees and the name rule" },
    {
      type: "p",
      text: "On Binance's [P2P fee page](https://www.binance.com/en/fee/p2pFeeRate) (checked 10 October 2026), a taker in the P2P zone paid 0%, a maker 0.20%, and Express cost the taker 0.10%. The real cost is the gap between buy and sell prices, plus bank fees. The payer's name must match the counterparty's verified name. RedotPay says its P2P \"does not guarantee the settlement\" of trades (P2P Marketplace). Buying crypto with dinars from Tunisia is exposed under the exchange code (see section 2); this guide does not explain how to do it.",
    },
    { type: "h3", id: "p2p-scams", text: "Typical P2P scams" },
    {
      type: "table",
      caption: "Scams listed by Binance and how to spot them.",
      head: ["Scam", "How to spot it"],
      rows: [
        ["Fake proof of payment", "Check your own bank app, never a screenshot."],
        ["Fake SMS", "Log in to your account; texts can be forged."],
        ["Third-party payment", "The payer's name differs from the verified name."],
        ["Man in the middle", "The deal starts on Telegram or WhatsApp."],
        ["Fake support", "Binance never emails you to finish a P2P order."],
      ],
    },

    { type: "h2", id: "wallet-safety", text: "6. Sending stablecoins safely, step by step" },
    {
      type: "p",
      text: "For readers abroad. Crypto sends cannot be reversed. In the EU, Binance notes MiCA restrictions on unauthorised stablecoins, so USDC may be easier than USDT.",
    },
    { type: "h3", id: "step-coin-network", text: "Step 1: same coin and same network on both sides" },
    {
      type: "p",
      text: "Choose the coin and network in the **receiving** app first, then exactly the same pair in the sending app (RedotPay withdrawals).",
    },
    { type: "callout", tone: "warning", title: "Stop and check", text: "USDT on Tron (TRC20) is not USDT on BNB Smart Chain. A network the receiver does not list can mean lost funds. An unexpected memo field means: stop." },
    { type: "h3", id: "step-copy-address", text: "Step 2: copy the address with the copy button or QR code" },
    { type: "p", text: "Use the app's copy button or scan its QR code. Never type an address by hand." },
    { type: "callout", tone: "warning", title: "Stop and check", text: "Clipboard malware can swap a copied address. Install apps only from official stores." },
    { type: "h3", id: "step-compare-characters", text: "Step 3: compare the first and last characters" },
    { type: "p", text: "Compare the first 6 and last 6 characters with the original, plus a few in the middle." },
    { type: "callout", tone: "warning", title: "Stop and check", text: "If one character differs, cancel and copy again." },
    { type: "h3", id: "step-address-poisoning", text: "Step 4: never copy an address from your history" },
    { type: "p", text: "In **address poisoning**, scammers send a tiny transfer from a lookalike address so it shows in your history. Copy only from the receiving app or your address book." },
    { type: "callout", tone: "warning", title: "Stop and check", text: "An unexpected tiny deposit is a warning sign. Never reuse its address." },
    { type: "h3", id: "step-test-transaction", text: "Step 5: send a small test first" },
    { type: "p", text: "Send a small amount above the minimum, wait for it, then send the rest to the **same saved address**." },
    { type: "callout", tone: "warning", title: "Stop and check", text: "The test only protects you if the main transfer goes to exactly the same address." },
    { type: "h3", id: "step-block-explorer", text: "Step 6: check the TxID on a block explorer" },
    { type: "p", text: "Paste the TxID into the network's explorer (Solscan, BscScan, PolygonScan) to see the amount, receiver and status ([Binance Academy](https://www.binance.com/en/academy/articles/what-is-a-blockchain-explorer))." },
    { type: "callout", tone: "warning", title: "Stop and check", text: "Pending is not lost. Do not send again before it is confirmed." },
    { type: "h3", id: "step-whitelist", text: "Step 7: whitelist your addresses" },
    { type: "p", text: "Turn on the [withdrawal whitelist](https://www.binance.com/en/support/faq/how-to-enable-withdrawal-whitelist-on-binance-1d08944f103b4fc78d3519913b600086) and save each address with a clear label, coin and network." },
    { type: "callout", tone: "warning", title: "Stop and check", text: "Changing the whitelist can pause withdrawals for 24 to 72 hours. Plan ahead of a deadline." },
    { type: "h3", id: "step-seed-phrase", text: "Step 8: never share your seed phrase or 2FA codes" },
    { type: "p", text: "Real support staff never ask for your seed phrase, passwords or 2FA codes." },
    { type: "callout", tone: "warning", title: "Stop and check", text: "Anyone who asks for them, by chat, email or phone, is a scammer." },

    { type: "h2", id: "glossary", text: "7. Glossary of crypto terms" },
    {
      type: "keyFacts",
      items: [
        { label: "Wallet", value: "An app or account that holds your crypto and lets you send and receive it." },
        { label: "Address", value: "A long string of letters and numbers, like an IBAN for crypto." },
        { label: "Network / chain", value: "The road the money travels on (Solana, BNB Smart Chain, Tron…). Both sides must use the same one." },
        { label: "Stablecoin", value: "A token designed to stay worth 1 US dollar." },
        { label: "USDT", value: "The most common dollar stablecoin, issued by Tether." },
        { label: "USDC", value: "A dollar stablecoin issued by Circle." },
        { label: "Gas fee", value: "The fee paid to process a transfer on a network." },
        { label: "P2P", value: "Buying crypto directly from another person on a platform." },
        { label: "Escrow", value: "The platform locks the seller's crypto until the deal is complete." },
        { label: "KYC", value: "Identity verification (ID and face scan) before you can use the service." },
        { label: "Test transaction", value: "A small send to check the address before the main transfer." },
        { label: "Block explorer", value: "A public website where anyone can look up a transfer." },
        { label: "TxID", value: "The unique reference of a transfer, like a bank transfer reference." },
      ],
    },

    {
      type: "faq",
      id: "faq",
      title: "Frequently asked questions",
      items: [
        {
          q: "Does RedotPay work in Tunisia?",
          a: "Technically yes: as of October 2026, Tunisia is not on RedotPay's unsupported-nationality or blocked-location lists. Legally, no Tunisian text authorises residents to fund a crypto card, so it is risky and we do not recommend it from Tunisia.",
        },
        {
          q: "How much does the RedotPay card cost?",
          a: "10 USD for the virtual card and 100 USD for the physical card, with no monthly fee. Payments in another currency add 1.2%, and the crypto conversion adds 1%.",
        },
        {
          q: "Can a Tunisian open a Rizon account?",
          a: "Very likely not: Tunisia is not on Rizon's list of supported nationalities, and Rizon says a KYC rejection is final.",
        },
        {
          q: "What is Binance P2P and is it safe?",
          a: "It is a marketplace where you buy crypto from another user while Binance holds the seller's crypto in escrow. Escrow reduces the risk but does not stop fake payment proofs, third-party payments or off-platform scams.",
        },
        {
          q: "What happens if I send USDT on the wrong network?",
          a: "The funds are usually lost. Binance's Terms say crypto sent to an incompatible address is lost, and any recovery attempt is paid and not guaranteed.",
        },
        {
          q: "Can RedotPay freeze my account?",
          a: "Yes. Its Terms allow it to freeze or close an account at any time without notice, and users report blocks during source-of-funds checks.",
        },
      ],
    },
    {
      type: "sources",
      id: "official-sources",
      title: "Official sources",
      items: [
        { label: "RedotPay: card limitations and fees", url: "https://helpcenter.redotpay.com/en/articles/10339271-redotpay-card-limitations-fees" },
        { label: "RedotPay: identity verification requirements", url: "https://helpcenter.redotpay.com/en/articles/10920717-identity-verification-requirements" },
        { label: "RedotPay: unsupported countries and regions", url: "https://helpcenter.redotpay.com/en/articles/10339263-redotpay-unsupported-countries-regions" },
        { label: "RedotPay: location-based access restrictions", url: "https://helpcenter.redotpay.com/en/articles/14252906-location-based-access-restrictions" },
        { label: "RedotPay: Terms of Service", url: "https://www.redotpay.com/terms" },
        { label: "RedotPay: P2P Marketplace", url: "https://www.redotpay.com/p2p-marketplace" },
        { label: "RedotPay: withdrawing crypto to another wallet", url: "https://helpcenter.redotpay.com/en/articles/10339292-how-do-i-withdraw-crypto-from-redotpay-to-another-wallet-or-platform" },
        { label: "Binance: Terms of Use", url: "https://www.binance.com/en/terms" },
        { label: "Binance: list of prohibited countries", url: "https://www.binance.com/en/legal/list-of-prohibited-countries" },
        { label: "Binance: buying crypto via P2P", url: "https://www.binance.com/en/support/faq/detail/360039384951" },
        { label: "Binance: how to avoid common P2P scams", url: "https://www.binance.com/en/support/faq/detail/0acb8aea955f4970a70bef25ee05f2e2" },
        { label: "Binance: P2P fee rates", url: "https://www.binance.com/en/fee/p2pFeeRate" },
        { label: "Tunisian Ministry of Finance: exchange code (law 76-18)", url: "https://www.finances.gov.tn/sites/default/files/17.pdf" },
        { label: "Banque Centrale de Tunisie: circular 2016-09 (technology card)", url: "https://www.bct.gov.tn/bct/siteprod/documents/Cir_2016_09_fr.pdf" },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Update note",
      text: "Last verified: October 2026. Fees, supported countries and networks change; check the RedotPay and Binance apps before you send anything. The Tunisian exchange code may be reformed: watch for the adoption of bill 115/2025.",
    },
  ],
  guide: [
    {
      type: "keyFacts",
      items: [
        { label: "RedotPay card", value: "Visa; 10 USD virtual, 100 USD physical, no monthly fee" },
        { label: "Cost on a euro payment", value: "1.2% FX + 1% crypto conversion" },
        { label: "Rizon", value: "Does not list Tunisia among supported nationalities" },
        { label: "Residents of Tunisia", value: "No text authorises crypto; legally risky" },
      ],
    },
    { type: "h2", id: "payment-path", text: "The payment path in brief" },
    {
      type: "ol",
      items: [
        "[Paying Italian fees with an international card](article:international-card-tunisia)",
        "[The international technology card](article:technology-card-tunisia)",
        "[Paying pagoPA from abroad](article:pay-pagopa-from-abroad)",
        "RedotPay, P2P and wallet safety",
        "[Opening a bank account in Italy](article:bank-account-italy-student)",
      ],
    },
  ],
};
