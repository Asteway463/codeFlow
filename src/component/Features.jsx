import { CheckCircle2 } from "lucide-react";

const featureCards = [
  {
    title: "AI Code Completion",
    description:
      "Intelligent code suggestions powered by advanced AI that learns from your coding patterns. Get real-time assistance with syntax, logic, and best practices.",
    snippet: ["function handleSubmit() {", "  // AI suggests next line", "  const data = await fetch('/api/submit')", "  // Auto-completed by AI", "}"],
  },
  {
    title: "Automated Testing",
    description:
      "Generate comprehensive test suites automatically. Our AI analyzes your code and creates unit tests, integration tests, and edge case coverage.",
    snippet: ["describe(\"User Authentication\", () => {", "  // Auto-generated tests", "  it(\"should login successfully\", () => {", "    // Test implementation", "  })", "})"],
  },
  {
    title: "Smart Debugging",
    description:
      "Identify and fix bugs before they reach production. AI-powered error detection and resolution suggestions help you debug faster.",
    snippet: ["// AI suggests fix:", "const result = await processData(input)", "// Fixed: Added await keyword"],
  },
];

export default function Features() {
  return (
    <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Your Complete Development Workflow
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featureCards.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.04]"
            >
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                <div className="mb-3 flex items-center gap-2 text-xs text-slate-400">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-400" />
                  <span>{feature.title}</span>
                </div>
                <pre className="space-y-1 text-[11px] leading-6 text-slate-300">
                  {feature.snippet.map((line, index) => (
                    <div key={`${feature.title}-${index}`}>{line}</div>
                  ))}
                </pre>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="rounded-full bg-blue-500/10 p-2 text-blue-300">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-300">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
