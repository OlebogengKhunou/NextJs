import { Fragment } from "react";
import Head from 'next/head';

import Hero from "../components/Home-page/hero";
import FeaturedPosts from "../components/Home-page/featured-posts";
import { getFeaturedPosts } from '../lib/posts-util'

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my blog</title>
        <meta name="description" content="I post about web development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return{
    props:{
      posts: featuredPosts
    }
  }
}

export default HomePage;