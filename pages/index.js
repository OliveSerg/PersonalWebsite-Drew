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
        <section className="flex min-h-[90vh]">
          <div className="brand-hero_background-image"></div>
          <div className="container mx-auto self-center">
            <div className="grid grid-flow-col grid-cols-12 gap-4">
              <h1 className="text-5xl font-extrabold uppercase col-start-2 col-span-6">
                <span className="font-normal italic">Lorem ipsum</span> dolor
                sit amet, consectetur adipiscing eli
              </h1>
              <div className="col-span-5">IMAGE</div>
            </div>
          </div>
        </section>
        <section id="about" className="relative py-5 mb-40">
          <div className="h-full w-full absolute left-0 top-0 z-0 bg-zinc-400 skew-y-6"></div>
          <div className="container mx-auto relative z-10">
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <div className="row-span-3">
                <h2 className="text-2xl font-bold">Who I Am</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="row-span-2 row-start-2">
                <h2 className="text-2xl font-bold">Who I Am</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="row-span-1 row-start-3">
                <h2 className="text-2xl font-bold">Who I Am</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-5 mb-40">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6">
              What you have done and/or services you provide
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className={styles.services}>
                <p>ICON</p>
                <h4>SERVICE</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className={styles.services}>
                <p>ICON</p>
                <h4>SERVICE</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className={styles.services}>
                <p>ICON</p>
                <h4>SERVICE</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.excerpt}>
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold">
              Latest sales, testimonials, or other important information
            </h2>
          </div>
        </section>
        <section className={styles.posts}>
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold">Posts</h2>
            <Posts posts={posts} />
          </div>
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
