export type Design = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  images?: string[];
};

export const mockDesigns: Design[] = [
  {
    id: "1",
    title: "Creative Landing Page",
    description: "A vibrant, modern landing page for startups with bold typography and engaging visuals designed to convert visitors into customers.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://plus.unsplash.com/premium_photo-1661881801573-6506e682cbd6?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664298145390-fa6018ad4093?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661876775049-d56ae3c0a677?q=80&w=1155&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: "2",
    title: "Dark Portfolio Grid",
    description: "Portfolio grid layout with dark mode.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1664272436668-78437b92929e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://plus.unsplash.com/premium_photo-1664272436480-83dab45291ee?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1700595208280-f1242f2dc67e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1761839258575-038fef381ee7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    ],
  },
  {
    id: "3",
    title: "Minimal Blog",
    description: "A clean, minimalist blog layout.",
    imageUrl: "https://images.unsplash.com/photo-1761839257658-23502c67f6d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://source.unsplash.com/800x600/?design,blog,1",
      "https://source.unsplash.com/800x600/?design,blog,2",
      "https://source.unsplash.com/800x600/?design,blog,3",
    ],
  },
  {
    id: "4",
    title: "Ecommerce Shop",
    description: "Modern UI for online shop.",
    imageUrl: "https://images.unsplash.com/photo-1769251845951-c271e703f047?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    images: [
      "https://source.unsplash.com/800x600/?design,shop,1",
      "https://source.unsplash.com/800x600/?design,shop,2",
      "https://source.unsplash.com/800x600/?design,shop,3",
    ],
  },
  {
    id: "5",
    title: "Dashboard Analytics",
    description: "Dashboard page with interactive charts.",
    imageUrl: "https://images.unsplash.com/photo-1769251301947-17be803ef470?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    images: [
      "https://source.unsplash.com/800x600/?design,dashboard,1",
      "https://source.unsplash.com/800x600/?design,dashboard,2",
      "https://source.unsplash.com/800x600/?design,dashboard,3",
    ],
  },
  {
    id: "6",
    title: "Booking System",
    description: "Beautiful booking flow design.",
    imageUrl: "https://images.unsplash.com/photo-1769272382095-6baeab7e3b59?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://source.unsplash.com/800x600/?design,booking,1",
      "https://source.unsplash.com/800x600/?design,booking,2",
      "https://source.unsplash.com/800x600/?design,booking,3",
    ],
  },
];