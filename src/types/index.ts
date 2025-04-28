export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface Book {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface OtherProduct {
  id: number;
  title: string;
  description: string;
  price: string;
  features: string[];
  imageUrl: string;
  category: string;
}