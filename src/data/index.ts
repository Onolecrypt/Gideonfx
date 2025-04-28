import { NavItem, Service, Testimonial, SocialLink, Book, OtherProduct } from '../types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'books', label: 'Books', href: '#books' },
  { id: 'others', label: 'Other Resources', href: '#others' },
  { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Business Consulting',
    description: 'Strategic guidance to help your business grow and scale effectively in today\'s competitive market.',
    icon: 'Briefcase',
  },
  {
    id: 2,
    title: 'Online Courses',
    description: 'Comprehensive digital courses designed to teach you practical skills for success in business and life.',
    icon: 'GraduationCap',
  },
  {
    id: 3,
    title: 'Mentorship Program',
    description: 'One-on-one guidance to help you navigate challenges and accelerate your personal and professional growth.',
    icon: 'Users',
  },
  {
    id: 4,
    title: 'Investment Strategy',
    description: 'Learn proven investment frameworks to build wealth and achieve financial independence.',
    icon: 'TrendingUp',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechVision',
    content: 'Working with John transformed our business strategy. His insights helped us double our revenue in just 6 months.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Entrepreneur',
    content: 'The mentorship program was life-changing. I learned more in 3 months than I did in 4 years of college.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Marketing Director',
    content: 'The strategies I learned helped me scale my online business from $10K to $100K per month in just one year.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

export const socialLinks: SocialLink[] = [
  { id: 'instagram', name: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
  { id: 'youtube', name: 'YouTube', url: 'https://youtube.com', icon: 'Youtube' },
  { id: 'twitter', name: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
  { id: 'facebook', name: 'Facebook', url: 'https://facebook.com', icon: 'Facebook' },
  { id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
];

export const books: Book[] = [
  {
    id: 1,
    title: 'The Business Mindset',
    description: 'Learn the mental frameworks that separate successful entrepreneurs from the rest.',
    imageUrl: 'https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 2,
    title: 'Wealth Strategies',
    description: 'Practical approaches to building multiple streams of income and achieving financial freedom.',
    imageUrl: 'https://images.pexels.com/photos/5980800/pexels-photo-5980800.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 3,
    title: 'Social Media Mastery',
    description: 'How to leverage social platforms to build your personal brand and attract opportunities.',
    imageUrl: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export const otherProducts: OtherProduct[] = [
  {
    id: 1,
    title: 'Financial Freedom Masterclass',
    description: 'A comprehensive video course teaching you how to build wealth through smart investing and passive income streams.',
    price: '$997',
    features: [
      '50+ HD video lessons',
      'Investment strategy templates',
      'Monthly live Q&A sessions',
      'Private community access',
      'Lifetime updates'
    ],
    imageUrl: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Course'
  },
  {
    id: 2,
    title: 'Wealth Building Blueprint',
    description: 'A step-by-step roadmap to creating multiple income streams and achieving financial independence.',
    price: '$497',
    features: [
      'Detailed action plans',
      'Income stream calculator',
      'Risk assessment tools',
      'Investment checklists',
      'Expert interviews'
    ],
    imageUrl: 'https://images.pexels.com/photos/7567558/pexels-photo-7567558.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Digital Product'
  },
  {
    id: 3,
    title: 'Stock Market Success System',
    description: 'Learn my proven system for consistently profitable stock market investing.',
    price: '$1,497',
    features: [
      'Technical analysis training',
      'Stock screening tools',
      'Risk management strategies',
      'Portfolio optimization guide',
      'Trade alert system'
    ],
    imageUrl: 'https://images.pexels.com/photos/7567441/pexels-photo-7567441.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Trading System'
  }
];