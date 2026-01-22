import { CategoryPage } from "@/app/components/CategoryPage";

const sunProducts = [
  {
    id: 201,
    name: 'Riviera Oversized',
    collection: 'Sun Series',
    price: '$355',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwb24lMjBtYXJibGV8ZW58MXx8fHwxNzY5MDY4NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 202,
    name: 'The Aviator Gold',
    collection: 'Classic Series',
    price: '$315',
    image: 'https://images.unsplash.com/photo-1641977937814-160ab3062a23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdW5nbGFzc2VzJTIwZ29sZCUyMGRldGFpbHxlbnwxfHx8fDE3NjkwNjkyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 203,
    name: 'Beachside Wayfarer',
    collection: 'Coast Collection',
    price: '$285',
    image: 'https://images.unsplash.com/photo-1566661983245-a512ad51bf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMGJlYWNofGVufDF8fHx8MTc2OTA2OTI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 204,
    name: 'Modern Cat-Eye',
    collection: 'Urban Series',
    price: '$295',
    image: 'https://images.unsplash.com/photo-1760722640035-2080c82d3f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwc3VuZ2xhc3NlcyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NjkwNjg4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 205,
    name: 'Geometric Bold',
    collection: 'Statement Series',
    price: '$345',
    image: 'https://images.unsplash.com/photo-1761845687464-0df22001a80c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHN1bmdsYXNzZXMlMjBwcm9kdWN0JTIwc2hvdHxlbnwxfHx8fDE3NjkwNjg4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 206,
    name: 'Vintage Havana',
    collection: 'Classic Series',
    price: '$305',
    image: 'https://images.unsplash.com/photo-1764778055595-b641b067ab40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdW5nbGFzc2VzJTIwcmV0YWlsJTIwZGlzcGxheXxlbnwxfHx8fDE3NjkwNjg4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  }
];

export function SunPage() {
  return (
    <CategoryPage 
      title="Sun Protection" 
      description="Elevate your style while protecting your eyes. Our sunglasses collection features UV-protective lenses in frames designed to make a statement under the sun."
      products={sunProducts}
    />
  );
}
