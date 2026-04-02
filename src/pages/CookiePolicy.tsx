import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen" style={{ background: "hsl(0 0% 3%)" }}>
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium mb-8 transition-colors"
          style={{ color: "hsl(0 0% 50%)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(0 0% 80%)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 50%)")}
        >
          &larr; Back to Home
        </a>
        <p className="text-mono text-xs uppercase tracking-[0.2em] mb-4 text-muted-foreground">
          Cookie Policy
        </p>
        <h1 className="text-display text-4xl md:text-6xl tracking-tight mb-3" style={{ color: "hsl(0 0% 92%)" }}>
          Cookie Policy
        </h1>
        <p className="text-sm mb-8" style={{ color: "hsl(0 0% 40%)" }}>
          Effective Date: 2 April 2026 &nbsp;|&nbsp; Last Updated: 2 April 2026
        </p>

        <Section title="1. Introduction">
          <p>
            This Cookie Policy explains how Alexandria (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) uses cookies and similar tracking technologies on the Alexandria B2B Terminal for Pharma Intelligence (&ldquo;Platform&rdquo;). It should be read alongside our <a href="/privacy" className="underline underline-offset-4" style={{ color: "hsl(var(--terminal))" }}>Privacy Policy</a>.
          </p>
          <p className="mt-3">
            We use cookies to keep the Platform secure, maintain your session, and understand how Users interact with the Platform so we can improve it. We do not use advertising cookies, cross-site tracking pixels, or any third-party marketing technologies.
          </p>
        </Section>

        <Section title="2. What Are Cookies?">
          <p>
            Cookies are small text files placed on your device by a website or application. They are widely used to make services work efficiently, provide security features, and supply usage information to site operators. Similar technologies include local storage objects, session tokens, and pixel tags.
          </p>
        </Section>

        <Section title="3. Categories of Cookies We Use">
          <p className="mb-4">We use two categories of cookies on the Platform:</p>

          <SubSection title="3.1 Strictly Necessary Cookies">
            <p className="mb-4">
              These cookies are essential for the Platform to function. They enable core features such as authentication, session management, and security protections. They cannot be disabled without breaking the Platform. No consent is required for strictly necessary cookies under applicable law.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm mb-6 border-collapse min-w-[500px]">
                <thead>
                  <tr style={{ background: "hsl(var(--primary))" }}>
                    <th className="text-left px-4 py-3 font-medium text-white">Cookie Name</th>
                    <th className="text-left px-4 py-3 font-medium text-white">Purpose</th>
                    <th className="text-left px-4 py-3 font-medium text-white">Type</th>
                    <th className="text-left px-4 py-3 font-medium text-white">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <CookieRow name="__session" purpose="Maintains your authenticated session after login. Ensures continuity between page loads and API requests." type="First-party" duration="Session or up to 24 hours" />
                  <CookieRow name="__csrf_token" purpose="Cross-site request forgery protection. Validates that requests originate from the Platform." type="First-party" duration="Session" />
                  <CookieRow name="__auth_token" purpose="Stores the SSO/SAML authentication token for single sign-on integrations." type="First-party" duration="Duration of SSO session (typically 8-12 hours)" />
                  <CookieRow name="cookie_consent" purpose="Records your cookie consent preference so the consent banner is not shown repeatedly." type="First-party" duration="12 months" />
                </tbody>
              </table>
            </div>
          </SubSection>

          <SubSection title="3.2 Analytics Cookies (Opt-In)">
            <p className="mb-4">
              These cookies help us understand how Users interact with the Platform — which features are used most, where Users encounter friction, and how we can improve the experience. Analytics cookies are only set <span className="font-semibold" style={{ color: "hsl(0 0% 75%)" }}>after you accept them</span> via the consent banner. If you decline, no analytics cookies are placed and no analytics data is collected from your session.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm mb-6 border-collapse min-w-[500px]">
                <thead>
                  <tr style={{ background: "hsl(var(--primary))" }}>
                    <th className="text-left px-4 py-3 font-medium text-white">Cookie / Identifier</th>
                    <th className="text-left px-4 py-3 font-medium text-white">Purpose</th>
                    <th className="text-left px-4 py-3 font-medium text-white">Provider</th>
                    <th className="text-left px-4 py-3 font-medium text-white">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <CookieRow name="ph_* cookies and local storage entries" purpose="Product analytics: page views, feature usage, session replays (if enabled), and funnel analysis. PostHog does not sell data or use it for advertising." type="PostHog (EU Cloud — Frankfurt, Germany)" duration="Up to 12 months" />
                  <CookieRow name="ph_phc_*_posthog" purpose="Distinct user identifier for linking anonymous and authenticated events within PostHog." type="PostHog (EU Cloud)" duration="12 months" />
                </tbody>
              </table>
            </div>
            <p>We do <span className="font-semibold" style={{ color: "hsl(0 0% 75%)" }}>not</span> use any advertising, marketing, social media, or third-party behavioural tracking cookies.</p>
          </SubSection>
        </Section>

        <Section title="4. How We Use PostHog">
          <p className="mb-3">PostHog is our sole analytics provider. We use it to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Track aggregate feature usage and navigation patterns to guide product development</li>
            <li>Monitor Platform performance and identify errors or latency issues</li>
            <li>Analyse onboarding and adoption funnels to improve the User experience</li>
            <li>Run A/B tests on interface changes (where applicable)</li>
          </ul>

          <SubSection title="4.1 Data Hosting">
            <p>We use PostHog Cloud hosted in the European Union (Frankfurt, Germany). All analytics data is processed and stored within the EU, subject to EU data protection law.</p>
          </SubSection>

          <SubSection title="4.2 Data Collected by PostHog">
            <p className="mb-3">When analytics cookies are accepted, PostHog may collect:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Page URLs and referrer URLs within the Platform</li>
              <li>Browser type, operating system, screen resolution, and device type</li>
              <li>Click events, scroll depth, and feature interaction events</li>
              <li>Session duration and timestamp data</li>
              <li>A pseudonymous user identifier linked to your Platform account</li>
            </ul>
            <p>PostHog does <span className="font-semibold" style={{ color: "hsl(0 0% 75%)" }}>not</span> collect: passwords, research query content, Client Data, compound structures, or any uploaded documents. We configure PostHog to exclude sensitive fields from session recordings and autocapture.</p>
          </SubSection>

          <SubSection title="4.3 PostHog's Data Practices">
            <p>PostHog acts as a data processor on our behalf. They do not sell, share, or use your data for their own purposes beyond providing the analytics service to us.</p>
          </SubSection>
        </Section>

        <Section title="5. Your Consent and Choices">
          <SubSection title="5.1 Consent Banner">
            <p>When you first visit the Platform, you will see a cookie consent banner with the option to <span className="font-semibold" style={{ color: "hsl(0 0% 75%)" }}>Accept</span> or <span className="font-semibold" style={{ color: "hsl(0 0% 75%)" }}>Reject</span> analytics cookies. Strictly necessary cookies are always active and are not affected by your choice.</p>
          </SubSection>

          <SubSection title="5.2 Changing Your Preference">
            <p className="mb-3">You can change your cookie preference at any time by:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Clicking the &ldquo;Cookie Preferences&rdquo; link in the Platform footer</li>
              <li>Clearing your browser cookies (you will be prompted again on your next visit)</li>
              <li>Contacting us at the address below</li>
            </ul>
            <p>If you withdraw consent for analytics cookies, we will stop collecting analytics data from your sessions going forward. Previously collected data will be retained in accordance with our standard retention period (24 months, then aggregated and de-identified) unless you request deletion.</p>
          </SubSection>

          <SubSection title="5.3 Browser-Level Controls">
            <p>Most browsers allow you to block or delete cookies through their settings. Please note that blocking strictly necessary cookies will prevent the Platform from functioning correctly.</p>
          </SubSection>
        </Section>

        <Section title="6. Do Not Track Signals">
          <p>Some browsers transmit a &ldquo;Do Not Track&rdquo; (DNT) signal. There is currently no industry-standard interpretation of DNT. However, if you decline analytics cookies via our consent banner, no analytics tracking occurs regardless of your DNT setting.</p>
        </Section>

        <Section title="7. Data Retention">
          <div className="overflow-x-auto">
            <table className="w-full text-sm mb-6 border-collapse">
              <thead>
                <tr style={{ background: "hsl(var(--primary))" }}>
                  <th className="text-left px-4 py-3 font-medium text-white">Cookie Category</th>
                  <th className="text-left px-4 py-3 font-medium text-white">Retention</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid hsl(0 0% 15%)" }}>
                  <td className="px-4 py-3" style={{ color: "hsl(0 0% 70%)" }}>Strictly Necessary</td>
                  <td className="px-4 py-3" style={{ color: "hsl(0 0% 55%)" }}>Session-based or up to 24 hours. The consent cookie is retained for 12 months.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid hsl(0 0% 15%)" }}>
                  <td className="px-4 py-3" style={{ color: "hsl(0 0% 70%)" }}>Analytics (PostHog)</td>
                  <td className="px-4 py-3" style={{ color: "hsl(0 0% 55%)" }}>Cookie identifiers persist for up to 12 months. Underlying analytics data is retained for 24 months, then aggregated and de-identified.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="8. Legal Basis (GDPR / UK GDPR)">
          <div className="overflow-x-auto">
            <table className="w-full text-sm mb-6 border-collapse">
              <thead>
                <tr style={{ background: "hsl(var(--primary))" }}>
                  <th className="text-left px-4 py-3 font-medium text-white">Cookie Category</th>
                  <th className="text-left px-4 py-3 font-medium text-white">Legal Basis</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid hsl(0 0% 15%)" }}>
                  <td className="px-4 py-3" style={{ color: "hsl(0 0% 70%)" }}>Strictly Necessary</td>
                  <td className="px-4 py-3" style={{ color: "hsl(0 0% 55%)" }}><span className="font-semibold" style={{ color: "hsl(0 0% 75%)" }}>Legitimate Interest</span> — These cookies are essential for the Platform to operate. No consent is required under Article 5(3) of the ePrivacy Directive or Regulation 6 of the UK PECR.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid hsl(0 0% 15%)" }}>
                  <td className="px-4 py-3" style={{ color: "hsl(0 0% 70%)" }}>Analytics (PostHog)</td>
                  <td className="px-4 py-3" style={{ color: "hsl(0 0% 55%)" }}><span className="font-semibold" style={{ color: "hsl(0 0% 75%)" }}>Consent</span> — Set only after you affirmatively accept analytics cookies via the consent banner, in accordance with Article 5(3) of the ePrivacy Directive and Regulation 6 of the UK PECR.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="9. International Data Transfers">
          <p>All analytics data processed by PostHog remains within the European Union (Frankfurt, Germany). Strictly necessary cookies are processed by our Platform infrastructure. Where any cookie-related data is transferred outside the EEA or UK, we rely on Standard Contractual Clauses and supplementary technical measures as described in our <a href="/privacy" className="underline underline-offset-4" style={{ color: "hsl(var(--terminal))" }}>Privacy Policy</a>.</p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>We may update this Cookie Policy to reflect changes in the cookies we use or for regulatory reasons. Material changes will be communicated via an updated consent banner. The &ldquo;Last Updated&rdquo; date at the top of this page will be revised accordingly.</p>
        </Section>

        <Section title="11. Contact Information">
          <p className="mb-4">For questions about our use of cookies or to exercise your data protection rights:</p>
          <div className="mb-4">
            <p className="font-semibold" style={{ color: "hsl(0 0% 85%)" }}>Data Protection Officer — Alexandria Limited</p>
            <p>Email: <a href="mailto:privacy@alexandrialabs.uk" className="underline underline-offset-4 transition-colors" style={{ color: "hsl(var(--terminal))" }}>privacy@alexandrialabs.uk</a></p>
            <p>Web: <a href="https://alexandrialabs.uk/privacy" className="underline underline-offset-4 transition-colors" style={{ color: "hsl(var(--terminal))" }}>https://alexandrialabs.uk/privacy</a></p>
          </div>
          <p>If you are located in the EEA or UK and believe your rights have not been adequately addressed, you have the right to lodge a complaint with your local supervisory authority (e.g., the ICO in the United Kingdom).</p>
        </Section>

        <div className="text-center pt-8 text-xs italic" style={{ color: "hsl(0 0% 30%)" }}>
          — End of Cookie Policy —
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <div className="h-px mb-10" style={{ background: "hsl(0 0% 15%)" }} />
    <h2 className="text-display text-2xl md:text-3xl tracking-tight mb-5" style={{ color: "hsl(0 0% 88%)" }}>
      {title}
    </h2>
    <div className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 55%)" }}>
      {children}
    </div>
  </div>
);

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-6">
    <h3 className="text-base font-semibold mb-2" style={{ color: "hsl(0 0% 70%)" }}>
      {title}
    </h3>
    {children}
  </div>
);

const CookieRow = ({ name, purpose, type, duration }: { name: string; purpose: string; type: string; duration: string }) => (
  <tr style={{ borderBottom: "1px solid hsl(0 0% 15%)" }}>
    <td className="px-4 py-3 font-mono text-[11px]" style={{ color: "hsl(0 0% 70%)" }}>{name}</td>
    <td className="px-4 py-3" style={{ color: "hsl(0 0% 55%)" }}>{purpose}</td>
    <td className="px-4 py-3" style={{ color: "hsl(0 0% 55%)" }}>{type}</td>
    <td className="px-4 py-3" style={{ color: "hsl(0 0% 55%)" }}>{duration}</td>
  </tr>
);

export default CookiePolicy;
