"use client";

import { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";

const INTEGRATION_TYPES = [
  { value: "analytics", label: "Analytics & Reporting" },
  { value: "email", label: "Email & Marketing" },
  { value: "community", label: "Community & Engagement" },
  { value: "payments", label: "Payments & Payouts" },
  { value: "crm", label: "CRM & Sales" },
  { value: "automation", label: "Workflow Automation" },
  { value: "other", label: "Other" },
];

const API_SCOPES = [
  { value: "read:creators", label: "Read creators and profile data" },
  { value: "write:creators", label: "Create/update creators" },
  { value: "read:courses", label: "Read courses and memberships" },
  { value: "write:courses", label: "Create/update courses and memberships" },
  { value: "read:transactions", label: "Read transactions and revenue" },
  { value: "read:users", label: "Read user and organization data" },
  { value: "webhooks", label: "Receive webhooks for events" },
];

const STAGE_OPTIONS = [
  { value: "idea", label: "Idea / Planning" },
  { value: "development", label: "In development" },
  { value: "beta", label: "Private beta" },
  { value: "launched", label: "Launched (other platform)" },
];

export default function BuildAppPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Company / Developer
    companyName: "",
    developerEmail: "",
    developerPhone: "",
    website: "",
    country: "",
    // App details
    appName: "",
    appDescription: "",
    appUseCase: "",
    targetAudience: "",
    integrationType: "" as string,
    apiScopes: [] as string[],
    // Technical
    stage: "" as string,
    techStack: "",
    oauthRedirectUri: "",
    webhookUrl: "",
    // Compliance
    privacyPolicyUrl: "",
    termsUrl: "",
    dataHandling: "",
    emergencyContact: "",
    // Agreement
    agreedToTerms: false,
    agreedToApiPolicy: false,
  });

  const updateField = (field: keyof typeof formData, value: string | string[] | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleScope = (scope: string) => {
    setFormData((prev) => ({
      ...prev,
      apiScopes: prev.apiScopes.includes(scope)
        ? prev.apiScopes.filter((s) => s !== scope)
        : [...prev.apiScopes, scope],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: POST to API, redirect to success
    const subject = `[Partner Application] ${formData.appName} - ${formData.companyName}`;
    const body = Object.entries(formData)
      .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
      .join("\n");
    window.location.href = `mailto:partners@creatorengine.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main>
      <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Partner Program
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Build an app
          </h1>
          <p className="mt-4 text-slate-600">
            Apply to join our app partner program. Get API access, documentation,
            and distribution in the Creator Revenue Engine marketplace. We review
            applications within 5–7 business days.
          </p>
          <div className="mt-6 flex gap-2">
            {[1, 2, 3].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStep(s)}
                className={`h-2 flex-1 rounded-full transition ${
                  step >= s ? "bg-teal-600" : "bg-slate-200"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Step 1: Company / Developer */}
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Company & developer info
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    We need to verify your company and reach you for technical
                    and compliance matters.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-slate-700">
                      Company / Legal entity name *
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => updateField("companyName", e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="developerEmail" className="block text-sm font-medium text-slate-700">
                        Developer / API contact email *
                      </label>
                      <input
                        id="developerEmail"
                        type="email"
                        required
                        value={formData.developerEmail}
                        onChange={(e) => updateField("developerEmail", e.target.value)}
                        className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                        placeholder="dev@acme.com"
                      />
                      <p className="mt-1 text-xs text-slate-500">
                        For API keys, webhooks, and technical communication
                      </p>
                    </div>
                    <div>
                      <label htmlFor="developerPhone" className="block text-sm font-medium text-slate-700">
                        Emergency contact phone
                      </label>
                      <input
                        id="developerPhone"
                        type="tel"
                        value={formData.developerPhone}
                        onChange={(e) => updateField("developerPhone", e.target.value)}
                        className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                        placeholder="+1 555 012 3456"
                      />
                      <p className="mt-1 text-xs text-slate-500">
                        Critical issues, security incidents
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-slate-700">
                        Company website *
                      </label>
                      <input
                        id="website"
                        type="url"
                        required
                        value={formData.website}
                        onChange={(e) => updateField("website", e.target.value)}
                        className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                        placeholder="https://acme.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-slate-700">
                        Country of incorporation *
                      </label>
                      <input
                        id="country"
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => updateField("country", e.target.value)}
                        className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                        placeholder="United States"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
                >
                  Next: App details →
                </button>
              </div>
            )}

            {/* Step 2: App details */}
            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    App details
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Tell us about your app and how it integrates with Creator Revenue Engine.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="appName" className="block text-sm font-medium text-slate-700">
                      App name *
                    </label>
                    <input
                      id="appName"
                      type="text"
                      required
                      value={formData.appName}
                      onChange={(e) => updateField("appName", e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      placeholder="Revenue Dashboard Pro"
                    />
                  </div>

                  <div>
                    <label htmlFor="appDescription" className="block text-sm font-medium text-slate-700">
                      Short description *
                    </label>
                    <textarea
                      id="appDescription"
                      rows={3}
                      required
                      value={formData.appDescription}
                      onChange={(e) => updateField("appDescription", e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      placeholder="What does your app do in 1-2 sentences?"
                    />
                  </div>

                  <div>
                    <label htmlFor="appUseCase" className="block text-sm font-medium text-slate-700">
                      Use case / Integration flow *
                    </label>
                    <textarea
                      id="appUseCase"
                      rows={4}
                      required
                      value={formData.appUseCase}
                      onChange={(e) => updateField("appUseCase", e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      placeholder="Describe the main workflow: e.g. 'When a creator publishes a course, we sync the enrollment list to their email tool and send a welcome sequence.'"
                    />
                  </div>

                  <div>
                    <label htmlFor="targetAudience" className="block text-sm font-medium text-slate-700">
                      Target audience *
                    </label>
                    <input
                      id="targetAudience"
                      type="text"
                      required
                      value={formData.targetAudience}
                      onChange={(e) => updateField("targetAudience", e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      placeholder="e.g. Creator agencies, MCNs, individual creators"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Integration category *
                    </label>
                    <select
                      required
                      value={formData.integrationType}
                      onChange={(e) => updateField("integrationType", e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    >
                      <option value="">Select category</option>
                      {INTEGRATION_TYPES.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      API scopes needed *
                    </label>
                    <p className="mt-1 text-xs text-slate-500">
                      Select all scopes your app will need. We follow least-privilege.
                    </p>
                    <div className="mt-3 space-y-2">
                      {API_SCOPES.map((scope) => (
                        <label key={scope.value} className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={formData.apiScopes.includes(scope.value)}
                            onChange={() => toggleScope(scope.value)}
                            className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                          />
                          <span className="text-sm text-slate-700">{scope.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Development stage *
                    </label>
                    <select
                      required
                      value={formData.stage}
                      onChange={(e) => updateField("stage", e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    >
                      <option value="">Select stage</option>
                      {STAGE_OPTIONS.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="techStack" className="block text-sm font-medium text-slate-700">
                      Tech stack / Hosting
                    </label>
                    <input
                      id="techStack"
                      type="text"
                      value={formData.techStack}
                      onChange={(e) => updateField("techStack", e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      placeholder="e.g. Node.js, Vercel, PostgreSQL"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="rounded-xl border-2 border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-teal-600 hover:text-teal-700"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
                  >
                    Next: Technical & compliance →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Technical & Compliance */}
            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Technical & compliance
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    OAuth, webhooks, and policy requirements. Inspired by Stripe and Shopify partner programs.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="oauthRedirectUri" className="block text-sm font-medium text-slate-700">
                      OAuth redirect URI
                    </label>
                    <input
                      id="oauthRedirectUri"
                      type="url"
                      value={formData.oauthRedirectUri}
                      onChange={(e) => updateField("oauthRedirectUri", e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      placeholder="https://app.example.com/oauth/callback"
                    />
                  </div>

                  <div>
                    <label htmlFor="webhookUrl" className="block text-sm font-medium text-slate-700">
                      Webhook endpoint URL
                    </label>
                    <input
                      id="webhookUrl"
                      type="url"
                      value={formData.webhookUrl}
                      onChange={(e) => updateField("webhookUrl", e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      placeholder="https://app.example.com/webhooks"
                    />
                    <p className="mt-1 text-xs text-slate-500">
                      Required if you selected webhooks scope
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="privacyPolicyUrl" className="block text-sm font-medium text-slate-700">
                        Privacy policy URL *
                      </label>
                      <input
                        id="privacyPolicyUrl"
                        type="url"
                        required
                        value={formData.privacyPolicyUrl}
                        onChange={(e) => updateField("privacyPolicyUrl", e.target.value)}
                        className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                        placeholder="https://acme.com/privacy"
                      />
                    </div>
                    <div>
                      <label htmlFor="termsUrl" className="block text-sm font-medium text-slate-700">
                        Terms of service URL *
                      </label>
                      <input
                        id="termsUrl"
                        type="url"
                        required
                        value={formData.termsUrl}
                        onChange={(e) => updateField("termsUrl", e.target.value)}
                        className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                        placeholder="https://acme.com/terms"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="dataHandling" className="block text-sm font-medium text-slate-700">
                      Data handling summary *
                    </label>
                    <textarea
                      id="dataHandling"
                      rows={4}
                      required
                      value={formData.dataHandling}
                      onChange={(e) => updateField("dataHandling", e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      placeholder="Describe how you store, process, and protect creator data. Include retention and deletion practices."
                    />
                  </div>

                  <div>
                    <label htmlFor="emergencyContact" className="block text-sm font-medium text-slate-700">
                      Emergency contact (security / critical issues)
                    </label>
                    <input
                      id="emergencyContact"
                      type="text"
                      value={formData.emergencyContact}
                      onChange={(e) => updateField("emergencyContact", e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      placeholder="Name and 24/7 contact (email or phone)"
                    />
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                    <h3 className="font-semibold text-slate-900">Agreements *</h3>
                    <div className="mt-4 space-y-4">
                      <label className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          required
                          checked={formData.agreedToTerms}
                          onChange={(e) => updateField("agreedToTerms", e.target.checked)}
                          className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                        />
                        <span className="text-sm text-slate-700">
                          I agree to the Partner Program Agreement and App Marketplace Terms.
                        </span>
                      </label>
                      <label className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          required
                          checked={formData.agreedToApiPolicy}
                          onChange={(e) => updateField("agreedToApiPolicy", e.target.checked)}
                          className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                        />
                        <span className="text-sm text-slate-700">
                          I will comply with the API Usage Policy, including rate limits, data
                          retention, and security requirements.
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="rounded-xl border-2 border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-teal-600 hover:text-teal-700"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-700"
                  >
                    Submit application
                  </button>
                </div>
              </div>
            )}
          </form>

          <p className="mt-10 text-center text-sm text-slate-500">
            Questions?{" "}
            <Link href="/contact" className="font-semibold text-teal-600 hover:text-teal-700">
              Contact us
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
