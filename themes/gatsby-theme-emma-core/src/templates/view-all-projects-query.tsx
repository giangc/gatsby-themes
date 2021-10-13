import { graphql } from "gatsby"
import ViewAllProjects from "../components/viewAllProjects"

export default ViewAllProjects

export const query = graphql`
  query ($slug: String!) {
    page(slug: { eq: $slug }) {
      title
      slug
      excerpt
      body
      cover {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
    }
  }
`
