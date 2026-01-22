import { CategoryPage } from "@/app/components/CategoryPage";

const limitedProducts = [
  {
    id: 301,
    name: 'Avant-Garde Red',
    collection: 'Artist Series 01',
    price: '$550',
    image: 'https://images.unsplash.com/photo-1761882469824-f77e7c07e85a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdmFudCUyMGdhcmRlJTIwZXlld2VhciUyMGFydGlzdGljfGVufDF8fHx8MTc2OTA2OTI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 302,
    name: 'Sculptural Acetate',
    collection: 'Limited Edition',
    price: '$495',
    image: 'https://images.unsplash.com/photo-1764778055595-b641b067ab40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBleWV3ZWFyJTIwZGlzcGxheXxlbnwxfHx8fDE3NjkwNjg4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 303,
    name: 'Golden Era',
    collection: 'Anniversary Collection',
    price: '$625',
    image: 'https://images.unsplash.com/photo-1641977937814-160ab3062a23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdW5nbGFzc2VzJTIwZ29sZCUyMGRldGFpbHxlbnwxfHx8fDE3NjkwNjkyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 304,
    name: 'Architectural Black',
    collection: 'Designer Collaboration',
    price: '$525',
    image: 'https://images.unsplash.com/photo-1761845687464-0df22001a80c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHN1bmdsYXNzZXMlMjBwcm9kdWN0JTIwc2hvdHxlbnwxfHx8fDE3NjkwNjg4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  }
];

export function LimitedPage() {
  return (
    <CategoryPage 
      title="Limited Edition" 
      description="Exclusive designs produced in small batches. For the collector who values rarity, artistic expression, and uncompromising craftsmanship."
      products={limitedProducts}
    />
  );
}
