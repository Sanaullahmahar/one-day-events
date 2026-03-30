import Container from "@/components/layout/Container";
import BlogCard from "@/components/ui/BlogCard";
import { blogPosts } from "@/data/content/blogs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogSection = () => (
  <section className="ui-section bg-muted">
    <Container>
      <div className="mb-12 flex items-center justify-between gap-6">
        <h2 className="ui-h3">Event Insurance Content</h2>
        <Button variant="default" size="sm" asChild>
          <Link to="/blogs">See More</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.slice(0, 3).map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </Container>
  </section>
);

export default BlogSection;
