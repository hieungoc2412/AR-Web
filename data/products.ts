
import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'astronomy-mirror',
    name: 'Stellar Reflection Mirror',
    price: '₫15,000,000',
    description: 'A sleek, modern mirror that brings the cosmos into your room. Its minimalist design is perfect for contemporary spaces.',
    imageUrl: 'https://picsum.photos/seed/mirror1/800/600',
    // Placeholder model from Google's <model-viewer> examples
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
    iosModelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.usdz',
  },
  {
    id: 'vintage-mirror',
    name: 'Classic Ornate Mirror',
    price: '₫12,500,000',
    description: 'An elegant, vintage-inspired mirror with intricate details. Adds a touch of classic charm and sophistication to any wall.',
    imageUrl: 'https://picsum.photos/seed/mirror2/800/600',
    // Placeholder model from Google's <model-viewer> examples
    modelUrl: 'https://modelviewer.dev/shared-assets/models/vintage_desk.glb',
    iosModelUrl: '', // No specific iOS model for this example
  },
];
