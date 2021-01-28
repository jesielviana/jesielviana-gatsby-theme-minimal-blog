/** @jsx jsx */
import React from 'react'
import { jsx, Link as TLink } from 'theme-ui'
import { Box } from '@theme-ui/components'
import { Link } from 'gatsby'
import ItemTags from './item-tags'
import IconTime from '../assets/time.svg'

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
    <TLink
      as={Link}
      to={post.slug}
      sx={{ fontSize: [1, 2, 3] /** color: `text`**/ }}
    >
      {post.title}
    </TLink>
    <p
      sx={{
        display: 'flex',
        color: `secondary`,
        mb: 1,
        mt: 1,
        a: { color: `secondary` },
        fontSize: [1, 1, 1]
      }}
    >
      <time>{post.date}</time>
      <span sx={{ ml: 1, mr: 1 }}>·</span>
      <IconTime sx={{ width: '1rem', mr: 1 }} />
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
