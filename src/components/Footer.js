export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg py-space-xl flex flex-col md:flex-row items-center justify-between gap-space-md w-full">
        {/* Copyright text & Branding */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <span className="text-code-inline font-code-inline font-semibold text-primary">
            &lt;KO /&gt;
          </span>
          <span className="text-on-surface-variant font-body-sm text-body-sm">
            © {new Date().getFullYear()} Koray Özdemir. Engineered with
            precision. Built with Next.js &amp; Tailwind CSS.
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-space-lg text-label-mono-sm font-label-mono-sm">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-150"
            href="https://github.com/korayozdemirr"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-150"
            href="https://linkedin.com/in/korayozdemir"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-150"
            href="#skills"
          >
            Architecture
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-150"
            href="#about"
          >
            Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
