import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
    // PostHog is already loaded — opt in
    if ((window as any).posthog) {
      (window as any).posthog.opt_in_capturing();
    }
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
    // Opt out of PostHog tracking
    if ((window as any).posthog) {
      (window as any).posthog.opt_out_capturing();
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6">
      <div
        className="max-w-lg mx-auto rounded-lg px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 shadow-lg"
        style={{
          background: "hsl(0 0% 8%)",
          border: "1px solid hsl(0 0% 18%)",
        }}
      >
        <p
          className="text-xs leading-relaxed flex-1"
          style={{ color: "hsl(0 0% 65%)", fontFamily: "'DM Sans', sans-serif" }}
        >
          We use cookies to understand how you use our site and improve your experience.{" "}
          <a
            href="/privacy"
            className="underline underline-offset-2"
            style={{ color: "hsl(0 0% 80%)" }}
          >
            Privacy Policy
          </a>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-3 py-1.5 text-xs rounded transition-colors"
            style={{
              color: "hsl(0 0% 60%)",
              border: "1px solid hsl(0 0% 20%)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-3 py-1.5 text-xs rounded transition-colors"
            style={{
              background: "hsl(0 0% 95%)",
              color: "hsl(0 0% 8%)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
