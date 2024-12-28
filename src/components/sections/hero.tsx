import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 hero-pattern"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-float">
            Welcome to{" "}
            <span className="text-primary">
              Tiny<span className="text-accent">Trove</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover amazing deals on new and pre-loved baby products from your local community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Shopping
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              List an Item
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}