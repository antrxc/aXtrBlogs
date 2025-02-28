import React from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';

import { GetStaticProps } from 'next';

interface Post {
  slug: string;
  frontMatter: {
    title: string;
  };
}

interface HomePageProps {
  posts: Post[];
}

const HomePage = ({ posts }: HomePageProps) => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/${post.slug}`}>
              <a>{post.frontMatter.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const files = fs.readdirSync(path.join('pages'));
    const posts = files
      .filter((file) => file.endsWith('.mdx'))
      .map((filename) => {
        const filePath = path.join('pages', filename);
        try {
          const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
          const { data: frontMatter } = matter(markdownWithMeta);
          return {
            slug: filename.replace('.mdx', ''),
            frontMatter,
          };
        } catch (error) {
          console.error(`Error processing file ${filename}:`, error);
          return null; // Or handle the error as appropriate
        }
      })
      .filter(post => post !== null); // Remove any null posts

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: {
        posts: [], // Return an empty array or handle the error as needed
      },
    };
  }
}

export default HomePage;
