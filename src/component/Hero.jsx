import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { codeExamples } from "../data/CodeExamples";

export default function Hero() {
  const [activeFile, setActiveFile] = useState("App.jsx");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const activeCode = codeExamples[activeFile] || codeExamples["App.jsx"];

  return (
    <section className="relative isolate overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(96, 165, 250, 0.18), transparent 40%)`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1.1fr]">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-sm text-blue-100 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <Sparkles className="h-4 w-4" />
              Introducing CodeFlow AI
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">Code Faster</span>
              <span className="block text-transparent bg-gradient-to-r from-blue-300 via-cyan-200 to-violet-200 bg-clip-text">
                Build Better
              </span>
              <span className="block">With CodeFlow AI</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-300 sm:text-lg">
              Accelerate your development workflow with intelligent code completion,
              automated testing, and smart debugging. Ship production-ready code 10x faster.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(59,130,246,0.45)] transition hover:bg-blue-400"
              >
                Start Coding Free
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/25 hover:bg-white/10"
              >
                <Play className="h-4 w-4" />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-blue-500/25 via-violet-500/20 to-cyan-500/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-[0_32px_80px_rgba(15,23,42,0.9)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="text-sm font-medium text-slate-300">CodeFlow AI</span>
                <div className="h-2 w-2 rounded-full bg-slate-500" />
              </div>

              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-400">
                {Object.keys(codeExamples).map((fileName) => (
                  <button
                    key={fileName}
                    type="button"
                    onClick={() => setActiveFile(fileName)}
                    className={`rounded-md px-2.5 py-1.5 transition ${
                      activeFile === fileName
                        ? "border border-blue-400/40 bg-blue-500/10 text-blue-200"
                        : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                    }`}
                  >
                    {fileName}
                  </button>
                ))}
              </div>

              <div className="p-4 sm:p-5">
                <pre className="overflow-x-auto rounded-xl border border-white/10 bg-slate-950/80 p-4 text-[11px] leading-7 text-slate-200 shadow-inner sm:text-xs">
                  <code>{activeCode}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
