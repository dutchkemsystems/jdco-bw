import { ResourceCard } from "./ResourceCard"
import type { Resource } from "@/types"

interface ResourceListProps {
  resources: Resource[]
}

// TODO: replace with CMS
export function ResourceList({ resources }: ResourceListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {resources.map((resource) => (
        <ResourceCard key={resource.slug} resource={resource} />
      ))}
    </div>
  )
}
