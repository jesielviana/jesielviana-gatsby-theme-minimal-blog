/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { Disqus } from 'gatsby-plugin-disqus';
import Layout from "./layout"
import ItemTags from "./item-tags"
import SEO from "./seo"
import IconTime from '../assets/time.svg'

type PostProps = {
  data: {
    post: {
      slug: string
      title: string
      date: string
      tags?: {
        name: string
        slug: string
      }[]
      description?: string
      canonicalUrl?: string
      body: string
      excerpt: string
      timeToRead?: number
      banner?: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
  }
}

const px = [`32px`, `16px`, `8px`, `4px`]
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`)

const Post = ({ data: { post } }: PostProps) => (
  <Layout>
    <SEO
      title={post.title}
      description={post.description ? post.description : post.excerpt}
      image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
      pathname={post.slug}
      canonicalUrl={post.canonicalUrl}
    />
    <Heading as="h1" variant="styles.h1">
      {post.title}
    </Heading>
    <p sx={{ display: 'flex', color: `secondary`, mt: 3, mb: 1, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
      <time>{post.date}</time>
      <span sx={{ ml: 1, mr: 1 }}>·</span>
      <IconTime sx={{ width: '1rem', mr: 1 }} />
      {post.timeToRead && <span>{post.timeToRead} min read</span>}
    </p>
    {post.tags && (
        <React.Fragment>
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
    <section
      sx={{
        my: 5,
        ".gatsby-resp-image-wrapper": { my: [4, 4, 5], boxShadow: shadow.join(`, `) },
        variant: `layout.content`,
      }}
    >
      <MDXRenderer>{post.body}</MDXRenderer>
      <Disqus 
      identifier={post.slug.substring(1)}
      title={post.title}
      url={post.slug}
    />
    </section>
  </Layout>
)

export default Post
