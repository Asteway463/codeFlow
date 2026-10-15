const footerLinks = ["Privacy Policy", "Terms of Service", "Cookie Settings"];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
        <p>© 2025 CodeFlow. All rights reserved.</p>

        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a key={link} href="#" className="transition hover:text-slate-200">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
