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
      avatar: file(absolutePath: { regex: "/vinit_kumar.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 100) {
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
  const twitterUrl = `https://twitter.com/${social.twitter}`
  console.log(data.avatar);
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <p style={{
        width: `80%`,
      }}>
        Hi there, I am <strong><a href={twitterUrl}>{author}</a></strong>. I am a software
        engineer from India <span role="img" aria-label="india flag">🇮🇳</span> who loves making computers do things and admires good books, music, art
    and coffee.
        You can read more about me <Link to="/about">here.</Link>
      </p>
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
        Find my
        {` `}
        <span role="img" aria-label="resume">📝</span>
        <a href="https://vinitkumar.github.io/vinit_kumar.pdf">
         &nbsp;resume
        </a> ,
        {` `}
        <span role="img" aria-label="values">🕉</span>
        <a href="/values">
          &nbsp;values
        </a>
        {` `}
        and
        {` `}
        <span role="img" aria-label="code">💻</span>
        <a href="https://github.com/vinitkumar">
          &nbsp;code
        </a> here.
      </p>
    </div>
  )
}

export default Bio
