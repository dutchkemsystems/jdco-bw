"use client"

import { useCallback, useRef, useState } from "react"
import { useProjectFormStore } from "@/lib/stores/projectForm"
import { uploadFile } from "@/lib/api"
import { Upload, X, FileText, CheckCircle, AlertCircle } from "lucide-react"

interface UploadedFile {
  name: string
  url: string
  progress: number
  status: "uploading" | "done" | "error"
}

export function Step7Attachments() {
  const { formData, updateFormData } = useProjectFormStore()
  const [files, setFiles] = useState<UploadedFile[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFiles = useCallback(
    async (fileList: FileList | null) => {
      if (!fileList) return

      const startIdx = files.length
      const newEntries: UploadedFile[] = Array.from(fileList).map((f) => ({
        name: f.name,
        url: "",
        progress: 0,
        status: "uploading" as const,
      }))

      setFiles((prev) => [...prev, ...newEntries])

      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i]
        const idx = startIdx + i

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
              j === idx ? { ...f, status: "error" } : f
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
          PNG, SVG, AI, PDF — max 10MB each
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
                    <AlertCircle className="h-3 w-3" /> Upload failed
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
