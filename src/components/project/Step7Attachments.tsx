"use client"

import { useCallback, useRef, useState } from "react"
import { useProjectFormStore } from "@/lib/stores/projectForm"
import { uploadFile } from "@/lib/api"
import { Upload, X, FileText, CheckCircle, AlertCircle } from "lucide-react"

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
const MAX_FILE_COUNT = 5
const ALLOWED_TYPES: Record<string, string> = {
  "image/png": "PNG",
  "image/jpeg": "JPG",
  "image/svg+xml": "SVG",
  "application/pdf": "PDF",
  "application/postscript": "AI",
}

interface UploadedFile {
  name: string
  url: string
  progress: number
  status: "uploading" | "done" | "error"
  error?: string
}

function validateFile(file: File, currentCount: number): string | null {
  if (currentCount >= MAX_FILE_COUNT) {
    return `Maximum ${MAX_FILE_COUNT} files allowed`
  }
  if (file.size > MAX_FILE_SIZE) {
    return `File exceeds 10MB limit (${(file.size / 1024 / 1024).toFixed(1)}MB)`
  }
  if (!ALLOWED_TYPES[file.type]) {
    return `File type not allowed — accepted: PNG, JPG, SVG, PDF, AI`
  }
  return null
}

export function Step7Attachments() {
  const { formData, updateFormData } = useProjectFormStore()
  const [files, setFiles] = useState<UploadedFile[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFiles = useCallback(
    async (fileList: FileList | null) => {
      if (!fileList) return

      const validFiles: { file: File; idx: number }[] = []
      const rejects: { name: string; error: string }[] = []

      for (const file of Array.from(fileList)) {
        const err = validateFile(file, files.length + validFiles.length)
        if (err) {
          rejects.push({ name: file.name, error: err })
        } else {
          validFiles.push({ file, idx: files.length + validFiles.length })
        }
      }

      // Show rejected files with errors immediately
      if (rejects.length > 0) {
        setFiles((prev) => [
          ...prev,
          ...rejects.map((r) => ({
            name: r.name,
            url: "",
            progress: 0,
            status: "error" as const,
            error: r.error,
          })),
        ])
      }

      // Upload valid files
      for (const { file, idx } of validFiles) {
        setFiles((prev) => [
          ...prev,
          { name: file.name, url: "", progress: 0, status: "uploading" as const },
        ])

        try {
          const result = await uploadFile(file, (progress) => {
            setFiles((prev) =>
              prev.map((f, j) => (j === idx ? { ...f, progress } : f))
            )
          })

          setFiles((prev) =>
            prev.map((f, j) =>
              j === idx ? { ...f, url: result.url, status: "done" } : f
            )
          )

          updateFormData({
            attachments: [...formData.attachments, result.url],
          })
        } catch {
          setFiles((prev) =>
            prev.map((f, j) =>
              j === idx
                ? { ...f, status: "error", error: "Upload failed — try again" }
                : f
            )
          )
        }
      }
    },
    [files.length, formData.attachments, updateFormData]
  )

  const removeFile = useCallback(
    (idx: number) => {
      const file = files[idx]
      setFiles((prev) => prev.filter((_, j) => j !== idx))
      if (file.url) {
        updateFormData({
          attachments: formData.attachments.filter((u) => u !== file.url),
        })
      }
    },
    [files, formData.attachments, updateFormData]
  )

  const successfulCount = files.filter((f) => f.status === "done").length

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-ink">
          Attachments
        </h2>
        <p className="mt-1 text-sm text-muted-text">
          Upload logos, sketches, reference images, or spec sheets.
        </p>
      </div>

      {/* Drop zone */}
      <div
        onDragOver={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
        onDrop={(e) => {
          e.preventDefault()
          e.stopPropagation()
          handleFiles(e.dataTransfer.files)
        }}
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-line bg-white px-6 py-12 text-center cursor-pointer hover:border-clay transition-colors"
      >
        <Upload className="mx-auto h-8 w-8 text-muted-text" />
        <p className="mt-3 text-sm text-muted-text">
          Drag and drop files, or{" "}
          <span className="font-medium text-clay">browse</span>
        </p>
        <p className="mt-1 text-xs text-muted-text">
          PNG, JPG, SVG, PDF, AI — max 10MB each, up to 5 files
        </p>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept=".png,.svg,.ai,.pdf,.jpg,.jpeg"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {/* File count */}
      {files.length > 0 && (
        <p className="text-xs text-muted-text">
          {successfulCount} of {files.length} file{files.length !== 1 ? "s" : ""} uploaded
          {successfulCount >= MAX_FILE_COUNT && " (max reached)"}
        </p>
      )}

      {/* File list */}
      {files.length > 0 && (
        <div className="space-y-3">
          {files.map((file, idx) => (
            <div
              key={`${file.name}-${idx}`}
              className="flex items-center gap-4 border border-line bg-white px-4 py-3"
            >
              <FileText className="h-5 w-5 flex-shrink-0 text-muted-text" />

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-ink truncate">
                  {file.name}
                </p>

                {file.status === "uploading" && (
                  <div className="mt-2 h-1.5 bg-line overflow-hidden">
                    <div
                      className="h-full bg-clay transition-all duration-300"
                      style={{ width: `${file.progress}%` }}
                    />
                  </div>
                )}

                {file.status === "done" && (
                  <p className="mt-1 text-xs text-clay flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" /> Uploaded
                  </p>
                )}

                {file.status === "error" && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {file.error ?? "Upload failed"}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => removeFile(idx)}
                className="flex-shrink-0 p-1 text-muted-text hover:text-ink transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
