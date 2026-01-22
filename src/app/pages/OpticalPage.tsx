import { CategoryPage } from "@/app/components/CategoryPage";

const opticalProducts = [
  {
    id: 101,
    name: 'The Architect',
    collection: 'Optical Series',
    price: '$345',
    image: 'https://images.unsplash.com/photo-1752761437644-ffc8a6af102d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGV5ZSUyMGdsYXNzZXMlMjBvbiUyMHRhYmxlfGVufDF8fHx8MTc2OTA2ODU1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 102,
    name: 'Modernist Round',
    collection: 'Optical Series',
    price: '$295',
    image: 'https://images.unsplash.com/photo-1722924908364-2a8ea385aab1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBleWVnbGFzc2VzJTIwb24lMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY5MDY4ODExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 103,
    name: 'Tortoise Shell Classic',
    collection: 'Heritage Series',
    price: '$315',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwb24lMjBtYXJibGV8ZW58MXx8fHwxNzY5MDY4NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 104,
    name: 'Minimalist Titanium',
    collection: 'Air Collection',
    price: '$385',
    image: 'https://images.unsplash.com/photo-1712926097966-b86f0d8c131d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZ2xhc3NlcyUyMHNoZWxmfGVufDF8fHx8MTc2OTA2OTI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 105,
    name: 'Clear Acetate',
    collection: 'Modern Series',
    price: '$275',
    image: 'https://images.unsplash.com/photo-1764740124280-67e0a4ad2bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZ2xhc3NlcyUyMHN0dWRpbyUyMHByb2R1Y3QlMjBzaG90fGVufDF8fHx8MTc2OTA2OTI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 106,
    name: 'Executive Half-Rim',
    collection: 'Professional',
    price: '$325',
    image: 'https://images.unsplash.com/photo-1758600588319-fa4097ee5208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGdsYXNzZXN8ZW58MXx8fHwxNzY5MDY4ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  }
];

export function OpticalPage() {
  return (
    <CategoryPage 
      title="Optical Frames" 
      description="Discover our collection of handcrafted optical frames, blending timeless design with modern comfort. Each pair is fitted with premium lenses tailored to your prescription."
      products={opticalProducts}
    />
  );
}
