import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: number;
  condition: "New" | "Used";
  location: string;
  type: "Sale" | "Free" | "Wishlist";
  image: string;
}

export function ProductCard({ title, price, condition, location, type, image }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
          <Badge
            variant="secondary"
            className={`${
              condition === "New" ? "bg-secondary" : "bg-accent"
            } text-white`}
          >
            {condition}
          </Badge>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500 mt-2">
          <MapPin size={14} />
          <span>{location}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="font-bold text-lg">
          {type === "Free" ? "Free" : `$${price.toFixed(2)}`}
        </span>
        <Badge variant="outline" className="capitalize">
          {type}
        </Badge>
      </CardFooter>
    </Card>
  );
}