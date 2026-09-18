/**
 * API abstraction layer.
 *
 * ──────────────────────────────────────────────────────────────────────────────
 * CMS / BACKEND SWAP-IN POINT
 *
 * All functions in this file are mocked with artificial delays.
 * To connect to a real backend:
 *
 *   1. Replace the mock implementations below with real fetch calls.
 *   2. The function signatures (input → output) ARE the contract.
 *   3. Create an .env file with API_BASE_URL and swap the base URL.
 *   4. Keep the same export names — consumers don't need to change.
 *
 * Example swap:
 *   const response = await fetch(`${process.env.API_BASE_URL}/projects`, {
 *     method: "POST",
 *     body: JSON.stringify(data),
 *   })
 * ──────────────────────────────────────────────────────────────────────────────
 */

import type { ProjectSubmission, ProjectStatus } from "@/types"

// ─── Helpers ────────────────────────────────────────────────────────────────

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function generateReference(): string {
  const prefix = "JD"
  const timestamp = Date.now().toString(36).toUpperCase().slice(-4)
  const random = Math.random().toString(36).toUpperCase().slice(2, 6)
  return `${prefix}-${timestamp}-${random}`
}

// ─── Submit Project ─────────────────────────────────────────────────────────

export interface SubmitProjectInput {
  organisationName: string
  organisationType: string
  industry: string
  contactName: string
  contactEmail: string
  contactPhone: string
  contactRole: string
  projectName: string
  description: string
  customizationTier: "PLAIN" | "TRIMMED" | "SUBLIMATION"
  collections: string[]
  brandingOptions: string[]
  logoUrl?: string
  quantityRange: string
  sizes: string[]
  colours: string[]
  specialRequirements: string
  deadline: string
  budget: string
  urgency: "standard" | "priority" | "urgent"
  attachments: string[]
}

export async function submitProject(
  data: SubmitProjectInput
): Promise<{ reference: string }> {
  // TODO: replace with real API call
  await delay(1500)
  return { reference: generateReference() }
}

// ─── Upload File ────────────────────────────────────────────────────────────

export async function uploadFile(
  file: File,
  onProgress?: (progress: number) => void
): Promise<{ url: string }> {
  // TODO: replace with real upload (e.g. S3 presigned URL, Cloudflare R2)
  const totalSteps = 10
  for (let i = 1; i <= totalSteps; i++) {
    await delay(200)
    onProgress?.((i / totalSteps) * 100)
  }
  return { url: `/uploads/${file.name}` }
}

// ─── Track Project Status ───────────────────────────────────────────────────

export async function getProjectStatus(
  reference: string
): Promise<{ status: ProjectStatus; updatedAt: string }> {
  // TODO: replace with real status lookup
  await delay(800)
  return {
    status: "NEW",
    updatedAt: new Date().toISOString(),
  }
}
