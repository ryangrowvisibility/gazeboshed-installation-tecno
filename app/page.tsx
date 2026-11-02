import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(647) 613-9522";
const TEL = "tel:+16476139522";
const SMS = "sms:+16476139522";
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Gazebo%2FShed%20installation%20-%20Tecno&query_place_id=ChIJMz8xj3rYjQQREBzbgPm6FcM";

const services = [
  {
    icon: "home",
    title: "Gazebo installation",
    text: "Hardtop, steel and wood-frame gazebos from the big-box stores, including Sojag and similar brands, from 10x10 up to 12x14 and 14x12. Most are standing in two to three hours. Your installer brings his own tools and scaffold and knows these kits well enough to work without the manual.",
    featured: true,
  },
  {
    icon: "box",
    title: "Shed installation",
    text: "Resin and prefab storage sheds assembled square and level on your pad, with doors that close properly. Tell us the brand and size when you text and we will give you a price before we come out.",
  },
  {
    icon: "layers",
    title: "Pergolas & steel gazebos",
    text: "Pergolas, steel-roof gazebos and pool-side shade structures. We anchor to concrete, pavers or a deck where the kit allows it, so the structure stays put through wind and snow.",
  },
  {
    icon: "hammer",
    title: "Handyman & renovation work",
    text: "Painting, flooring, stucco, kitchen cabinet installation and light landscaping. Customers who book us for a gazebo often keep our number for the next job inside the house.",
  },
  {
    icon: "grid",
    title: "TV mounting & furniture assembly",
    text: "Wall-mounted TVs, flat-pack furniture, outdoor furniture sets and other boxed items you would rather not spend a weekend on. Same careful, tidy approach as our gazebo work.",
  },
  {
    icon: "bolt",
    title: "Fast scheduling",
    text: "Send a text with a photo of the box or the product link and get a quick quote back. Next-day installs are common, and customers have booked us on as little as 24 hours notice.",
  },
];

const reviews = [
  { name: "Dane O.", job: "10x12 gazebo", text: "Years ago a company took 8 hours to install a gazebo the same size. This one was done single-handed in just over two hours. Very professional, fast and easy to deal with, and a great price." },
  { name: "Jen L.", job: "Gazebo install", text: "I wondered how one person could move these heavy boxes and set up a gazebo alone, but he did it, and did it perfectly. Very professional and organized. Our gazebo was up in 2 hours." },
  { name: "Billy S.", job: "14x12 steel gazebo", text: "He replied quickly to my text, gave a fast quote and was there the next day with all the tools and a scaffold. Our gazebo was assembled in 2.5 hours. Best pricing in the region." },
  { name: "Jerzy C.", job: "12x14 gazebo", text: "Mike is the real deal. He and his colleague put up a 12x14 gazebo in under 5 hours and were beyond efficient, all arranged on 24 hours notice." },
  { name: "Paige L.", job: "Gazebo install", text: "I bought a gazebo, asked about installation, and he came the following morning, which was great because I wanted it done fast. Friendly and responds quickly to messages." },
  { name: "Paul", job: "10x14 gazebo", text: "Very efficient and professional. He thought my 10x14 gazebo would take 5 hours and had it built in 3. Excellent job." },
  { name: "Matt G.", job: "Gazebo install", text: "Quick to respond to my inquiry and we scheduled fast. Great job, and his price was very reasonable compared to the other quotes I got." },
  { name: "Mike S.", job: "Backyard gazebo, Kitchener", text: "Referred by a friend. He treated the job like it was his own backyard, with care, precision and no corner cutting." },
];

const reasons = [
  { icon: "clock", title: "Done in an afternoon", text: "Most gazebos are built in two to three hours, not a full day." },
  { icon: "calendar", title: "Often the next day", text: "Text today, and there is a good chance your gazebo is up tomorrow." },
  { icon: "tag", title: "Fair, upfront pricing", text: "Reviewers keep saying our quote came in lower than the others they got." },
  { icon: "check", title: "Leaves no mess", text: "Packaging broken down and the site cleaned up before we leave." },
];

const steps = [
  { title: "Text us a photo", text: "Send the brand, size or product link (or a picture of the box) to " + PHONE + "." },
  { title: "Get a quick quote", text: "We reply with a price and the next open time, often the next day." },
  { title: "We build it", text: "Your installer arrives with tools and a scaffold. Most gazebos take 2 to 3 hours." },
  { title: "Walk-through", text: "We check it is square and anchored, clean up, and you enjoy your yard." },
];

const gallery = [
  { src: "/images/p11.jpg", alt: "Wood-tone hardtop gazebo over a deck beside a backyard pool" },
  { src: "/images/p4.jpg", alt: "Black-roof gazebo on a new concrete pad by a wood fence" },
  { src: "/images/p10.jpg", alt: "Hardtop gazebo on a pool deck next to an inground pool" },
  { src: "/images/p3.jpg", alt: "Underside of a gazebo roof with skylight vent over a patio lounge" },
  { src: "/images/p7.jpg", alt: "Resin storage shed assembled in a backyard" },
  { src: "/images/p9.jpg", alt: "Gazebo on a raised deck with installer scaffold, overlooking fields" },
  { src: "/images/p13.jpg", alt: "Cedar-tone gazebo roof with skylight over a pool yard" },
  { src: "/images/p12.jpg", alt: "Large gazebo covering an outdoor kitchen and patio" },
  { src: "/images/p8.jpg", alt: "Wood-grain steel gazebo frame and roof panels" },
  { src: "/images/p14.jpg", alt: "Peaked-roof gazebo on a concrete pad" },
  { src: "/images/p15.jpg", alt: "Hardtop gazebo over a paver patio with planters" },
  { src: "/images/p5.jpg", alt: "Row of black steel gazebos installed beside a parking area" },
  { src: "/images/p2.jpg", alt: "Gazebo post anchored on a concrete footing next to a garden bed" },
  { src: "/images/p1.jpg", alt: "Wood-frame gazebo by a pool with installer scaffold" },
];

const areas = ["Toronto", "Mississauga", "Brampton", "Vaughan", "Markham", "Oakville", "Burlington", "Hamilton", "Oshawa", "Kitchener-Waterloo", "Guelph", "London"];

const faqs = [
  { q: "How long does a gazebo installation take?", a: "Most store-bought gazebos are built in about two to three hours. Larger 12x14 or 14x12 steel models can take a little longer. One customer had a company take 8 hours on the same size gazebo years earlier; ours was up in just over two." },
  { q: "How soon can you come?", a: "Often the next day. Several customers texted in the afternoon and had their gazebo up the following morning, and one booked on 24 hours notice. Text us your address and size and we will tell you the next open time." },
  { q: "Which gazebos and sheds do you install?", a: "Store-bought kits of all common sizes, including Sojag and similar hardtop and steel gazebos, pergolas and prefab storage sheds. If it comes in a box with a manual, we can almost certainly build it." },
  { q: "How much does it cost?", a: "It depends on the model and size. Text us the product link or a photo of the box for a quick quote. Reviewers regularly mention our price was lower than other quotes they received." },
  { q: "Do I need to prepare anything?", a: "Have the boxes on site and a level spot ready: a concrete pad, pavers or a deck. We bring the tools and scaffold. Let us know if you want it anchored into concrete or a deck." },
  { q: "What areas do you serve?", a: "Toronto and the GTA, and much of Southern Ontario from London to Oshawa. Customers in Kitchener-Waterloo have used us too. If you are not sure we come out your way, just ask." },
  { q: "What are your hours?", a: "We answer from 7 a.m. to 9 p.m. every day (9:30 p.m. on Saturdays). Texting is the fastest way to reach us." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Gazebo/Shed installation - Tecno",
  telephone: "+1-647-613-9522",
  image: "/images/p6.jpg",
  areaServed: ["Toronto", "Greater Toronto Area", "Southern Ontario"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "33" },
  openingHours: ["Mo-Fr 07:00-21:00", "Sa 07:00-21:30", "Su 07:00-21:00"],
  hasMap: MAPS,
};

export default function Home() {
  return (
    <>
      <Reveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <div className="hidden bg-brand-dark text-sm text-white/90 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> Toronto, the GTA &amp; Southern Ontario</span>
          <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> Open daily, 7 a.m. to 9 p.m.</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5 font-head text-lg font-extrabold leading-tight text-brand-dark">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white"><Icon name="home" className="h-5 w-5" /></span>
            <span>Tecno<span className="block text-xs font-bold text-muted">Gazebo &amp; Shed Installation</span></span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 font-semibold text-ink lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#work" className="hover:text-brand">Our Work</a>
            <a href="#area" className="hover:text-brand">Service Area</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden font-bold text-brand-dark sm:inline">{PHONE}</a>
            <a href={SMS} className="btn hidden bg-cta text-ink hover:bg-cta-dark md:inline-flex"><Icon name="text" className="h-5 w-5" /> Text for a Quote</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="grid h-11 w-11 place-items-center rounded-lg bg-brand text-white md:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        <section id="top" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:px-6 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:pb-24">
            <div className="reveal">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-sm font-semibold text-brand-dark">
                <Icon name="calendar" className="h-4 w-4" /> Next-day installs are common
              </p>
              <h1 className="font-head text-[clamp(2.25rem,5vw,3.6rem)] font-extrabold text-brand-dark">
                Gazebo &amp; Shed Installation in Toronto, the GTA &amp; Southern Ontario
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted">
                Bought a gazebo and dreading the boxes? We build store-bought gazebos, pergolas and sheds in about two to three hours, usually the day after you text. One careful installer, his own tools and scaffold, and a fair price.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className="btn bg-cta text-lg text-ink hover:bg-cta-dark"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
                <a href={SMS} className="btn border-2 border-brand text-brand-dark hover:bg-brand-soft"><Icon name="text" className="h-5 w-5" /> Text a photo of your box</a>
              </div>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.95rem] font-semibold text-ink">
                <Stars className="h-5 w-5" />
                <span>4.9 · 33 Google reviews</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Most gazebos in 2 to 3 hours</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Open 7 days</span>
              </p>
            </div>
            <div className="reveal relative">
              <img src="/images/p6.jpg" alt="Black hardtop gazebo installed on a paver patio in a fenced backyard" width={1440} height={1080} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_30px_60px_-30px_oklch(0.29_0.065_158/0.45)]" />
              <div className="absolute -bottom-6 left-4 right-4 rounded-xl border border-line bg-white p-4 shadow-lg sm:left-auto sm:w-80">
                <Stars className="h-4 w-4" />
                <p className="mt-2 text-[0.95rem] leading-snug">&ldquo;A company took 8 hours on the same size gazebo. This one was done in just over two.&rdquo;</p>
                <p className="mt-2 text-sm font-semibold text-muted">Dane O. · 10x12 gazebo</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Why customers trust us" className="bg-brand text-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              ["star", "4.9 on Google", "33 reviews"],
              ["clock", "2 to 3 hours", "for most gazebos"],
              ["calendar", "Next-day installs", "on short notice"],
              ["truck", "Tools & scaffold", "we bring everything"],
            ].map(([icon, a, b]) => (
              <div key={a} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/10 text-cta">
                  {icon === "star" ? <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" /></svg> : <Icon name={icon} />}
                </span>
                <div><p className="font-head font-bold leading-tight">{a}</p><p className="text-sm text-white/75">{b}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <h2 className="font-head text-3xl font-extrabold text-brand-dark md:text-4xl">What we install</h2>
              <p className="mt-4 text-lg text-muted">Gazebos are our specialty, but the same hands do sheds, pergolas and plenty of jobs around the house.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.title} className={`reveal lift relative flex flex-col rounded-2xl border bg-white p-6 ${s.featured ? "border-brand ring-1 ring-brand" : "border-line"}`}>
                  {s.featured && <span className="absolute right-5 top-5 rounded-full bg-cta px-2.5 py-0.5 text-xs font-bold text-ink">Our specialty</span>}
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                  <h3 className="mt-4 font-head text-xl font-bold text-brand-dark">{s.title}</h3>
                  <p className="mt-2 flex-1 text-muted">{s.text}</p>
                  <a href={SMS} className="mt-4 inline-flex items-center gap-1.5 font-semibold text-brand hover:text-brand-dark">Text about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="font-head text-3xl font-extrabold text-brand-dark md:text-4xl">Rated 4.9 from 33 Google reviews</h2>
                <p className="mt-3 text-lg text-muted">The word that keeps coming up is &ldquo;fast&rdquo;, followed closely by &ldquo;great price&rdquo;.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-brand hover:text-brand-dark">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {reviews.map((r) => (
                <figure key={r.name} className="reveal flex flex-col rounded-2xl border border-line bg-white p-5">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-3 flex-1 text-[0.98rem] leading-relaxed">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-4 flex items-center gap-3 border-t border-line pt-4">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-soft font-head text-sm font-bold text-brand-dark" aria-hidden="true">{r.name.charAt(0)}</span>
                    <span className="text-sm leading-tight"><span className="block font-semibold">{r.name}</span><span className="text-muted">{r.job}</span></span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-6 lg:grid-cols-2 lg:items-center">
            <div className="reveal">
              <h2 className="font-head text-3xl font-extrabold text-brand-dark md:text-4xl">The gazebo installer your neighbours recommend</h2>
              <div className="mt-5 space-y-4 text-lg text-muted">
                <p>Tecno is a small, specialist installation service. Customers describe their installer as an engineer by training with years of handyman experience, and it shows: he knows these kits so well he rarely opens the manual, and a gazebo that takes other crews a full day is usually done before lunch.</p>
                <p>Most jobs start the same way. Someone buys a gazebo, looks at the boxes, and sends us a text. We reply quickly, give a price, and are often there the next morning with the tools and a scaffold. Bigger jobs get a second set of hands.</p>
                <p>We treat every yard like it is our own: careful with your patio and plants, square and anchored where the kit allows, and cleaned up before we leave.</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title} className="reveal rounded-2xl border border-line bg-white p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand text-white"><Icon name={r.icon} className="h-5 w-5" /></span>
                  <h3 className="mt-3 font-head text-lg font-bold text-brand-dark">{r.title}</h3>
                  <p className="mt-1 text-muted">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <h2 className="reveal font-head text-3xl font-extrabold text-brand-dark md:text-4xl">How it works</h2>
            <ol className="mt-10 grid gap-5 md:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal overflow-hidden rounded-2xl border border-line bg-white">
                  <div className="bg-cta px-5 py-4 font-head text-4xl font-extrabold text-ink">{i + 1}</div>
                  <div className="p-5">
                    <h3 className="font-head text-lg font-bold text-brand-dark">{s.title}</h3>
                    <p className="mt-1 text-muted">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="work" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <h2 className="font-head text-3xl font-extrabold text-brand-dark md:text-4xl">Recent gazebos and sheds</h2>
              <p className="mt-3 text-lg text-muted">Real installs from our Google listing: pool decks, paver patios, raised decks and concrete pads.</p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {gallery.map((g, i) => (
                <img key={g.src} src={g.src} alt={g.alt} loading="lazy" width={1440} height={1080} className={`reveal h-full w-full rounded-xl object-cover ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-[4/3]"}`} />
              ))}
            </div>
          </div>
        </section>

        <section id="area" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal">
              <h2 className="font-head text-3xl font-extrabold text-brand-dark md:text-4xl">Serving Toronto, the GTA and Southern Ontario</h2>
              <p className="mt-4 text-lg text-muted">We install from London to Oshawa. These are some of the places we cover; if your town is not listed, text us and ask.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {areas.map((a) => (
                  <li key={a} className="flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-[0.95rem] font-medium"><Icon name="pin" className="h-4 w-4 text-brand" />{a}</li>
                ))}
              </ul>
            </div>
            <iframe title="Map of the Greater Toronto Area" src="https://maps.google.com/maps?q=Greater%20Toronto%20Area%2C%20Ontario&z=8&output=embed" loading="lazy" className="reveal h-80 w-full rounded-2xl border border-line lg:h-full" />
          </div>
        </section>

        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <h2 className="reveal text-center font-head text-3xl font-extrabold text-brand-dark md:text-4xl">Questions before you book</h2>
            <div className="mt-10 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="reveal group py-5">
                  <summary className="flex items-center justify-between gap-4 font-head text-lg font-bold text-brand-dark">
                    {f.q}
                    <span className="faq-toggle grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-white"><Icon name="plus" className="h-4 w-4" /></span>
                  </summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 md:px-6 md:pb-24">
          <div className="reveal mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl bg-brand-dark px-6 py-10 text-white md:flex-row md:items-center md:px-12 md:py-14">
            <div>
              <h2 className="font-head text-3xl font-extrabold md:text-4xl">Gazebo still in the box?</h2>
              <p className="mt-3 max-w-xl text-lg text-white/80">Text a photo or call {PHONE}. We answer 7 a.m. to 9 p.m., seven days a week.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={TEL} className="btn bg-cta text-lg text-ink hover:bg-cta-dark"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
              <a href={SMS} className="btn border-2 border-white/60 hover:bg-white/10"><Icon name="text" className="h-5 w-5" /> Text Us</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-tint pb-24 md:pb-0">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
          <div>
            <p className="font-head text-xl font-extrabold text-brand-dark">Tecno Gazebo &amp; Shed Installation</p>
            <p className="mt-1 text-sm text-muted">Listed on Google as &ldquo;Gazebo/Shed installation - Tecno&rdquo;</p>
            <p className="mt-4"><a href={TEL} className="font-bold text-brand-dark">{PHONE}</a></p>
            <p className="mt-1 text-muted">Toronto, the GTA &amp; Southern Ontario</p>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 font-semibold text-brand">Find us on Google Maps <Icon name="arrow" className="h-4 w-4" /></a>
          </div>
          <div>
            <p className="font-head font-bold text-brand-dark">Services</p>
            <ul className="mt-3 space-y-1.5 text-muted">
              <li>Gazebo installation</li><li>Shed installation</li><li>Pergolas &amp; steel gazebos</li><li>Painting, flooring &amp; cabinets</li><li>TV mounting &amp; assembly</li>
            </ul>
          </div>
          <div>
            <p className="font-head font-bold text-brand-dark">Hours</p>
            <ul className="mt-3 space-y-1.5 text-muted">
              <li>Monday to Friday: 7 a.m. to 9 p.m.</li><li>Saturday: 7 a.m. to 9:30 p.m.</li><li>Sunday: 7 a.m. to 9 p.m.</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-line py-5 text-center text-sm text-muted">© {new Date().getFullYear()} Tecno Gazebo &amp; Shed Installation</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden">
        <a href={TEL} className="btn bg-cta text-ink"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={SMS} className="btn bg-brand text-white"><Icon name="text" className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
