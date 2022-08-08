import Head from "next/head";
import Footer from "../components/footer";
import Posts from "../components/posts";
import Image from "next/image";
import Header from "../components/header";
import Contact from "../components/contact";
import Carousel from "../components/carousel";

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
      <main className="relative">
        <section className="flex min-h-[90vh] relative">
          <div className="absolute w-full h-full top-0 left-0 -z-1">
            <Image
              alt="background image"
              src="/banner-background.svg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="container mx-auto self-center">
            <div className="grid grid-flow-col grid-cols-12 gap-4 flex items-center">
              <div className="col-start-2 col-span-5">
                <h1 className="text-5xl font-extrabold uppercase">
                  <span className="font-normal italic">Lorem ipsum</span> dolor
                  sit amet, consectetur adipiscing eli
                </h1>
              </div>
              <div className="col-span-5 relative">
                <div className="w-full h-96 -scale-x-[1]">
                  <Image
                    src="/gorilla-clipart-black-and-white-5.png"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="relative p-5 mb-40">
          <div className="h-full w-full absolute left-0 top-0 z-0 bg-zinc-400 skew-y-6"></div>
          <div className="container mx-auto relative z-10">
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <div className="row-span-3">
                <h2 className="text-3xl font-bold">Who I Am</h2>
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
                <h2 className="text-3xl font-bold">Who I Am</h2>
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
                <h2 className="text-3xl font-bold">Who I Am</h2>
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
        <section id="services" className="relative p-5 mb-40">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold">Services</h2>
            <hr className="w-24 border-y-2 border-red-600 mb-10 mt-3 ml-2.5" />
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col">
                <i className="fa-solid fa-crow text-7xl text-gold text-center"></i>
                <h4 className="text-xl text-center font-bold">SERVICE</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex flex-col">
                <i className="fa-solid fa-crow text-7xl text-gold text-center"></i>
                <h4 className="text-xl text-center font-bold">SERVICE</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex flex-col">
                <i className="fa-solid fa-crow text-7xl text-gold text-center"></i>
                <h4 className="text-xl text-center font-bold">SERVICE</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="p-5 mb-40 ">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center">Testimonials</h2>
            <hr className="w-32 mx-auto border-y-2 border-red-600 mb-10 mt-3" />
            <div className="w-3/4 mx-auto">
              <Carousel />
            </div>
          </div>
        </section>
        <section id="posts" className="bg-zinc-400 p-5 mb-40 ">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold">Lastest Posts</h2>
            <hr className="w-32 border-y-2 border-red-600 mb-10 mt-3 ml-2.5" />
            <Posts posts={posts} />
          </div>
        </section>
      </main>
      <section id="contact" className="relative p-5 w-full">
        <div className="max-w-3xl mx-auto bg-zinc-800 text-white z-10 relative dark:bg-zinc-100 dark:text-black p-10">
          <h2 className="text-5xl font-extrabold uppercase col-start-2 col-span-6 text-center">
            <span className="font-normal italic">Let&apos;s</span> Work Together
          </h2>
          <hr className="w-1/3 mx-auto border-y-2 border-red-600 mb-10 mt-3" />
          <div className="absolute -top-[18%] -left-[18%] z-1 w-1/3 h-1/3">
            <Image
              alt="background image"
              src="/contact-accent.svg"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <Contact />
          <div className="absolute -bottom-[18%] -right-[18%] z-1 w-1/3 h-1/3 rotate-180">
            <Image
              alt="background image"
              src="/contact-accent.svg"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </div>
        <div className="h-4/5 w-full absolute left-0 top-1/2 z-0 bg-zinc-400 -skew-y-6 -translate-y-1/2"></div>
        <Footer />
      </section>
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
