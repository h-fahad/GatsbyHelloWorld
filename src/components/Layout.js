import React, { ReactNode } from "react";
import { Link } from "gatsby";

export default ({ children }) => {
  return (
    <div>
      <h1>Site Title</h1>
      <Link to="/about/">About</Link>
      <br></br>
      <Link to="/">Back to Home</Link>

      {children}
    </div>
  )
}