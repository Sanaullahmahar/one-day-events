import { Link } from "react-router-dom";
import type { BlogPost } from "@/types";

const BlogCard = ({ slug, image, title, excerpt, author, date }: BlogPost) => (
  <Link to={`/blogs/${slug}`} className="ui-card overflow-hidden transition-shadow hover:shadow-md block">
    <div className="aspect-video overflow-hidden">
      <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
    </div>
    <div className="p-6">
      <h3 className="mb-3 text-xl font-semibold leading-7 tracking-[-0.02em] text-foreground">{title}</h3>
      <p className="ui-body-sm mb-5">{excerpt}</p>
      <div className="text-sm text-muted-foreground">
        <span>By {author}</span>
        <span className="mx-2">·</span>
        <span>{date}</span>
      </div>
    </div>
  </Link>
);

export default BlogCard;
