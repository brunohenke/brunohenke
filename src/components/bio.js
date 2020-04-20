import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            email
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <section className="bio content">
      <p>
        Hi, I’m {author.name}! <br/>
        I’ve been living in Dublin working as a Visual designer at Wt.ag — BR. <br/>
        Say hi, <a href={`mailto:${social.email}`}>{social.email}</a>
      </p>
    </section>
  )
}

export default Bio
