import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Button } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

import MyCard from '../components/MyCard'
import { sortByDate } from '../utils'


const Home: NextPage = ({posts}) => {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>
      {posts.map((post, index) => {
        return (
          <MyCard
          key={index}
          image={post.frontmatter.cover_image}
          date={post.frontmatter.date}
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          link={post.slug}
          />
        )

      })}
    </div>
  )
}

export async function getStaticProps() {
  // Ler posts da pasta posts
  const files  = fs.readdirSync(path.join('posts'))

  // Ler título das publicações (slug) e propriedades delas.
  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename), 'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return  {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    }
  }
}

export default Home
