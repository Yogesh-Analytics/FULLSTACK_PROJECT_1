import { ContactInfo, NavItem, ServiceItem, StatItem } from './types';

export const COMPANY_NAME = "ARKIN SPACES";

export const CONTACT_DETAILS: ContactInfo = {
  email: "office@arkinspaces.com",
  location: "Basaveshwaranager, Bangalore",
  phone: "8050342197"
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Interior & Fit Outs",
    description: "Bespoke interior execution blending functionality with premium aesthetics.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Civil Works",
    description: "Comprehensive civil engineering solutions ensuring structural integrity and precision execution.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Project Management Consultancy",
    description: "End-to-end execution ensuring timely delivery within budget and scope.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop"
  }
];

export const STATS: StatItem[] = [
  { value: "150+", label: "Projects Completed" },
  { value: "100+", label: "Happy Clients" }
];