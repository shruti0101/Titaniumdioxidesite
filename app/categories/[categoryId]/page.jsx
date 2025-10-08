import { categories } from "@/Data";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
export default function CategoryPage({ params }) {
  const { categoryId } = params;
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <h2 className="text-center text-red-500 mt-10">Category not found</h2>
    );
  }

  return (
    <>
      {/* Hero Banner */}
      <section
        style={{ backgroundImage: "url('https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759831101/banner_lklwmi.webp')" }}
        className="w-full bg-cover bg-center h-[50vh] md:h-[90vh] relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7C600]/30 via-[#00537B]/50 to-[#F7C600]/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="max-w-4xl text-center rounded-md text-[#B57E1F] bg-white text-2xl md:text-5xl font-bold z-10 p-2">
            {category.name}
          </h2>
        </div>
      </section>

      {/* Products Grid */}
      <div className="p-10 max-w-7xl mx-auto">
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {category.products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="border bg-[#ad7920]/20 rounded-lg shadow-md  hover:shadow-lg transition"
            >
              <div className=" relative rounded-md overflow-hidden">

                 <div className="absolute top-3 right-3 bg-[#F8CC19] p-2 rounded-full transition-opacity group-hover:opacity-100 opacity-90">
                                <ArrowUpRight className="w-4 h-4 text-white" />
                              </div>
                <Image
                  src={product.image[0]?.src || "/placeholder.png"}
                  alt={product.image[0]?.alt || product.name}
                  title={product.name}
                  width={300}
                  height={300}
                  className="object-contain"  
                  unoptimized
                />
              </div>
              <h2 className="mt-3 p-2 md:text-lg font-semibold">{product.name}</h2>
             
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
