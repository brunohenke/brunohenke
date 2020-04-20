import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query aboutQuery {
      site {
        siteMetadata {
          social {
            email
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata
  return (
    <section className="about content">
      <p>
        I am a Brazilian designer, I’ve been living in Dublin and working at Wt.ag. I came to Ireland to improve my English and learn more about design with people from different places.
      </p>
      <p>
        I’ve been designing for three and a haft years, and I’m really excited about what I do. I don’t believe that just hard work is enough, but if you work hard and love what you do, you can do and be whatever you want.
      </p>
      <p>
        I like sports and as a good Brazilian guy, I love soccer and I enjoy playing it. I also practice some other kind of sports, like running and American football.
      </p>
      <p>
        So, if you would like say hi, contact me in <a href={`mailto:${social.email}`}>{social.email}</a>
      </p>
    </section>
  )
}

export default About
