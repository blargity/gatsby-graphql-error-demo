import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </div>
)

export default IndexPage

// Note, 'body' is not a field on allContentJson nodes. This is definitely
// an error, but Gatsby reports this error as just:
//
// GraphQL Error There was an error while compiling your site's GraphQL queries.
//   GraphQLParser
//
// Which could be improved.
export const query = graphql`
  query IndexQuery {
    allContentJson {
      edges {
        node {
          title
          body
        }
      }
    }
  }
`
