import { useState } from 'react'
import { Button, Card, CardBody, Chip } from '@heroui/react'
import './App.css'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Why solar', href: '#why-solar' },
  { label: 'Our work', href: '#our-work' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  { icon: '☼', title: 'Solar panel installation', description: 'A tailored rooftop solar system, designed to make the most of the daylight your home gets.', points: ['Home energy assessment', 'Quality solar panels', 'Clear installation plan'] },
  { icon: '▤', title: 'Battery storage', description: 'Store the energy your panels make and use more of it when the sun goes down.', points: ['Right-sized storage', 'Smart energy controls', 'Backup options'] },
  { icon: '⚒', title: 'Professional installation', description: 'A careful, coordinated installation with your home and your schedule in mind.', points: ['Qualified installers', 'Site and roof checks', 'Tidy handover'] },
  { icon: '✓', title: 'Ongoing support', description: 'We’ll help you understand your system and know where to turn if you need a hand.', points: ['System walkthrough', 'Monitoring guidance', 'Friendly support'] },
]

const highlights = [
  { icon: '↗', title: 'Energy savings', text: 'Generate more of the electricity you use at home.' },
  { icon: '✳', title: 'A lighter footprint', text: 'Choose a cleaner source of energy for everyday life.' },
  { icon: '⌂', title: 'Designed for your home', text: 'Get a system that suits your roof, routine, and plans.' },
  { icon: '♡', title: 'Here when you need us', text: 'Get clear advice from your first question onwards.' },
]

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Sunward Energy home">
      <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M18.1 2.8 7.4 17.1h7.1l-1.2 12.1 11.3-16.5h-7.2l.7-9.9Z" /></svg></span>
      <span className="brand-type">Sunward<span>Solar &amp; Battery Specialists</span></span>
    </a>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main id="top">
      <header className="site-nav">
        <div className="nav-inner page-shell">
          <Brand />
          <nav className={isMenuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</a>)}
            <Button as="a" href="#contact" className="quote-button gradient-button" radius="sm" onPress={() => setIsMenuOpen(false)}>Get a quote <span aria-hidden="true">↗</span></Button>
          </nav>
          <Button className="menu-toggle" variant="light" radius="sm" aria-expanded={isMenuOpen} aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} onPress={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? 'Close' : 'Menu'}</Button>
        </div>
      </header>

      <section className="hero page-shell">
        <div className="hero-copy">
          <Chip className="hero-chip" size="md" variant="flat"><span aria-hidden="true">ϟ</span> SOLAR &amp; BATTERY INSTALLATION SPECIALISTS</Chip>
          <h1>Power your home<br />with <span className="gradient-text">clean energy.</span></h1>
          <p className="hero-intro">Thoughtful solar panel installation and battery storage, planned around your home. Make more of your own energy with a team beside you at every step.</p>
          <ul className="hero-points">
            <li><span aria-hidden="true">✓</span> A system designed for your home</li>
            <li><span aria-hidden="true">✓</span> Clear advice from qualified installers</li>
            <li><span aria-hidden="true">✓</span> Support from first survey to switch-on</li>
          </ul>
          <div className="hero-actions">
            <Button as="a" href="#contact" className="primary-button gradient-button" size="lg" radius="sm" endContent={<span aria-hidden="true">→</span>}>Get a free quote</Button>
            <Button as="a" href="#how-it-works" className="secondary-button" size="lg" radius="sm" variant="bordered">How it works</Button>
          </div>
        </div>
        <figure className="hero-photo" id="our-work">
          <img src="/solar-installer.jpg" alt="Solar installer working safely on a residential roof" />
          <figcaption><span className="photo-caption-mark">✳</span><span><strong>Made for your home</strong><small>Solar, thoughtfully installed</small></span></figcaption>
        </figure>
      </section>

      <section className="service-ribbon" aria-label="What we do">
        <div className="ribbon-inner page-shell">
          <div><span>01</span><strong>Solar panels</strong></div><i />
          <div><span>02</span><strong>Battery storage</strong></div><i />
          <div><span>03</span><strong>Expert installation</strong></div><i />
          <div><span>04</span><strong>Ongoing support</strong></div>
        </div>
      </section>

      <section className="services-section page-shell" id="services">
        <div className="section-intro">
          <Chip className="section-chip" variant="flat" size="md">Our services</Chip>
          <h2>Complete solar &amp; battery solutions</h2>
          <p>From your first consultation to the final connection, we’ll help you find the right way to power your home.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <Card key={service.title} className="service-card" shadow="sm" radius="lg"><CardBody>
              <span className="service-icon" aria-hidden="true">{service.icon}</span><h3>{service.title}</h3><p>{service.description}</p>
              <ul>{service.points.map((point) => <li key={point}><span aria-hidden="true">•</span>{point}</li>)}</ul>
            </CardBody></Card>
          ))}
        </div>
      </section>

      <section className="why-section" id="why-solar">
        <div className="why-inner page-shell">
          <div className="why-heading"><Chip className="why-chip" variant="flat" size="md">Why choose solar</Chip><h2>A brighter way<br />to power <span className="gradient-text">what’s next.</span></h2><p>Good solar starts with good advice. We make it easier to understand your options and choose a system that fits.</p><Button as="a" href="#contact" className="why-link" variant="light" endContent={<span aria-hidden="true">↗</span>}>Talk with our team</Button></div>
          <div className="highlight-grid">{highlights.map((item) => <article className="highlight" key={item.title}><span className="highlight-icon" aria-hidden="true">{item.icon}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="contact-section page-shell" id="contact">
        <Chip className="section-chip" variant="flat" size="md">Get in touch</Chip><h2>Ready to go solar?</h2><p>Tell us a little about your home. We’ll help you work out the next step.</p>
        <Button as="a" href="mailto:hello@sunward.example?subject=Solar%20quote" className="primary-button gradient-button" size="lg" radius="sm" endContent={<span aria-hidden="true">→</span>}>Start a conversation</Button>
      </section>
      <footer><div className="footer-inner page-shell"><Brand /><span>Good energy starts at home.</span><a href="mailto:hello@sunward.example">hello@sunward.example</a></div></footer>
    </main>
  )
}

export default App
