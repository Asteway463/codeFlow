import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small teams",
    price: "$29.99",
    period: "/month",
    featured: false,
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "API access",
      "Mobile app",
    ],
  },
  {
    name: "Professional",
    description: "Best for growing businesses",
    price: "$79.99",
    period: "/month",
    featured: true,
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Mobile app",
      "Custom integrations",
      "Advanced security",
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "$199.99",
    period: "/month",
    featured: false,
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 phone support",
      "API access",
      "Mobile app",
      "Custom integrations",
      "Advanced security",
      "Dedicated account manager",
      "Custom SLA",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Simple, Transparent Pricing Plans
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-6 shadow-[0_20px_60px_rgba(15,23,42,0.5)] ${
                plan.featured
                  ? "border-blue-400/40 bg-gradient-to-b from-blue-500/10 to-slate-900/80" 
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-blue-400/50 bg-blue-500/20 px-3 py-1.5 text-xs font-medium text-blue-100">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="pt-3">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{plan.description}</p>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-black tracking-tight text-white">{plan.price}</span>
                  <span className="pb-1 text-slate-400">{plan.period}</span>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-200">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-8 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-blue-500 text-white hover:bg-blue-400"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-base text-slate-300">
          Need a custom plan? <a href="#" className="font-medium text-blue-300 underline-offset-4 hover:underline">Contact our sales team</a>
        </p>
      </div>
    </section>
  );
}
