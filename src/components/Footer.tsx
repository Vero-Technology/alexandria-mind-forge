const Footer = () => {
  return (
    <footer
      className="px-6 py-8 border-t"
      style={{
        background: "hsl(0 0% 2%)",
        borderColor: "hsl(0 0% 12%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs" style={{ color: "hsl(0 0% 40%)" }}>
          &copy; {new Date().getFullYear()} Alexandria Limited. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="/privacy"
            className="text-xs hover:underline transition-colors"
            style={{ color: "hsl(0 0% 50%)" }}
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-xs hover:underline transition-colors"
            style={{ color: "hsl(0 0% 50%)" }}
          >
            Terms &amp; Conditions
          </a>
          <a
            href="/cookies"
            className="text-xs hover:underline transition-colors"
            style={{ color: "hsl(0 0% 50%)" }}
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
