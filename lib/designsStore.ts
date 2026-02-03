export type Design = {
  id: string;
  title: string;
  slug: string;
  description: string;
  blog?: string; // New field for blog content
  imageUrl?: string;
  images?: string[];
  createdAt?: string;
};

// 🔴 API INTEGRATION POINT #1: GET ALL DESIGNS
// Replace this function with API call to fetch designs from Supabase
export async function getDesigns(): Promise<Design[]> {
  try {
    const response = await fetch('/api/designs');
    const data = await response.json();
    return data.designs || [];
  } catch (error) {
    console.error('Error fetching designs:', error);
    return [];
  }
}

// 🔴 API INTEGRATION POINT #2: CREATE NEW DESIGN
// This is already connected to the modal - just needs backend API
export async function saveDesign(design: Omit<Design, 'id' | 'createdAt'>): Promise<Design> {
  try {
    // ⚠️ REPLACE THIS WITH YOUR API CALL
    // Example:
    // const response = await fetch('/api/designs', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(design)
    // });
    // const data = await response.json();
    // return data.design;
    
    // Temporary: Save to localStorage
    const designs = await getDesigns();
    const newDesign: Design = {
      ...design,
      id: `design-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };
    
    designs.unshift(newDesign);
    if (typeof window !== 'undefined') {
      localStorage.setItem('designs', JSON.stringify(designs));
      window.dispatchEvent(new CustomEvent('designsUpdated'));
    }
    
    return newDesign;
  } catch (error) {
    console.error('Error saving design:', error);
    throw new Error('Failed to save design');
  }
}

// 🔴 API INTEGRATION POINT #3: UPDATE DESIGN
export async function updateDesign(id: string, updates: Partial<Design>): Promise<Design | null> {
  try {
    // ⚠️ REPLACE THIS WITH YOUR API CALL
    // Example:
    // const response = await fetch(`/api/designs/${id}`, {
    //   method: 'PATCH',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(updates)
    // });
    // const data = await response.json();
    // return data.design;
    
    const designs = await getDesigns();
    const index = designs.findIndex(d => d.id === id);
    
    if (index === -1) return null;
    
    designs[index] = { ...designs[index], ...updates };
    if (typeof window !== 'undefined') {
      localStorage.setItem('designs', JSON.stringify(designs));
      window.dispatchEvent(new CustomEvent('designsUpdated'));
    }
    
    return designs[index];
  } catch (error) {
    console.error('Error updating design:', error);
    return null;
  }
}

// 🔴 API INTEGRATION POINT #4: DELETE DESIGN
export async function deleteDesign(id: string): Promise<boolean> {
  try {
    // ⚠️ REPLACE THIS WITH YOUR API CALL
    // Example:
    // const response = await fetch(`/api/designs/${id}`, {
    //   method: 'DELETE'
    // });
    // return response.ok;
    
    const designs = await getDesigns();
    const filtered = designs.filter(d => d.id !== id);
    
    if (filtered.length === designs.length) return false;
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('designs', JSON.stringify(filtered));
      window.dispatchEvent(new CustomEvent('designsUpdated'));
    }
    
    return true;
  } catch (error) {
    console.error('Error deleting design:', error);
    return false;
  }
}

// 🔴 API INTEGRATION POINT #5: GET SINGLE DESIGN BY ID
export async function getDesignById(slug: string): Promise<Design | null> {
  try {
    // ⚠️ REPLACE THIS WITH YOUR API CALL
    // Example:
    // const response = await fetch(`/api/designs/${id}`);
    // const data = await response.json();
    // return data.design || null;
    
    const designs = await getDesigns();
    return designs.find(d => d.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching design:', error);
    return null;
  }
}