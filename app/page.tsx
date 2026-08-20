const downloads = [
  {
    label: "Download for macOS",
    href: "https://github.com/Keel-Labs/keel/releases/latest",
  },
  {
    label: "Download for Windows",
    href: "https://github.com/Keel-Labs/keel/releases/latest",
  },
  {
    label: "View and Star on GitHub",
    href: "https://github.com/Keel-Labs/keel",
  },
];

const models = ["Claude", "GPT", "OpenRouter", "Ollama"];

const howItWorks = [
  {
    title: "Markdown workspace",
    body: "A folder on your disk, typically ~/Keel, full of plain markdown. Project notes, daily logs, wiki bases, tasks. Edit it in any editor. Back it up yourself.",
  },
  {
    title: "Keel context engine",
    body: "Indexes your workspace, assembles relevant context for every conversation, and writes captures, decisions, and tasks back as markdown.",
  },
  {
    title: "Your chosen LLM",
    body: "Claude, GPT, OpenRouter, or a local model via Ollama. Swap providers in settings; fall back automatically when one is down.",
  },
];

const principles = [
  {
    title: "Own your context",
    body: "Your notes, captures, projects, and history live in plain markdown in a folder you control.",
  },
  {
    title: "Pick your model",
    body: "Claude today, GPT tomorrow, a local Llama on a flight. The assistant changes; your brain does not.",
  },
  {
    title: "Local-first",
    body: "No telemetry. No account. No server. Your workspace never leaves your machine unless you explicitly ask it to.",
  },
];

const useCases = [
  {
    label: "Daily",
    title: "From morning brief to EOD wrap",
    body: "Generate a morning brief from your workspace, surface open tasks, then write a structured end-of-day summary back into your daily log.",
  },
  {
    label: "Knowledge",
    title: "Per-project knowledge bases",
    body: "Turn any project folder into a queryable wiki. Keel ingests markdown and PDFs, compiles structured context, and keeps it in sync.",
  },
  {
    label: "Meetings",
    title: "Meetings to structured notes",
    body: "Record or import audio. Local Whisper transcribes; Keel writes decisions, action items, and attendees back into the right project.",
  },
];

const features = [
  "Auto-capture",
  "Wiki bases",
  "Dashboard",
  "Tasks and reminders",
  "Meeting transcription",
  "Voice input",
  "Scheduled jobs",
  "Google and X integrations",
];

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="site-section">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a href="https://keel-labs.org/">Keel Labs</a>
        <nav aria-label="Primary">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#download">Download</a>
        </nav>
      </header>

      <section className="hero">
        <p className="release">Now available - v0.5.1</p>
        <img alt="Keel" className="logo" src="/keel-logo.png" />
        <h1>
          Bring your <span>memory</span> home.
        </h1>
        <p className="lede">
          <strong>An AI assistant whose memory belongs to you.</strong>{" "}
          Local-first desktop app for Mac and Windows. Plain markdown on your
          disk. Swap Claude, GPT, OpenRouter, or Ollama anytime - your context
          stays with you.
        </p>
        <div className="actions">
          {downloads.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
        <p className="quiet">Open source (MIT). No telemetry. No account.</p>
        <div className="model-strip" aria-label="Supported model providers">
          {models.map((model) => (
            <span key={model}>{model}</span>
          ))}
        </div>
      </section>

      <Section eyebrow="01 How it works" title="Your context is yours.">
        <div className="cards" id="how">
          {howItWorks.map((item, index) => (
            <article key={item.title}>
              <p className="number">{String(index + 1).padStart(2, "0")}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="02 Principles" title="Three commitments that do not bend.">
        <div className="cards">
          {principles.map((item, index) => (
            <article key={item.title}>
              <p className="number">{String(index + 1).padStart(2, "0")}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="03 Use cases" title="Three things people use Keel for every day.">
        <div className="use-cases">
          {useCases.map((item) => (
            <article key={item.title}>
              <p>{item.label}</p>
              <h3>{item.title}</h3>
              <span>{item.body}</span>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="04 Features" title="Capture, organize, schedule, and act.">
        <ul className="features" id="features">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </Section>

      <section className="download" id="download">
        <div>
          <p className="eyebrow">Get Keel</p>
          <h2>Open source. MIT licensed. Built by one person.</h2>
          <p>
            Universal DMG for Apple Silicon and Intel. NSIS installer for
            Windows x64.
          </p>
        </div>
        <div className="actions">
          {downloads.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <footer>
        <p>Keel - a Keel Labs project by Medha Ghatikesh.</p>
        <nav aria-label="Footer">
          <a href="https://keel-labs.org/">Keel Labs</a>
          <a href="https://github.com/Keel-Labs/keel">GitHub</a>
          <a href="https://keel-labs.org/privacy">Privacy</a>
          <a href="https://github.com/Keel-Labs/keel/blob/main/LICENSE">License</a>
        </nav>
      </footer>
    </main>
  );
}
