/** @jsx jsx */
import { Box, jsx } from "theme-ui"

const Footer = () => (
  <Box as="footer" variant="layout.footer">
    Copyright &copy; {new Date().getFullYear()} Crystal Technologies JSC. All right reserved.
    <br />
  </Box>
)

export default Footer
