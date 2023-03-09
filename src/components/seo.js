import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <><title>{title} | {data.site.siteMetadata.title}</title><link href='https://fonts.googleapis.com/css?family=Fira Code' rel='stylesheet'></link></>
  )
}

export default Seo