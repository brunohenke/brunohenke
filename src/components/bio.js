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
        Hey, I’m {author.name}! <br/>
        I’ve been living in Porto Alegre working as a designer at BriviaDez - BR. <br/>
        Say hi, <a href={`mailto:${social.email}`}>{social.email}</a>
      </p>
    </section>
  )
}

export default Bio
