import { useState } from "react";
import { Button, Card, CardBody, Chip } from "@heroui/react";
import "./App.css";
import { CONTACT_API_URL } from "./constants";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Why renewables", href: "#why-renewables" },
  { label: "Our work", href: "#our-work" },
  { label: "Coverage", href: "#coverage" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: "☼",
    title: "Solar panels",
    description:
      "A rooftop solar system designed around your home, energy use and the daylight your roof receives.",
    points: [
      "Home energy assessment",
      "Quality solar panels",
      "Clear installation plan",
    ],
  },
  {
    icon: "▤",
    title: "Battery storage",
    description:
      "Store renewable electricity for later and make more of the energy your home generates.",
    points: ["Right-sized storage", "Smart energy controls", "Backup options"],
  },
  {
    icon: "♨",
    title: "Heat pumps",
    description:
      "Efficient heating and hot water, with advice on the right heat pump for your home.",
    points: [
      "Home suitability guidance",
      "Heating system options",
      "Expert installation",
    ],
  },
  {
    icon: "⚒",
    title: "Professional installation",
    description:
      "A careful, coordinated installation with your home and your schedule in mind.",
    points: ["Qualified installers", "Site and roof checks", "Tidy handover"],
  },
];

const highlights = [
  {
    icon: "↗",
    title: "Energy savings",
    text: "Use renewable technology to generate and manage more of your home energy.",
  },
  {
    icon: "✳",
    title: "A lighter footprint",
    text: "Choose a cleaner source of energy for everyday life.",
  },
  {
    icon: "⌂",
    title: "Designed for your home",
    text: "Get a system that suits your roof, routine, and plans.",
  },
  {
    icon: "♡",
    title: "Here when you need us",
    text: "Get clear advice from your first question onwards.",
  },
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="MWR Renewables home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32">
          <path d="M18.1 2.8 7.4 17.1h7.1l-1.2 12.1 11.3-16.5h-7.2l.7-9.9Z" />
        </svg>
      </span>
      <span className="brand-type">
        MWR Renewables<span>Energy, Made Simple</span>
      </span>
    </a>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  return (
    <main id="top">
      <header className="site-nav">
        <div className="nav-inner page-shell">
          <Brand />
          <nav
            className={isMenuOpen ? "nav-links open" : "nav-links"}
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              as="a"
              href="#contact"
              className="quote-button gradient-button"
              radius="sm"
              onPress={() => setIsMenuOpen(false)}
            >
              Get a quote <span aria-hidden="true">↗</span>
            </Button>
          </nav>
          <Button
            className="menu-toggle"
            variant="light"
            radius="sm"
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onPress={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </Button>
        </div>
      </header>

      <section className="hero page-shell">
        <div className="hero-copy">
          <h1>
            Power your home
            <br />
            with <span className="gradient-text">clean energy.</span>
          </h1>
          <p className="hero-intro">
            Solar, battery storage and heat pumps, planned around your home. We
            will help you find the right renewable energy solutions and guide
            you through every step.
          </p>
          <ul className="hero-points">
            <li>
              <span aria-hidden="true">✓</span> A system designed for your home
            </li>
            <li>
              <span aria-hidden="true">✓</span> Clear advice from qualified
              installers
            </li>
            <li>
              <span aria-hidden="true">✓</span> Support from first survey to
              switch-on
            </li>
          </ul>
          <div className="hero-actions">
            <Button
              as="a"
              href="#contact"
              className="primary-button gradient-button"
              size="lg"
              radius="sm"
              endContent={<span aria-hidden="true">→</span>}
            >
              Get a free quote
            </Button>
            <Button
              as="a"
              href="#services"
              className="secondary-button"
              size="lg"
              radius="sm"
              variant="bordered"
            >
              Explore services
            </Button>
          </div>
        </div>
        <figure className="hero-photo" id="our-work">
          <img
            src="/solar-installer.jpg"
            alt="Solar installer working safely on a residential roof"
          />
          <figcaption>
            <span className="photo-caption-mark">✳</span>
            <span>
              <strong>Made for your home</strong>
              <small>Renewables, thoughtfully installed</small>
            </span>
          </figcaption>
        </figure>
      </section>

      <section className="service-ribbon" aria-label="What we do">
        <div className="ribbon-inner page-shell">
          <div>
            <span>01</span>
            <strong>Solar panels</strong>
          </div>
          <i />
          <div>
            <span>02</span>
            <strong>Battery storage</strong>
          </div>
          <i />
          <div>
            <span>03</span>
            <strong>Heat pumps</strong>
          </div>
          <i />
          <div>
            <span>04</span>
            <strong>Installation &amp; support</strong>
          </div>
        </div>
      </section>

      <section className="services-section page-shell" id="services">
        <div className="section-intro">
          <Chip className="section-chip" variant="flat" size="md">
            Our services
          </Chip>
          <h2>Renewable energy for your home</h2>
          <p>
            Explore solar panels, battery storage and heat pumps, with a plan
            tailored to your home and how you use energy.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <Card
              key={service.title}
              className="service-card"
              shadow="sm"
              radius="lg"
            >
              <CardBody>
                <div className="service-card-heading">
                  <span className="service-icon" aria-hidden="true">
                    {service.icon}
                  </span>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>
                      <span aria-hidden="true">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section className="why-section" id="why-renewables">
        <div className="why-inner page-shell">
          <div className="why-heading">
            <Chip className="why-chip" variant="flat" size="md">
              Why choose renewables
            </Chip>
            <h2>
              A brighter way
              <br />
              to power <span className="gradient-text">what’s next.</span>
            </h2>
            <p>
              Every home is different. We make it easier to understand your
              renewable energy options and choose what works for you.
            </p>
            <Button
              as="a"
              href="#contact"
              className="why-link"
              variant="light"
              endContent={<span aria-hidden="true">↗</span>}
            >
              Talk with our team
            </Button>
          </div>
          <div className="highlight-grid">
            {highlights.map((item) => (
              <article className="highlight" key={item.title}>
                <span className="highlight-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="coverage-section" id="coverage">
        <div className="coverage-inner page-shell">
          <div className="coverage-copy">
            <Chip className="section-chip" variant="flat" size="md">
              Where we work
            </Chip>
            <h2>Local advice, wherever you call home.</h2>
            <p>
              We work with homeowners across our service area. Share your
              postcode and we’ll confirm whether we can help with your project.
            </p>
          </div>
          <div className="coverage-details">
            <article>
              <span className="coverage-icon" aria-hidden="true">⌖</span>
              <div>
                <h3>Coverage area</h3>
                <p>Ask us to check availability in your area.</p>
              </div>
            </article>
            <article>
              <span className="coverage-icon" aria-hidden="true">◷</span>
              <div>
                <h3>Available hours</h3>
                <p>Contact us to arrange a call at a time that works for you.</p>
              </div>
            </article>
            <a className="coverage-cta" href="#contact">Check your postcode <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
      <section className="contact-section page-shell" id="contact">
        <Chip className="section-chip" variant="flat" size="md">
          Get in touch
        </Chip>
        <h2>Ready to explore renewables?</h2>
        <p>
          Tell us a little about your home and what you’re looking for. We’ll
          help you work out the right next step.
        </p>
        <form
          className="contact-form"
          onSubmit={async (event) => {
            event.preventDefault();
            const form = event.currentTarget;
            setIsSubmitting(true);
            setSubmitStatus("");
            const formData = new FormData(form);
            const endpoint = CONTACT_API_URL;

            if (!endpoint) {
              setSubmitStatus("Contact form is not configured yet. Please try again later.");
              setIsSubmitting(false);
              return;
            }

            try {
              const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Object.fromEntries(formData.entries())),
              });
              if (!response.ok) throw new Error("Request failed");
              form.reset();
              setSubmitStatus("Thanks — your enquiry has been sent. We’ll be in touch soon.");
            } catch {
              setSubmitStatus("Sorry, we couldn’t send your enquiry. Please try again shortly.");
            } finally {
              setIsSubmitting(false);
            }
          }}
        >
          <div className="form-trap" aria-hidden="true">
            <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
          </div>
          <div className="contact-form-fields">
            <label>
              Name
              <input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                required
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              <span>
                Phone <small>(optional)</small>
              </span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Your phone number"
              />
            </label>
            <label>
              I’m interested in
              <select name="interest" defaultValue="Solar panels">
                <option>Solar panels</option>
                <option>Battery storage</option>
                <option>Heat pumps</option>
                <option>Solar and battery</option>
                <option>Solar, battery and heat pump</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="contact-message-field">
              How can we help?
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us a little about your home and what you’re looking for."
                required
              />
            </label>
          </div>
          <Button
            type="submit"
            isDisabled={isSubmitting}
            className="primary-button gradient-button"
            size="lg"
            radius="sm"
            endContent={<span aria-hidden="true">→</span>}
          >
            {isSubmitting ? "Sending…" : "Send enquiry"}
          </Button>
          {submitStatus && <p className="form-status" role="status">{submitStatus}</p>}
        </form>
      </section>
      <footer>
        <div className="footer-inner page-shell">
          <Brand />
          <span>Good energy starts at home.</span>
          <span>© MWR Renewables. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
