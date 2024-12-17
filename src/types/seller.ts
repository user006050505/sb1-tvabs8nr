import { z } from 'zod';

export const businessCategories = [
  'Manufacturer',
  'Wholesaler',
  'Trader',
  'Exporter',
  'Retailer',
] as const;

export const productCategories = [
  'Cotton Fabrics',
  'Silk Materials',
  'Wool & Blends',
  'Synthetic Fabrics',
  'Traditional Textiles',
  'Denim',
  'Linen',
  'Embroidered Fabrics',
  'Other',
] as const;

export const sellerSchema = z.object({
  // Basic Information
  businessName: z.string().min(3, 'Business name must be at least 3 characters'),
  businessType: z.enum(businessCategories),
  ownerName: z.string().min(2, 'Owner name is required'),
  
  // Legal Information
  gstNumber: z.string().regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, 'Invalid GST number'),
  panNumber: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN number'),
  
  // Contact Information
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid phone number'),
  whatsapp: z.string().regex(/^[6-9]\d{9}$/, 'Invalid WhatsApp number').optional(),
  
  // Address
  address: z.object({
    street: z.string().min(5, 'Street address is required'),
    city: z.string().min(2, 'City is required'),
    state: z.string().min(2, 'State is required'),
    pincode: z.string().regex(/^[1-9][0-9]{5}$/, 'Invalid pincode'),
  }),
  
  // Business Details
  businessDetails: z.object({
    yearEstablished: z.number()
      .min(1900, 'Invalid year')
      .max(new Date().getFullYear(), 'Year cannot be in the future'),
    employeeCount: z.number().min(1, 'Must have at least 1 employee'),
    annualTurnover: z.enum([
      'Under ₹10 Lakhs',
      '₹10-50 Lakhs',
      '₹50 Lakhs - 2 Crores',
      '₹2-10 Crores',
      'Above ₹10 Crores',
    ]),
    exportExperience: z.boolean(),
  }),
  
  // Product Information
  products: z.object({
    categories: z.array(z.enum(productCategories))
      .min(1, 'Select at least one product category'),
    majorProducts: z.string()
      .min(10, 'Please describe your major products')
      .max(500, 'Description too long'),
    monthlyCapacity: z.string()
      .min(2, 'Please specify monthly capacity'),
  }),
  
  // Additional Information
  certifications: z.array(z.string()).optional(),
  website: z.string().url().optional(),
  socialMedia: z.object({
    facebook: z.string().url().optional(),
    instagram: z.string().url().optional(),
    linkedin: z.string().url().optional(),
  }).optional(),
});

export type Seller = z.infer<typeof sellerSchema>;