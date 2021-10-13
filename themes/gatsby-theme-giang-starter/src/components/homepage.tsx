/** @jsx jsx */
import { jsx } from "theme-ui"

type PostsProps = {
  posts?: any[],
}

const Homepage = ({ posts }: PostsProps) => (
  <div>
    <h1>Giang</h1> 
    <pre>{JSON.stringify(posts, null, 2)}</pre>
  </div>
)

export default Homepage