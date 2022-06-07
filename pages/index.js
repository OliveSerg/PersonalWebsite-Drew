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

      <Header />
      <main className={styles.main}>
        <section>
          <div className="brand-hero_background-image"></div>
          <div className="brand-hero_content">
            <div className="brand-hero_title">THIS IS A TITLE</div>
            <div className="brand-hero_image">IMAGE</div>
          </div>
        </section>
        <section className={styles.excerpt}>
          <h2>Who you are section</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <section className={styles.excerpt}>
          <h2>What you have done and/or services you provide</h2>
          <div className={styles.services}>
            <p>ICON</p>
            <h4>SERVICE</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className={styles.services}>
            <p>ICON</p>
            <h4>SERVICE</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className={styles.services}>
            <p>ICON</p>
            <h4>SERVICE</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
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
