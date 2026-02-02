export type Design = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  images?: string[];
  createdAt?: string;
};

// Initial mock data
const INITIAL_DESIGNS: Design[] = [
  {
    id: "1",
    title: "Creative Landing Page",
    description: "A vibrant, modern landing page for startups with bold typography and engaging visuals designed to convert visitors into customers.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=1086&auto=format&fit=crop",
    images: [
      "https://plus.unsplash.com/premium_photo-1661881801573-6506e682cbd6?q=80&w=1129&auto=format&fit=crop",
      "https://plus.unsplash.com/premium_photo-1664298145390-fa6018ad4093?q=80&w=1086&auto=format&fit=crop",
      "https://plus.unsplash.com/premium_photo-1661876775049-d56ae3c0a677?q=80&w=1155&auto=format&fit=crop",
    ],
    createdAt: "2026-01-15T10:00:00Z",
  },
  {
    id: "2",
    title: "Dark Portfolio Grid",
    description: "Portfolio grid layout with dark mode.",
    imageUrl: "https://source.unsplash.com/800x600/?design,portfolio",
    images: [
      "https://source.unsplash.com/800x600/?design,portfolio,1",
      "https://source.unsplash.com/800x600/?design,portfolio,2",
    ],
    createdAt: "2026-01-14T10:00:00Z",
  },
  {
    id: "3",
    title: "Minimal Blog",
    description: "A clean, minimalist blog layout.",
    imageUrl: "https://source.unsplash.com/800x600/?design,blog",
    images: [
      "https://source.unsplash.com/800x600/?design,blog,1",
      "https://source.unsplash.com/800x600/?design,blog,2",
    ],
    createdAt: "2026-01-13T10:00:00Z",
  },
];

// Generate unique ID
function generateId(): string {
  return `design-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Get designs from localStorage or use mock data as fallback
export function getDesigns(): Design[] {
  if (typeof window === 'undefined') return INITIAL_DESIGNS;
  
  const stored = localStorage.getItem('designs');
  if (stored) {
    try {
      const designs = JSON.parse(stored);
      // Sort by createdAt, newest first
      return designs.sort((a: Design, b: Design) => {
        const dateA = new Date(a.createdAt || 0).getTime();
        const dateB = new Date(b.createdAt || 0).getTime();
        return dateB - dateA;
      });
    } catch {
      return INITIAL_DESIGNS;
    }
  }
  
  // Initialize with mock data
  localStorage.setItem('designs', JSON.stringify(INITIAL_DESIGNS));
  return INITIAL_DESIGNS;
}

// Save a new design
export function saveDesign(design: Omit<Design, 'id' | 'createdAt'>): Design {
  const designs = getDesigns();
  const newDesign: Design = {
    ...design,
    id: generateId(),
    createdAt: new Date().toISOString(),
  };
  
  designs.unshift(newDesign); // Add to beginning
  localStorage.setItem('designs', JSON.stringify(designs));
  
  // Dispatch custom event for real-time updates
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('designsUpdated'));
  }
  
  return newDesign;
}

// Update an existing design
export function updateDesign(id: string, updates: Partial<Design>): Design | null {
  const designs = getDesigns();
  const index = designs.findIndex(d => d.id === id);
  
  if (index === -1) return null;
  
  designs[index] = { ...designs[index], ...updates };
  localStorage.setItem('designs', JSON.stringify(designs));
  
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('designsUpdated'));
  }
  
  return designs[index];
}

// Delete a design
export function deleteDesign(id: string): boolean {
  const designs = getDesigns();
  const filtered = designs.filter(d => d.id !== id);
  
  if (filtered.length === designs.length) return false;
  
  localStorage.setItem('designs', JSON.stringify(filtered));
  
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('designsUpdated'));
  }
  
  return true;
}

// Get single design by ID
export function getDesignById(id: string): Design | null {
  const designs = getDesigns();
  return designs.find(d => d.id === id) || null;
}