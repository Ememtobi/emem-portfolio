import Image from "next/image";

const arrows = ["Achievements", "Approach", "Toolbox", "Experience"];

const approach = [
  [
    "01",
    "Think in risks",
    "Identify what could fail, who it affects, and what matters most.",
  ],
  [
    "02",
    "Follow the journey",
    "Test beyond the happy path. Explore workflows, integrations, edge cases, and unexpected behaviour.",
  ],
  [
    "03",
    "Automate with purpose",
    "Make repeatable checks reliable, expand coverage, and free up time for deeper investigation.",
  ],
  [
    "04",
    "Close the loop",
    "Turn findings into action, communicate risk clearly, and support informed release decisions.",
  ],
] as const;

const skills = [
  [
    "UI and mobile automation",
    ["Playwright", "Cypress", "Appium", "WebdriverIO", "Katalon"],
  ],
  ["API testing", ["Postman", "SoapUI", "Playwright API"]],
  ["Performance", ["JMeter", "K6"]],
  ["Test management", ["JIRA", "TestRail", "QMetry"]],
  ["CI/CD", ["GitLab", "GitHub"]],
] as const;

const experience = [
  {
    open: true,
    when: "Feb 2025 – Present",
    company: "Moniepoint",
    gist: "POS, Card Payments, Transaction Processing",
    bullets: [
      "Validated end-to-end payment processing across card networks, payment gateways, and bank APIs, covering critical transaction workflows.",
      "Automated API, backend, UI, and Android POS regression testing using Playwright, Postman, WebdriverIO, and Appium.",
      "Tested POS application and firmware updates, supporting UAT, pilot releases, and post-deployment validation.",
      "Investigated defects, validated transaction logs, applied AI-assisted testing, and contributed to release decisions through test reporting and risk analysis.",
    ],
  },
  {
    open: false,
    when: "Feb 2023 – Nov 2024",
    company: "Zone Payment Network",
    gist: "ATM Switching, Dispute Processing, Settlement",
    bullets: [
      "Tested an automated bank dispute-processing platform across initiation, investigation, and resolution workflows.",
      "Built and maintained Cypress and API automation suites to strengthen regression coverage.",
      "Designed performance tests to assess system stability, scalability, and behaviour under load.",
    ],
  },
  {
    open: false,
    when: "Aug 2022 – Feb 2023",
    company: "Seamfix",
    gist: "Digital Identity, KYC, Biometrics",
    bullets: [
      "Tested BioSmart biometric SIM registration and KYC enrollment solutions for MTN Nigeria and MTN Group.",
      "Validated facial matching, identity verification, backend deduplication, and API integrations using Postman and SQL.",
      "Automated critical regression scenarios with Cypress to improve repeatability and coverage.",
    ],
  },
  {
    open: false,
    when: "Jun 2020 – Jul 2022",
    company: "Quales Consulting",
    gist: "Web, Mobile and API Testing",
    bullets: [
      "Translated business requirements into test scenarios and comprehensive test cases.",
      "Identified and tracked high-severity defects through resolution, collaborating with developers using JIRA.",
      "Maintained test documentation across releases and introduced Cypress automation to streamline regression testing.",
    ],
  },
] as const;

function Arrow() {
  return (
    <svg
      className="ar"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="nav-in">
          <a className="brand" href="#top">
            Emem Oloruntobi
          </a>
          <nav className="links" aria-label="Sections">
            {arrows.map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`}>
                {label}
              </a>
            ))}
          </nav>
          <a className="pill" href="#contact">
            Contact
          </a>
        </div>
      </header>

      <main id="top">
        <div className="wrap">
          <div className="hero">
            <div className="hero-grid">
              <div>
                <p className="eyebrow">
                  Senior QA Engineer · Quality Engineering · Test Automation
                </p>
                <h1>
                  Building <em className="grad">Confidence</em>{" "}
                  <span className="l2">in Every Release.</span>
                </h1>
                <p className="pitch" style={{ marginTop: 28 }}>
                  I’m a Senior QA Engineer with 6 years of experience ensuring
                  software quality across payment systems, APIs, web and mobile
                  applications. I combine strategic testing, automation, and
                  risk-based thinking to uncover critical defects, strengthen
                  system reliability, and help teams ship with confidence.
                </p>
                <div className="cta-row">
                  <a className="btn primary" href="#contact">
                    Let&apos;s talk
                  </a>
                  <a className="btn" href="#achievements">
                    See my achievements
                  </a>
                </div>
              </div>
              <div className="trio" aria-label="Portrait of Emem Oloruntobi">
                <div className="a a1">
                  <Image
                    src="/images/emem.jpg"
                    alt="Emem Oloruntobi"
                    width={760}
                    height={1066}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="band" aria-hidden="true">
          <div className="track">
            {[
              "Functional Testing",
              "Automation Testing",
              "API Testing",
              "Mobile Testing",
              "Exploratory and Risk-Based Testing",
              "Defect lifecycle management",
              "AI-assisted QA",
              "Functional Testing",
              "Automation Testing",
              "API Testing",
              "Mobile Testing",
              "Exploratory and Risk-Based Testing",
              "Defect lifecycle management",
              "AI-assisted QA",
            ].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>

        <div className="wrap">
          <section id="achievements">
            <div className="sec-head">
              <h2>
                Work that ships products and{" "}
                <em className="grad">protects revenue.</em>
              </h2>
              <p className="lead">
                I take ownership of QA where a missed defect costs real money or
                breaks compliance, and I stay through release validation.
              </p>
            </div>
            <div className="work">
              {[
                [
                  "Moniepoint",
                  "International card payments",
                  "Led QA and release validation for an international card payments product. The goal was reliable transaction processing, accurate payments and stable releases while the product grew and generated revenue.",
                ],
                [
                  "Moniepoint",
                  "Contactless payments and compliance",
                  "Led QA for contactless payment functionality. I validated end-to-end transactions against applicable CBN guidelines, which strengthened regulatory compliance, payment reliability and release readiness.",
                ],
                [
                  "Moniepoint",
                  "Transaction performance and reliability",
                  "Led QA for a multi-level caching solution: Caffeine as L1, Redis as L2, and a database fallback. The work improved transaction processing efficiency, reduced cache-related failures and optimized response times across critical transaction workflows.",
                ],
                [
                  "Zone Payment Network",
                  "Automated banking dispute processing",
                  "Tested an automated dispute processing system for banks. I validated dispute initiation, transaction investigations, resolution workflows and system integrations so that dispute management stayed accurate and reliable.",
                ],
                [
                  "Seamfix",
                  "Biometric identity verification at scale",
                  "Tested BioSmart, the biometric SIM registration and KYC enrollment platform used by MTN Nigeria and MTN Group. I covered facial matching and backend deduplication workflows that support large-scale subscriber registration and identity verification.",
                ],
              ].map(([where, title, copy]) => (
                <article className="item" key={title}>
                  <div>
                    <span className="where">{where}</span>
                    <h3>{title}</h3>
                  </div>
                  <div>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="approach">
            <div className="sec-head">
              <div>
                <p className="eyebrow">My approach to quality</p>
                <h2>
                  Quality isn’t a final check.{" "}
                  <em className="grad">It’s built into every step.</em>
                </h2>
              </div>
              <p className="lead">
                I turn uncertainty into release confidence through thoughtful
                risk assessment, end-to-end testing, purposeful automation, and
                evidence-led decisions.
              </p>
            </div>
            <ol className="steps">
              {approach.map(([number, title, copy]) => (
                <li key={number}>
                  <span className="n">{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="toolbox">
            <div className="sec-head">
              <h2>
                The toolbox <em className="grad">behind the sign-off.</em>
              </h2>
              <p className="lead">
                Manual, API, UI, mobile, integration, regression and performance
                testing, backed by automation teams can maintain.
              </p>
            </div>
            <div className="skills">
              {skills.map(([title, chips]) => (
                <div className="skill" key={title}>
                  <h3>{title}</h3>
                  <div className="chips">
                    {chips.map((chip) => (
                      <span className="chip" key={chip}>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="experience">
            <div className="sec-head">
              <h2>
                Six years, four teams, one habit:{" "}
                <em className="grad">find it early.</em>
              </h2>
              <p className="lead">
                From foundational manual testing to automation, complex
                integrations, and release confidence, I’ve grown across diverse
                products and engineering teams with one focus: catching critical
                issues before they reach users.
              </p>
            </div>
            <div>
              {experience.map((job) => (
                <details className="job" open={job.open} key={job.company}>
                  <summary>
                    <div className="who">
                      <div className="when">{job.when}</div>
                      <div className="co">{job.company}</div>
                    </div>
                    <div className="gist">
                      <span>{job.gist}</span>
                      <i className="tog" aria-hidden="true" />
                    </div>
                  </summary>
                  <div className="job-body">
                    <span className="sp" />
                    <ul>
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section id="education">
            <div className="sec-head">
              <h2>
                Trained to be <em className="grad">thorough.</em>
              </h2>
              <p className="lead">
                A clinical pharmacy background taught me to work where mistakes
                carry consequences. I bring the same discipline to software.
              </p>
            </div>
            <div className="edu">
              <div>
                <div className="deg">Master of Information Technology</div>
                <div className="sch">Miva Open University</div>
                <span className="hon">Currently pursuing</span>
              </div>
              <div>
                <div className="deg">Master of Clinical Pharmacy</div>
                <div className="sch">University of Lagos</div>
                <span className="hon">Distinction</span>
              </div>
              <div>
                <div className="deg">Bachelor of Pharmacy (B.Pharm)</div>
                <div className="sch">University of Uyo</div>
                <span className="hon">
                  Best Graduating Student, Faculty of Pharmacy
                </span>
              </div>
            </div>
            <div className="cert">
              <span>CERTIFIED</span>ISTQB Certified Tester, Foundation Level
              (CTFL)
            </div>
          </section>

          <section className="contact" id="contact">
            <p className="eyebrow">Contact</p>
            <h2>
              Let&apos;s make software more <em>reliable.</em>
            </h2>
            <p className="lead">
              Open to QA roles, contract work, and advisory engagements. Tell me
              about your product and your biggest pre-release challenges.
              Let&apos;s build better products with confidence.
            </p>
            <div className="actions">
              <a className="act" href="mailto:ememoloruntobi@gmail.com">
                <span className="lbl">Email</span>
                <span className="row">
                  <b>Get in Touch</b>
                  <Arrow />
                </span>
              </a>
              <a
                className="act"
                href="https://www.linkedin.com/in/emem-oloruntobi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="lbl">LinkedIn</span>
                <span className="row">
                  <b>Connect on LinkedIn</b>
                  <Arrow />
                </span>
              </a>
              <a
                className="act"
                href="https://github.com/Ememtobi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="lbl">GitHub</span>
                <span className="row">
                  <b>Explore My Projects</b>
                  <Arrow />
                </span>
              </a>
              <a
                className="act"
                href="https://drive.google.com/file/d/150zmT9cqQUKdJD5J8wtJXKVVn7d1FPdD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="lbl">Resume</span>
                <span className="row">
                  <b>Download My Resume</b>
                  <Arrow />
                </span>
              </a>
            </div>
          </section>
          <footer>
            <span>Emem Oloruntobi · Software QA Engineer</span>
            <span>© 2026</span>
          </footer>
        </div>
      </main>
    </>
  );
}
