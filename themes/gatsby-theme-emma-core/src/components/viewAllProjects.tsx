import * as React from "react"

export default function ViewAllProjects({ data }: { data: any }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
