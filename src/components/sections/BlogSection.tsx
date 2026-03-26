import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/ui/BlogCard";
import { blogPosts } from "@/data/blogs";
import { Button } from "@/components/ui/button";
import blogWedding from "@/assets/blog-wedding.jpg";
import blogConcert from "@/assets/blog-concert.jpg";
import blogTips from "@/assets/blog-tips.jpg";

const blogImages = [blogWedding, blogConcert, blogTips];

const BlogSection = () => (
  <section className="ui-section bg-muted">
    <Container>
      <div className="mb-12 flex items-center justify-between gap-6">
        <h2 className="ui-h3">
          Event Insurance Content
        </h2>
        <Button variant="default" size="sm">
          See More
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post, i) => (
          <BlogCard key={post.id} {...post} imageSrc={blogImages[i]} />
        ))}
      </div>
    </Container>
  </section>
);

export default BlogSection;
