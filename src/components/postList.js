import React from "react"
import { Link } from "gatsby"

export default props => (
  <article>
    <Link to={props.node.fields.slug} className="post-list-link">
      <div className="post-list-content">
        <h2 className="post-list-title">
          {props.node.frontmatter.title || props.node.fields.slug}
        </h2>

        <p>
        #{props.node.frontmatter.tags(1)}
        </p>
        
      </div>
    </Link>
  </article>
)
