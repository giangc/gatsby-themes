/** @jsx jsx */
import { jsx, Container, Themed } from "theme-ui"
import { useTrail } from "react-spring"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Layout from "./layout"

type ProjectsProps = {
  projects: {
    color: string
    slug: string
    title: string
    service: string
    client: string
    cover: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }[]
  [key: string]: any
}

const ViewAllProjects = ({ projects }: ProjectsProps) => {
  const trail = useTrail(projects.length, {
    from: { height: `0%` },
    to: { height: `100%` },
  })


  return (
    <Layout>
      <Container>
        <Themed.p>
            Hi!{` `}
         </Themed.p>
      </Container>
    </Layout>)
  

  
}

export default ViewAllProjects
