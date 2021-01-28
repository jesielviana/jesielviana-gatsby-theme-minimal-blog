/** @jsx jsx */
import React from "react"
import { jsx, Link as TLink } from "theme-ui"
import { Box } from "@theme-ui/components"
import { Link } from "gatsby"
import ItemTags from "./item-tags"

type BlogListItemProps = {
  post: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }
  showTags?: boolean
}

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => (
  <Box mb={4}>
    <TLink as={Link} to={post.slug} sx={{ fontSize: [1, 2, 3], /** color: `text`**/ }}>
      {post.title}
    </TLink>
    <p sx={{ display: 'flex', color: `secondary`, mb: 1,  mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 1] }}>
      <time>{post.date}</time>
      <span sx={{ ml: 1, mr: 1 }}>·</span>
      <svg sx={{ width: '1rem', mr: 1 }} class="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" 
      focusable="false" data-prefix="far" data-icon="clock" role="img" 
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" 
      data-fa-i2svg=""><path fill="currentColor" 
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
      {post.timeToRead && <span> {post.timeToRead} min read</span>}
    </p>
    {post.tags && showTags && (
        <React.Fragment>
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
  </Box>
)

export default BlogListItem
