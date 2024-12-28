import { Hero } from "@/components/sections/hero";
import { ProductCard } from "@/components/ui/product-card";
import { FilterDropdown } from "@/components/ui/filter-dropdown";
import { SearchBar } from "@/components/ui/search-bar";

// Sample product data
const products = [
  {
    title: "Baby Einstein Activity Jumper",
    price: 89.99,
    condition: "New",
    location: "San Francisco, CA",
    type: "Sale",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
  },
  {
    title: "Organic Cotton Baby Blanket",
    price: 24.99,
    condition: "New",
    location: "Los Angeles, CA",
    type: "Sale",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
  },
  {
    title: "Baby Carrier - Ergobaby 360",
    price: 0,
    condition: "Used",
    location: "Seattle, WA",
    type: "Free",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
  },
  {
    title: "Nursery Rocking Chair",
    price: 149.99,
    condition: "Used",
    location: "Portland, OR",
    type: "Sale",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  },
] as const;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <SearchBar />
            <FilterDropdown />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;