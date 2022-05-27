import Head from "next/head";
import Footer from "../components/footer";
import Posts from "../components/posts";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";

export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
        <meta
          name="description"
          content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <section className={styles.excerpt}>Who you are section</section>
        <section className={styles.excerpt}>
          What you have done and/or services you provide
        </section>
        <section className={styles.excerpt}>
          Latest sales, testimonials, or other important information
        </section>
        <section className={styles.posts}>
          <Posts posts={posts} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/?_limit=3"
  ); // Get from Twitter or where ever he wants to post
  const posts = await res.json();

  return {
    props: {posts},
  };
}
