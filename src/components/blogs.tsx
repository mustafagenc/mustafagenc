import { BlogCard } from '@/components/blog-card'
import {
  PAGE_QUERY_PARAM,
  PER_PAGE_QUERY_PARAM,
  SEARCH_QUERY_PARAM,
} from '@/lib/constants'
import { TBlogCardMetadata } from '@/types/blogs'

interface BlogsProps {
  blogsWithMeta: TBlogCardMetadata[]
  searchParams?: {
    [SEARCH_QUERY_PARAM]?: string
    [PAGE_QUERY_PARAM]?: string
    [PER_PAGE_QUERY_PARAM]?: string
  }
}

export const Blogs = async ({ blogsWithMeta, searchParams }: BlogsProps) => {
  const resolvedBlogsWithMeta = await blogsWithMeta
  const resolvedSearchParams = await searchParams
  return (
    <>
      {resolvedBlogsWithMeta && resolvedBlogsWithMeta.length === 0 ? (
        <p className='text-muted-foreground text-sm font-medium'>
          No results found
        </p>
      ) : (
        <ul className='flex flex-col gap-8'>
          {resolvedBlogsWithMeta?.length &&
            resolvedBlogsWithMeta.map(blogMeta => (
              <li key={`${blogMeta.slug}_${blogMeta.readTimeInMinutes}`}>
                <BlogCard
                  blogWithMeta={blogMeta}
                  searchParams={resolvedSearchParams}
                />
              </li>
            ))}
        </ul>
      )}
    </>
  )
}
