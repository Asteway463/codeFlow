const testimonials = [
  {
    quote:
      "This AI-powered development platform has revolutionized how we write code. The intelligent suggestions save us hours every day.",
    name: "Sarah Chen",
    role: "Senior Developer",
  },
  {
    quote:
      "The automated testing and debugging features are game-changers. We ship code faster and with more confidence than ever before.",
    name: "Marcus Rodriguez",
    role: "Tech Lead",
  },
  {
    quote:
      "Our development velocity increased by 300% since adopting this platform. It's like having a senior developer pair programming with every team member.",
    name: "Emily Watson",
    role: "CTO",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            What developers are saying about us
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Everything you need to build, test, and deploy applications with AI-powered development tools.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.35)]"
            >
              <div className="mb-5 text-5xl font-bold leading-none text-blue-300">“</div>
              <p className="text-base leading-8 text-slate-200">{item.quote}</p>

              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-bold text-white">
                  {item.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{item.name}</h4>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
