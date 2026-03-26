import { useMemo, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { blogItems } from "@/data/learn";

const BlogsPage = () => {
  const [query, setQuery] = useState("");

  const posts = useMemo(
    () => blogItems.filter((item) => item.title.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <Navbar />
      <main>
        <section className="pt-16 pb-10">
          <Container className="max-w-[1030px]">
            <h1 className="text-center text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#1d2c57] md:text-[65px]">
              Our Blogs
            </h1>

            <form className="mx-auto mt-14 flex max-w-[750px]" onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-[60px] flex-1 rounded-l-[10px] border border-[#dcdfe7] bg-white px-6 text-base text-[#1d2c57] outline-none"
              />
              <button
                type="submit"
                className="h-[60px] w-[180px] rounded-r-[10px] bg-primary text-base font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Search
              </button>
            </form>
          </Container>
        </section>

        <section className="pb-20">
          <Container className="max-w-[1030px]">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_330px]">
              <div className="space-y-16">
                {posts.map((post) => (
                  <article key={post.id} className="grid gap-8 md:grid-cols-[200px_minmax(0,1fr)]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-[190px] w-full rounded-[14px] object-cover md:w-[200px]"
                    />
                    <div>
                      <h2 className="text-[23px] font-bold leading-[1.3] text-[#182c59]">{post.title}</h2>
                      <p className="mt-3 text-sm leading-6 text-[#677187]">{post.excerpt}</p>
                      <div className="mt-6 flex items-center gap-5">
                        <img src="/favicon.ico" alt="" className="h-[46px] w-[46px] rounded-full" />
                        <div>
                          <p className="text-sm font-semibold leading-none text-[#182c59]">By One Day Event</p>
                          <p className="mt-2 text-[13px] text-[#677187]">{post.date}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="space-y-10">
                <section>
                  <h3 className="text-2xl font-extrabold text-[#1d2c57]">Newsletter</h3>
                  <input
                    type="email"
                    placeholder="Email"
                    className="mt-6 h-[50px] w-full rounded-[10px] border border-[#dcdfe7] bg-white px-5 text-base text-[#1d2c57] outline-none"
                  />
                  <button className="mt-5 h-12 min-w-[130px] rounded-full bg-primary px-8 text-base font-semibold text-white transition-colors hover:bg-primary/90">
                    Subscribe
                  </button>
                </section>

                <section>
                  <h3 className="text-2xl font-extrabold text-[#1d2c57]">About</h3>
                  <p className="mt-4 text-sm leading-7 text-[#677187]">
                    Weddings can run into a number of different issues. This event liability insurance covers you in
                    case you damage the venue, or for any lawsuits you receive as a result of injuries or accidents
                    related to alcohol usage
                  </p>
                  <a href="/blogs" className="mt-2 inline-block text-sm font-bold text-[#1d2c57] hover:underline">
                    Read More
                  </a>
                </section>

                <section>
                  <h3 className="text-2xl font-extrabold text-[#1d2c57]">Our Guarantee</h3>
                  <p className="mt-4 text-sm leading-7 text-[#677187]">
                    Weddings can run into a number of different issues. This event liability insurance covers you in
                    case you damage the venue, or for any lawsuits you receive as a result of injuries or accidents
                    related to alcohol usage
                  </p>
                  <a href="/blogs" className="mt-2 inline-block text-sm font-bold text-[#1d2c57] hover:underline">
                    Read More
                  </a>
                </section>

                <a
                  href="/"
                  className="inline-flex h-12 min-w-[130px] items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Get Quote
                </a>
              </aside>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
