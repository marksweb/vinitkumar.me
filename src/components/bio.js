/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Blog by <strong><a href="https://twitter.com/vinitkme">{author}</a></strong> who loves creating useful things with his bare hands.
        <Link to="/about"> Read more 👉 </Link>
      </p>
      <p>
        His
        {` `}
        <a href="https://vinitkumar.github.io/vinit_kumar.pdf">
         resume
        </a> ,
        {` `}
        <a href="/values">
         values
        </a>
        {` `}
        and
        {` `}
        <a href="https://github.com/vinitkumar">
         code
        </a> here.
      </p>
    </div>
  )
}

export default Bio
