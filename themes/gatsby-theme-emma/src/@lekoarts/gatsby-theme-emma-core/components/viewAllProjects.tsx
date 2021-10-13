import * as React from "react"
import ViewAllProjects from "../../../components/viewAllProjects"

type Props = {
  data: {
    allProject: any
    [key: string]: string
  }
  [key: string]: any
}

export default function EmmaCoreProjects({ ...props }: Props) {
  const {
    data: { allProject },
  } = props

  return <ViewAllProjects projects={allProject.nodes} {...props} />
}
