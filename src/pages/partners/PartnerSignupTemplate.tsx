import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { CheckCircle, ChevronLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { PartnerTypeConfig } from "@/data/catalog/partners";

const partnerSteps = ["Personal Info", "Business Details", "Confirmation"];

const personalSchema = z.object({
  firstName: z.string().min(1, "Required").max(50),
  lastName: z.string().min(1, "Required").max(50),
  email: z.string().email("Invalid email").max(255),
  phone: z.string().min(10, "Must be at least 10 digits").max(20),
  company: z.string().min(1, "Required").max(100),
});

interface PartnerSignupTemplateProps {
  partner: PartnerTypeConfig;
}

const PartnerSignupTemplate = ({ partner }: PartnerSignupTemplateProps) => {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    businessType: "",
    yearsInBusiness: "",
    website: "",
    notes: "",
  });

  const update = (field: string, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => {
      const next = { ...previous };
      delete next[field];
      return next;
    });
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (step === 0) {
      const result = personalSchema.safeParse(form);

      if (!result.success) {
        result.error.errors.forEach((error) => {
          nextErrors[error.path[0] as string] = error.message;
        });
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const next = () => {
    if (validate()) {
      setStep((current) => Math.min(current + 1, partnerSteps.length - 1));
    }
  };

  const back = () => setStep((current) => Math.max(current - 1, 0));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16">
        <Container className="max-w-2xl">
          <h1 className="text-[36px] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground md:text-[48px]">
            {partner.title}
          </h1>
          <p className="mt-4 text-base leading-8 text-muted-foreground">{partner.description}</p>

          <div className="mt-8 mb-10 space-y-2">
            {partner.benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mb-8 flex items-center gap-4">
            {partnerSteps.map((stepLabel, index) => (
              <div key={stepLabel} className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                    index < step
                      ? "bg-primary text-primary-foreground"
                      : index === step
                        ? "bg-cta text-cta-foreground"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index < step ? <CheckCircle className="h-5 w-5" /> : index + 1}
                </div>
                <span className="hidden text-sm font-medium text-muted-foreground sm:inline">{stepLabel}</span>
              </div>
            ))}
          </div>

          {step === 0 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className="mt-1" />
                  {errors.firstName && <p className="mt-1 text-sm text-destructive">{errors.firstName}</p>}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className="mt-1" />
                  {errors.lastName && <p className="mt-1 text-sm text-destructive">{errors.lastName}</p>}
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="mt-1" />
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="mt-1" />
                {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone}</p>}
              </div>
              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input id="company" value={form.company} onChange={(e) => update("company", e.target.value)} className="mt-1" />
                {errors.company && <p className="mt-1 text-sm text-destructive">{errors.company}</p>}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="businessType">Business Type</Label>
                <Input
                  id="businessType"
                  value={form.businessType}
                  onChange={(e) => update("businessType", e.target.value)}
                  placeholder="Insurance Agency, Event Planning, etc."
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="yearsInBusiness">Years in Business</Label>
                <Input
                  id="yearsInBusiness"
                  type="number"
                  value={form.yearsInBusiness}
                  onChange={(e) => update("yearsInBusiness", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="website">Website (optional)</Label>
                <Input
                  id="website"
                  value={form.website}
                  onChange={(e) => update("website", e.target.value)}
                  placeholder="https://..."
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <textarea
                  id="notes"
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  className="mt-1 flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Tell us about your interest in partnering..."
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <CheckCircle className="mx-auto h-16 w-16 text-primary" />
              <h2 className="mt-4 text-2xl font-bold text-foreground">Application Ready!</h2>
              <p className="mt-2 text-muted-foreground">
                Your partner application for {partner.title} is ready for review. In a live environment, this would be submitted to our team.
              </p>
              <div className="mt-6 rounded-lg bg-muted p-4 text-left text-sm">
                <p><strong>Name:</strong> {form.firstName} {form.lastName}</p>
                <p><strong>Email:</strong> {form.email}</p>
                <p><strong>Company:</strong> {form.company}</p>
                {form.businessType && <p><strong>Business Type:</strong> {form.businessType}</p>}
              </div>
            </div>
          )}

          {step < 2 && (
            <div className="mt-10 flex items-center justify-between">
              {step > 0 ? (
                <Button variant="outline" onClick={back}>
                  <ChevronLeft className="mr-1 h-4 w-4" /> Back
                </Button>
              ) : (
                <Button asChild variant="ghost">
                  <Link to="/">Back Home</Link>
                </Button>
              )}
              <Button onClick={next} className="bg-cta text-cta-foreground hover:bg-cta/90">
                Next
              </Button>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default PartnerSignupTemplate;
