import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { blogPosts } from "@/data/content/blogs";
import { Button } from "@/components/ui/button";

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <Container className="py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground">Blog post not found</h1>
          <Button asChild className="mt-8"><Link to="/blogs">Back to Blogs</Link></Button>
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-16 pb-10">
          <Container className="max-w-[800px]">
            <Link to="/blogs" className="text-sm font-medium text-primary hover:underline">← Back to Blogs</Link>
            <h1 className="mt-6 text-[36px] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground md:text-[48px]">
              {post.title}
            </h1>
            <div className="mt-4 text-sm text-muted-foreground">
              By {post.author} · {post.date}
            </div>
          </Container>
        </section>
        <section className="pb-6">
          <Container className="max-w-[800px]">
            <img src={post.image} alt={post.title} className="w-full rounded-2xl object-cover" loading="lazy" />
          </Container>
        </section>
        <section className="pb-20">
          <Container className="max-w-[800px]">
            <div className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="mb-4 text-base leading-8 text-muted-foreground">{paragraph}</p>
              ))}
            </div>
            <div className="mt-12 rounded-xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold text-foreground">Ready to protect your event?</h3>
              <Button className="mt-4 bg-cta text-cta-foreground hover:bg-cta/90 rounded-full px-8" asChild>
                <Link to="/get-quote">Get Quote</Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const BlogsPage = () => {
  const [query, setQuery] = useState("");
  const posts = useMemo(
    () => blogPosts.filter((p) => p.title.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-16 pb-10">
          <Container className="max-w-[1030px]">
            <h1 className="text-center text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground md:text-[65px]">
              Our Blogs
            </h1>
            <form className="mx-auto mt-14 flex max-w-[750px]" onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search blogs..."
                className="h-[60px] flex-1 rounded-l-[10px] border border-border bg-card px-6 text-base text-foreground outline-none"
              />
              <button type="submit" className="h-[60px] w-[180px] rounded-r-[10px] bg-primary text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
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
                  <Link to={`/blogs/${post.slug}`} key={post.id} className="grid gap-8 md:grid-cols-[200px_minmax(0,1fr)] group">
                    <img src={post.image} alt={post.title} className="h-[190px] w-full rounded-[14px] object-cover md:w-[200px]" />
                    <div>
                      <h2 className="text-[23px] font-bold leading-[1.3] text-foreground group-hover:text-primary transition-colors">{post.title}</h2>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                      <div className="mt-6 flex items-center gap-5">
                        <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">OD</div>
                        <div>
                          <p className="text-sm font-semibold leading-none text-foreground">By {post.author}</p>
                          <p className="mt-2 text-[13px] text-muted-foreground">{post.date}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <aside className="space-y-10">
                <section>
                  <h3 className="text-2xl font-extrabold text-foreground">Newsletter</h3>
                  <input type="email" placeholder="Email" className="mt-6 h-[50px] w-full rounded-[10px] border border-border bg-card px-5 text-base text-foreground outline-none" />
                  <button className="mt-5 h-12 min-w-[130px] rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Subscribe</button>
                </section>
                <section>
                  <h3 className="text-2xl font-extrabold text-foreground">About</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">One Day Event provides affordable event insurance for weddings, parties, concerts, and more. Get your certificate of insurance in minutes.</p>
                  <Link to="/about-us" className="mt-2 inline-block text-sm font-bold text-foreground hover:underline">Read More</Link>
                </section>
                <Link to="/get-quote" className="inline-flex h-12 min-w-[130px] items-center justify-center rounded-full bg-cta px-8 text-base font-semibold text-cta-foreground transition-colors hover:bg-cta/90">
                  Get Quote
                </Link>
              </aside>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export { BlogDetailPage };
export default BlogsPage;
