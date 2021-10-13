import { graphql } from "gatsby";
import HomepageComponent from "../components/homepage";

export const query = graphql`
  query {
    allProject(sort: { fields: date, order: DESC }) {
      nodes {
        client
        domain
        brief
        cover {
          childImageSharp {
            gatsbyImageData(width: 850, quality: 90)
          }
        }
      }
    }
  }
`

export default HomepageComponent
