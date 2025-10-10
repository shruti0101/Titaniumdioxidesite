export const dynamic = "force-dynamic";

import { categories } from "@/Data";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";

// Function to fetch all blogs from Sanity
async function getAllBlogs() {
  const query = groq`*[_type=="blog"]{slug, date}`;
  return client.fetch(query);
}

export async function GET() {
  const baseUrl = "https://titaniumdioxidewholesaler.com/"; 

  // Flatten all products
  const allProducts = categories.flatMap((c) => c.products);

  // Fetch blogs
  const blogs = await getAllBlogs();

  // Homepage
  const homepage = `
    <url>
      <loc>${baseUrl}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
  `;

  // Categories
  const categoryUrls = categories
    .map(
      (cat) => `
      <url>
        <loc>${baseUrl}/category/${cat.id}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
    )
    .join("");

  // Products
  const productUrls = allProducts
    .map(
      (product) => `
      <url>
        <loc>${baseUrl}/products/${product.id}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
    `
    )
    .join("");

  // Blogs
  const blogUrls = blogs
    .map(
      (blog) => `
      <url>
        <loc>${baseUrl}/blog/${blog.slug.current}</loc>
        <lastmod>${
          blog.date ? new Date(blog.date).toISOString() : new Date().toISOString()
        }</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
      </url>
    `
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${homepage}
    ${categoryUrls}
    ${productUrls}
    ${blogUrls}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
