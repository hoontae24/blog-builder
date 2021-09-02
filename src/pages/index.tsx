import { GetStaticProps } from "next"
import Link from "next/link"

import { Explorer } from "@/libs/explorer"
import { Post } from "@/types/post"

type Props = {
  posts: Post[]
}

const IndexPage = (props: Props) => {
  const { posts } = props

  return (
    <div>
      {posts.map((post, i) => (
        <div key={post.paths.join("/")}>
          <Link href={`/${post.slug}`}>
            <span>
              {i + 1} / {post.title}
            </span>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await Explorer.getPosts()

  return {
    props: { posts: posts },
  }
}
