import type { OrderingStep } from "@/types"

// TODO: replace with CMS
export const orderingSteps: OrderingStep[] = [
  {
    number: 1,
    title: "Submit Enquiry",
    description:
      "Complete the Start a Project form with your organisation details, garment requirements, and branding specifications.",
  },
  {
    number: 2,
    title: "Review & Clarify",
    description:
      "Our team reviews your submission and may reach out for clarification on specifications, quantities, or design details.",
  },
  {
    number: 3,
    title: "Quotation",
    description:
      "A detailed quotation is issued based on your customization tier, quantity, and any special requirements.",
  },
  {
    number: 4,
    title: "Deposit",
    description:
      "A 50% deposit confirms your project. Remaining balance is due on delivery.",
  },
  {
    number: 5,
    title: "Design Finalisation",
    description:
      "Final designs are produced with your logo, branding, and colour specifications. Approval is required before production.",
  },
  {
    number: 6,
    title: "Sampling",
    description:
      "A production sample is created for your sign-off. This is the benchmark for the full run.",
  },
  {
    number: 7,
    title: "Production",
    description:
      "Full production begins. Standard turnaround is 4–8 weeks depending on customization tier and order volume.",
  },
  {
    number: 8,
    title: "Quality Check",
    description:
      "Every garment is inspected against the approved sample. Any non-conforming items are rejected.",
  },
  {
    number: 9,
    title: "Delivery",
    description:
      "Finished order is packed and delivered. Remaining balance is invoiced on dispatch.",
  },
]
