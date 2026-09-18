import type { JourneyStep } from "@/types"

// TODO: replace with CMS
export const journeySteps: JourneyStep[] = [
  {
    number: 1,
    title: "Enquiry",
    description:
      "Start a project by completing our enquiry form. Tell us about your organisation, your needs, and your vision.",
  },
  {
    number: 2,
    title: "Consultation",
    description:
      "Our team reviews your enquiry and schedules a consultation to discuss requirements, budgets, and timelines in detail.",
  },
  {
    number: 3,
    title: "Design",
    description:
      "We develop design concepts tailored to your brand — including colour, trim, logo placement, and customization tier.",
  },
  {
    number: 4,
    title: "Sampling",
    description:
      "Physical samples are produced for your approval. Fit, fabric, finish — every detail verified before production.",
  },
  {
    number: 5,
    title: "Approval",
    description:
      "Once samples are approved, we finalise specifications, quantities, and sizing. A formal quotation is issued.",
  },
  {
    number: 6,
    title: "Production",
    description:
      "Manufacturing begins. You'll receive progress updates at key milestones — from cutting to finishing.",
  },
  {
    number: 7,
    title: "Delivery",
    description:
      "Finished garments are quality-checked, packed, and delivered. Every piece inspected against the approved sample.",
  },
]
