
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-violet-500 shadow-[0_10px_30px_rgba(96,165,250,0.45)]">
              <span className="text-sm font-black text-white">C</span>
            </div>
            <div className="text-xl font-bold tracking-tight sm:text-2xl">
              <span className="text-white">Code</span>
              <span className="text-blue-400">Flow</span>
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-slate-300 transition hover:text-white">Features</a>
            <a href="#pricing" className="text-sm text-slate-300 transition hover:text-white">Pricing</a>
            <a href="#testimonials" className="text-sm text-slate-300 transition hover:text-white">Testimonials</a>
          </div>

          <button
            type="button"
            aria-label={mobileMenuIsOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuIsOpen}
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-200 md:hidden"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuIsOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm text-slate-200 sm:px-6">
            <a href="#features" onClick={() => setMobileMenuIsOpen(false)}>Features</a>
            <a href="#pricing" onClick={() => setMobileMenuIsOpen(false)}>Pricing</a>
            <a href="#testimonials" onClick={() => setMobileMenuIsOpen(false)}>Testimonials</a>
          </div>
        </div>
      )}
    </nav>
  );
}

