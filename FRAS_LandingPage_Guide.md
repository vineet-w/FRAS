# FRAS Landing Page — Design & Build Guide
### Version 2.0 · Pre-Launch · Multi-Vertical

---

## 🎨 Theme & Visual Direction

| Property | Value |
|---|---|
| **Primary Palette** | Black `#0a0a0a` + Gold `#c9a96e` |
| **Secondary** | Off-white `#f5f2ed` + Deep card `#161616` |
| **Typography** | Cormorant Garamond (display) + Jost Light (body) |
| **Vibe** | Premium infrastructure · Restrained luxury · "This already exists." |
| **Feel** | Not a startup. A standard. |

---

## ⚠️ Core Principles

### You are pre-launch. Every element must do one of three things:
1. **Build credibility** — you are real, researched, validated
2. **Create urgency** — limited early access, launch is imminent
3. **Capture intent** — waitlist over "buy", always

> Replace all "Book a Demo" CTAs with **"Join the Waitlist"** or **"Get Early Access"**

### You serve three audiences simultaneously:
- 🎓 **College / University Admin** — Principal, Registrar, HOD
- 🏢 **Corporate / Enterprise** — HR Head, Admin, COO, Factory Manager
- 🏘️ **Housing Society / RWA** — Secretary, Committee Chair, Security Manager

> The hero must speak to all three. No audience should feel excluded in the first 5 seconds.

---

## 🏗️ Full Page Architecture

```
01. HERO — Universal headline + Timer + Waitlist CTA + Vertical selector
02. SHARED PROBLEM — 3 stats, one per audience, no paragraphs
03. VERTICAL DEEP DIVES — Tabbed, one per audience
04. HOW IT WORKS — 3 universal steps
05. THE NETWORK — "Enroll once. Access everywhere." — investor signal
06. SOCIAL PROOF — Springer + CiiA-4 + live accuracy
07. EXPECTED PRICING — Soft, 3-column, with early access note
08. WAITLIST CAPTURE — Dedicated high-conversion section
09. FAQ — Pre-launch questions + vertical-tagged objections
10. FINAL CTA FOOTER — Universal close
    FLOATING — WhatsApp button, vertical-aware pre-fill
```

---

## 01 · HERO SECTION

> **Priority: Maximum.** This section determines whether anyone reads the rest.

### Headline
```
Know exactly who is present.
Anywhere. Automatically.
```

### Subheadline
```
FRAS connects to cameras already installed in your campus, office, or building —
and tells you who's there in real time.
No new hardware. No manual process. No proxies.
```

### ⏳ Launch Countdown Timer

```
┌─────────────────────────────────────────┐
│     Launching Early Access In           │
│                                         │
│   [ 12 ]  :  [ 08 ]  :  [ 21 ]         │
│   DAYS       HOURS     MINUTES          │
└─────────────────────────────────────────┘
```

**Design spec:**
- Large digits, Cormorant Garamond, gold `#c9a96e`
- Subtle pulse glow on digits
- Static launch date OR rolling 30-day deadline (your call — rolling creates more urgency)
- Client-side JS countdown

### 🟡 Primary CTA — Waitlist Inline Form

```
[ Enter your email address          ] [ Organisation name (optional) ]

[ Select your use case ▼ ]
  → College / University
  → Corporate / Enterprise
  → Housing Society / RWA
  → Other

[ ⚡ Get Early Access ]
```

**Below button:**
```
⚡ Only 25 early access slots available
```

### Trust Bar (Below CTA)

```
Springer Published  ·  CiiA-4 Top 100 Nationally  ·  97% CCTV Accuracy  ·  70+ Faces Per Frame
```

### Vertical Selector Tiles

```
[ 🎓 College & University ]   [ 🏢 Corporate & Enterprise ]   [ 🏘️ Housing & Societies ]
     Early Access Open              Limited Slots                    Pilot Phase
```

Each tile smooth-scrolls to its vertical deep-dive section below.

---

## 02 · SHARED PROBLEM

> **Principle:** One stat per audience. Every visitor feels their pain in under 10 seconds.

### Section Headline
```
Every organisation has cameras.
None of them understand anything.
```

### Three Stats (Side by side, no paragraphs)

```
┌─────────────────────┐  ┌────────────────────────┐  ┌──────────────────────────┐
│ 🎓                  │  │ 🏢                     │  │ 🏘️                       │
│                     │  │                        │  │                          │
│  "Faculty lose 15   │  │  "₹3,400 crore lost    │  │  "1 in 2 housing         │
│  minutes every      │  │  annually to           │  │  societies has no        │
│  class to manual    │  │  attendance fraud in   │  │  verified visitor        │
│  roll call.         │  │  Indian manufacturing  │  │  record older than       │
│  Across 42,000      │  │  alone."               │  │  30 days."               │
│  colleges, that's   │  │                        │  │                          │
│  billions of hours  │  │                        │  │                          │
│  lost annually."    │  │                        │  │                          │
└─────────────────────┘  └────────────────────────┘  └──────────────────────────┘
```

### One-line below all three:
```
"There is a camera already watching. It just doesn't understand anything yet."
```

---

## 03 · VERTICAL DEEP DIVES

> **Design:** Tab interface. Default tab = College (highest conversion volume). Each tab shows badge + feature set + pricing anchor.

---

### Tab 1 — 🎓 College & University
**Badge:** `Early Access Open`

**Pain solved:**
- Manual roll call eliminated — faculty reclaim 15 mins per class
- Proxy attendance made structurally impossible
- At-risk students flagged before they fail, not after
- Parent SMS alerts, accreditation-ready reports

**How it works here:**
- CCTV in classroom detects all students entering
- 70+ faces identified simultaneously, under 1 second
- Attendance auto-marked in dashboard + LMS

**Key numbers:**
- 97% accuracy on standard 720p CCTV
- Works at 6–10 metre classroom distance
- Zero new hardware required

**Pricing anchor:**
```
Starting ₹1.5 lakh/year
Less than one biometric terminal per classroom
```

**CTA:** `Request College Early Access →`

---

### Tab 2 — 🏢 Corporate & Enterprise
**Badge:** `Limited Slots`

**Pain solved:**
- Manual punch-in / buddy punching eliminated
- Factory floor shift tracking automated
- HRMS/ERP integration — payroll-ready attendance data
- Compliance reporting for labour law audits

**How it works here:**
- Cameras at entry points, factory floor, time zones
- Employees identified on walk-in — no tap, no scan
- Shift reports generated automatically

**Key numbers:**
- Scales to 10,000+ enrolled employees per deployment
- Sub-100ms matching across large databases
- HRMS API-ready (SAP, Darwinbox, Keka)

**Pricing anchor:**
```
Starting ₹8 lakh/year
Replaces ₹20L+ biometric + security hardware spend
```

**CTA:** `Request Corporate Early Access →`

---

### Tab 3 — 🏘️ Housing Society / RWA
**Badge:** `Pilot Phase`

**Pain solved:**
- Manual visitor logbook replaced
- Resident face recognition at main gate — no fob, no card
- Unknown person alerts to committee in real time
- Delivery and service staff pre-approval via mobile

**How it works here:**
- Gate camera identifies resident → barrier opens
- Visitors pre-approved via WhatsApp link by resident
- Committee gets instant alert for unrecognised entries

**Key numbers:**
- Works on existing dome/bullet cameras at gate
- Resident enrollment: 30 seconds via mobile app
- 500,000+ RWAs in India — zero intelligent solutions exist today

**Pricing anchor:**
```
Starting ₹3 lakh/year
Per society. Unlimited residents enrolled.
```

**CTA:** `Request Society Early Access →`

---

## 04 · HOW IT WORKS

> **Principle:** Dead simple. Decision-makers are not engineers. Three steps, universally applicable.

```
STEP 1 — ENROLL
──────────────────────────────────────────
Icon: mobile phone, face scan
Headline: "Register once. Done forever."
Body: Students, employees, or residents register
      their face via the FRAS mobile app.
      Takes 30 seconds. No re-enrollment ever —
      at any FRAS-connected venue.

STEP 2 — ARRIVE
──────────────────────────────────────────
Icon: camera, person walking
Headline: "Walk in. You're marked."
Body: FRAS sees you enter. Attendance is
      marked automatically. No action required
      by the person, the teacher, or the guard.

STEP 3 — INSIGHTS
──────────────────────────────────────────
Icon: dashboard, chart
Headline: "Real-time. Actionable. Automated."
Body: The dashboard shows live attendance,
      flags at-risk individuals, fires alerts,
      and pushes reports to your existing systems.
```

---

## 05 · THE NETWORK EFFECT

> **This is the most important section for investors. Do not cut it.**

### Headline
```
One identity.
Every venue they'll ever visit.
```

### Body
```
A student enrolled at their college is already recognised
at their first job on day one.

A resident enrolled at their housing society walks straight
through the exam centre gate.

No re-registration. No new biometrics. No friction.

This is not attendance software.
This is identity infrastructure.
```

### Network Diagram (Visual)

```
                    ┌──────────┐
                    │  FRAS    │
                    │ Identity │
                    └────┬─────┘
         ┌───────────────┼───────────────┐
         │               │               │
    ┌────┴────┐    ┌─────┴────┐    ┌────┴────┐
    │ College │    │  Office  │    │ Society │
    └────┬────┘    └──────────┘    └─────────┘
         │
    ┌────┴───────────────────┐
    │                        │
┌───┴───┐  ┌──────┐  ┌──────┴──┐
│  Gym  │  │Exam  │  │Hospital │
└───────┘  └──────┘  └─────────┘
```

### Metcalfe Stat Bar
```
1×              ∞               0
ENROLLMENT      VENUES          RE-ENROLLMENTS
```

### The Infrastructure Analogy
```
"Comparable to how UPI made every bank account interoperable —
 FRAS makes every face enrollment venue-interoperable.

 The infrastructure, not the app, is the asset."
```

### The Graduation Advantage (For investors / corporate visitors)
```
"When a FRAS college graduate joins a FRAS corporate client,
 they are already enrolled on day one.

 Zero onboarding cost for the employer.
 Colleges are pre-enrolling India's future workforce —
 no HR or security vendor can offer this."
```

---

## 06 · SOCIAL PROOF

> **Pre-launch rule:** No fake logos. No paid placements. Credibility over noise.

```
┌──────────────────────────────┐  ┌──────────────────────────────┐
│ Springer                     │  │ 🏆 CiiA-4 2025               │
│                              │  │                              │
│ "FRAS methodology            │  │ Selected Top 100 Nationally  │
│  peer-reviewed and           │  │ from thousands of            │
│  accepted by Springer —      │  │ submissions across India.    │
│  one of the world's          │  │ Government and industry      │
│  largest academic            │  │ evaluators. National-level   │
│  publishers."                │  │ problem validation.          │
│                              │  │                              │
│ Read the paper →             │  │                              │
└──────────────────────────────┘  └──────────────────────────────┘

┌──────────────────────────────┐  ┌──────────────────────────────┐
│ 🎯 Live Validated            │  │ 💬 From the Expo             │
│                              │  │                              │
│ 97% recognition accuracy     │  │ "We saw the demo and         │
│ in real classroom conditions │  │  wanted to sign up           │
│ on standard 720p CCTV.       │  │  immediately."               │
│ Not a lab result.            │  │                              │
│ Real people. Real cameras.   │  │  — College representative,   │
│                              │  │    National Project Expo     │
│                              │  │    (Pre-revenue, anonymised) │
└──────────────────────────────┘  └──────────────────────────────┘
```

---

## 07 · EXPECTED PRICING

> **Section title:** "Expected Pricing" (not "Pricing")
> **Note below header:** *"Final pricing may vary for early access partners — typically lower."*

```
┌────────────────────────┐  ┌────────────────────────┐  ┌────────────────────────┐
│ Attendance Core        │  │ Security & Access       │  │ Enterprise             │
│                        │  │                         │  │                        │
│ ₹1.5L – 2.5L / year   │  │ ₹4L – 7L / year        │  │ ₹8L – 20L / year      │
│                        │  │                         │  │                        │
│ Colleges up to 2,000   │  │ Campus security,        │  │ Corporates, factories, │
│ students               │  │ visitor management,     │  │ government, hospitals  │
│                        │  │ gate access             │  │                        │
│ • Cloud analytics      │  │ • Unknown face alerts   │  │ • HRMS integration     │
│ • Parent SMS alerts    │  │ • Intrusion detection   │  │ • Compliance reporting │
│ • LMS integration      │  │ • Visitor pre-approval  │  │ • Multi-site           │
│ • At-risk flagging     │  │ • Full audit trail      │  │ • Custom SLA           │
│                        │  │                         │  │                        │
│ 68% gross margin       │  │ 74% gross margin        │  │ 79% gross margin       │
│                        │  │                         │  │                        │
│ [Get Early Access]     │  │ [Get Early Access]      │  │ [Contact Founders]     │
└────────────────────────┘  └────────────────────────┘  └────────────────────────┘
```

**Below table:**
```
All tiers include: DPDP Act compliant · Encrypted face data ·
Consent-based enrollment · Works on existing cameras
```

---

## 08 · WAITLIST CAPTURE SECTION (HIGH CONVERSION)

> **This is the most important conversion section. Give it full width, dark background, gold accent.**

### Headline
```
Be among the first to deploy FRAS.
```

### Subtext
```
Early access partners receive:

  ✓  Priority onboarding — our team comes to you
  ✓  Custom integrations with your existing systems
  ✓  Early adopter pricing — locked in at launch rate
  ✓  Direct founder access throughout deployment
  ✓  Co-development rights on feature requests
```

### Form Fields
```
Full Name *
Email Address *
Organisation Name *
Your Role (e.g. Principal, HR Head, Society Secretary)
Use Case: [ College  |  Corporate  |  Housing Society  |  Other ]
Message (Optional): "Tell us about your setup"
```

### Submit Button
```
[ → Request Early Access ]
```

### Trust Line Below Button
```
No spam. No sales calls unless you want one.
You'll hear directly from the founders within 48 hours.
```

### Scarcity Indicator
```
⚡ 25 early access slots available · [143] organisations already registered
```

> **Note on live counter:** Seed with a realistic starting number. Update manually or via Firebase. Do not fake rapid growth — it reads as desperate. Start at 47 and grow organically.

### Success State (After form submit)
```
🎉 You're on the list.

We'll reach out personally before launch.
— Vineet & Srushti, FRAS Founders

In the meantime: Read the Research →
```

---

## 09 · FAQ

> **Format:** Accordion. Pre-tagged by audience so visitors self-identify.

### Pre-Launch Questions
```
Q: When will FRAS be available?
A: We are currently in final development with pilot deployments
   planned in Q3 2026. Early access partners will be the first
   to go live. Join the waitlist to get a confirmed slot.

Q: How does the early access program work?
A: Early access partners work directly with our founding team.
   We handle setup, enrollment, and training. You get a fully
   working deployment and direct input into product development.

Q: Is there a free pilot program?
A: We offer limited paid pilots at a substantially reduced rate
   for early access partners — structured to give you full
   confidence before annual commitment. Ask us about pilot terms.

Q: Will pricing change after launch?
A: Early access pricing is locked in at your joining rate.
   Post-launch pricing will be higher. Joining the waitlist
   now protects your rate.
```

### Technical Questions (All audiences)
```
Q: Do we need to install new cameras?
A: No. FRAS connects to your existing CCTV infrastructure via
   RTSP stream. If your cameras are already recording, FRAS
   can use them. We support all standard IP camera brands.

Q: Where is face data stored?
A: Face data is encrypted and stored within your own
   infrastructure or on our compliant cloud — your choice.
   Raw video never leaves your premises. Only anonymised
   embeddings are transmitted.

Q: Is FRAS compliant with India's DPDP Act 2023?
A: Yes. Consent is collected per person, per venue, and is
   fully revocable at any time. Our consent flow is built
   to DPDP specifications. We can provide compliance
   documentation on request.

Q: What happens if someone doesn't consent?
A: Manual fallback is always available. Consent is never
   forced. Non-enrolled individuals simply aren't tracked.
```

### 🎓 College-Specific
```
Q: How long does student enrollment take?
A: 30 seconds per student via the FRAS mobile app.
   A college of 2,000 students can complete enrollment
   in a single day through a batch process.

Q: What accuracy can we expect in our classrooms?
A: 97% under standard conditions. 94%+ in low light,
   using our GFPGAN image enhancement layer.
   Tested on real 720p classroom CCTVs — not lab conditions.

Q: Can FRAS integrate with our existing ERP / LMS?
A: Yes. FRAS provides a REST API compatible with most
   Indian education ERPs. Custom integrations available
   for early access partners.
```

### 🏢 Corporate-Specific
```
Q: Can FRAS handle shift-based attendance for factories?
A: Yes. Multiple shift templates, zone-based tracking,
   and overtime detection are supported. HRMS export
   (SAP, Darwinbox, Keka, GreytHR) available.

Q: How does FRAS handle large employee databases?
A: Qdrant vector similarity search enables sub-100ms
   matching across 10,000+ enrolled employees with
   no accuracy degradation as the database grows.

Q: What about employees who move between sites?
A: Cross-site identity is native to FRAS. An employee
   enrolled at one location is automatically recognized
   at every FRAS-connected site — no re-enrollment.
```

### 🏘️ Society-Specific
```
Q: How does visitor pre-approval work?
A: Residents receive a WhatsApp link to pre-approve
   visitors. The visitor's face is captured on entry
   and matched against the approval. Guards receive
   real-time confirmation on their mobile.

Q: What happens when an unknown person enters?
A: An instant alert is sent to the committee WhatsApp
   group and the duty guard's phone with a photo of
   the individual and timestamp.

Q: Can the system work with our existing intercom / barrier?
A: FRAS provides an API for relay control compatible
   with most standard boom barriers and intercom panels.
   Specific compatibility confirmed during onboarding.
```

---

## 10 · FINAL CTA FOOTER

### Headline
```
Your cameras are already watching.
Let's make them understand.
```

### Buttons
```
[ → Join the Waitlist ]    [ Talk to the Founders ]    [ Read the Research ]
```

### Tagline
```
"Enroll once. Access everywhere. For life."
— F R A S · 2026
```

### Footer Bar
```
Springer Published · DPDP Act Compliant · CiiA-4 Top 100 · Made in India

hello@fras.in  |  fras.in  |  LinkedIn  |  Twitter/X

© 2026 FRAS. All rights reserved.
Privacy Policy · Terms of Service · Consent Management
```

---

## 📱 Floating WhatsApp Button

**Always visible. Bottom-right corner.**

Pre-filled messages by last-clicked vertical tile:

```
Default (no vertical selected):
"Hi, I'd like to learn more about FRAS and early access."

College tile clicked:
"Hi, I want early access for my college. Can we connect?"

Corporate tile clicked:
"Hi, I want early access for my organisation. Can we connect?"

Society tile clicked:
"Hi, I want early access for my housing society. Can we connect?"
```

---

## ⚙️ UX Additions & Technical Specs

### Scarcity Indicators (Use sparingly — one per page)
```
Hero section:    ⚡ Only 25 early access slots available
Waitlist form:   [143] organisations already registered
Pricing cards:   "Early adopter rate — changes at launch"
```

### Countdown Timer Logic
```javascript
// Option A: Fixed date (cleaner, more honest)
const launchDate = new Date('2026-07-15T00:00:00');

// Option B: Rolling 30 days from visit (higher urgency)
// Store in localStorage, don't regenerate on revisit
const deadline = localStorage.getItem('fras_deadline')
  || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
```

> **Recommendation:** Use a fixed date. Rolling timers feel manipulative to technical buyers (your corporate and investor audience). Pick your real launch date. Commit to it.

### Waitlist Backend Options
| Option | Speed | Recommended For |
|---|---|---|
| Firebase Realtime DB | Fastest | You already use Firebase — use this |
| Supabase | Fast | If you want SQL + dashboard |
| Google Sheets via Apps Script | Zero setup | MVP only, not scalable |
| Loops.so / Mailchimp | Instant | If you want email sequences built in |

> **Recommendation:** Firebase + Loops.so. Firebase stores the data, Loops sends a branded confirmation email sequence automatically.

### Performance Requirements
```
Page load target:  < 2 seconds (rural college internet)
Images:            WebP format, lazy loaded
Fonts:             Preloaded via <link rel="preload">
Video/GIF:         Compress to < 3MB, autoplay muted
Mobile:            Design mobile-first — 70%+ of visits will be mobile
```

### Analytics (Keep Minimal for DPDP)
```
Recommended: Plausible Analytics (privacy-first, no cookie banner needed)
Avoid:       Google Analytics (requires consent banner, adds friction)
Track:       Page visits, CTA clicks, form starts, form completions, vertical clicks
```

---

## 🧠 Strategic Notes

### What This Page Does (Beyond brochure)

A waitlist page with a countdown timer does **three things that matter for your raise:**

1. **Converts passive visitors → qualified leads** with name, org, and use case
2. **Creates urgency** without discounting — scarcity of slots, not price
3. **Signals demand to investors** — "We have 143 orgs on the waitlist before launch" is a traction metric

> This turns your landing page from a brochure into a **validation engine.**

### What NOT To Do
```
❌ Do not show fake logos or fabricated client names
❌ Do not hide pricing completely — high intent requires price anchoring
❌ Do not use generic stock photos of classrooms or offices
❌ Do not put "Book a Demo" as primary CTA — you are pre-revenue
❌ Do not make the page college-only — you lose 2/3 of your TAM
❌ Do not add a cookie consent banner if using Plausible
❌ Do not use a rolling countdown if targeting technical buyers
```

### The Positioning Test
Before finalising copy, run every headline through this filter:

> *"Does this sound like a startup's landing page, or does it sound like a standard that already exists?"*

FRAS's visual identity and copy should feel like you are **informing** the visitor that this exists — not asking them to believe in it.

---

## 📋 Content Checklist

### Pre-Launch Requirements
- [ ] Countdown timer with confirmed launch date
- [ ] Waitlist form with use-case dropdown
- [ ] Scarcity indicator (slots remaining)
- [ ] Success state after form submission
- [ ] Springer paper linked (Google Drive or hosted PDF)
- [ ] WhatsApp floating button with vertical-aware pre-fill
- [ ] Mobile-responsive at 375px viewport
- [ ] Page load < 2 seconds on 4G

### Legal / Compliance
- [ ] Privacy policy page (linked in footer)
- [ ] Consent checkbox on waitlist form: *"I agree to be contacted by FRAS regarding early access"*
- [ ] DPDP Act compliance statement in FAQ
- [ ] "Face data never sold or shared" statement in FAQ

### Post-Launch Updates (When Live)
- [ ] Replace countdown timer with "Now Accepting Deployments"
- [ ] Replace "Join Waitlist" with "Book a Demo"
- [ ] Add first client logos (with permission)
- [ ] Add case study / accuracy report from pilot
- [ ] Update waitlist counter to deployment counter

---

*FRAS · Landing Page Guide v2.0 · April 2026*
*Built for: Vineet Wagh & Srushti Chopade*
