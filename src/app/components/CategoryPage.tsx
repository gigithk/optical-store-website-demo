import React from 'react';
import { motion } from 'motion/react';
import { Filter, ChevronDown, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface Product {
  id: number;
  name: string;
  collection: string;
  price: string;
  image: string;
}

interface CategoryPageProps {
  title: string;
  description: string;
  products: Product[];
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ title, description, products }) => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#f8f9fa] py-16 md:py-24 mb-12">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-sm text-[#2d3436]/60 hover:text-[#1a2744] mb-8 transition-colors group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-[#c9a959] uppercase tracking-widest text-xs font-semibold mb-3 block">
              Collection
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-[#1a2744] mb-6">
              {title}
            </h1>
            <p className="text-[#2d3436]/70 text-lg font-light leading-relaxed max-w-2xl">
              {description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24">
        {/* Filters Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-6 border-b border-gray-100">
          <div className="flex items-center space-x-2 text-[#1a2744] font-medium mb-4 md:mb-0">
            <span className="text-sm text-gray-500">{products.length} Products</span>
          </div>
          
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 hover:border-[#1a2744] transition-colors text-sm">
              <Filter size={16} />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 hover:border-[#1a2744] transition-colors text-sm">
              <span>Sort By</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f8f9fa] mb-6">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                
                {/* Quick Add Button */}
                <button className="absolute bottom-0 left-0 right-0 py-4 bg-white/95 backdrop-blur-sm text-[#1a2744] text-sm font-medium uppercase tracking-wider translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-gray-100">
                  Quick View
                </button>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-serif text-[#1a2744] mb-1 group-hover:text-[#c9a959] transition-colors">{product.name}</h3>
                  <p className="text-sm text-[#2d3436]/60">{product.collection}</p>
                </div>
                <span className="text-[#1a2744] font-medium">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
