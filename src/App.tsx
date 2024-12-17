import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FeaturedProducts from './components/FeaturedProducts';
import SupplierSection from './components/SupplierSection';
import MarketingSection from './components/MarketingSection';
import PricingPlans from './components/PricingPlans';
import SellerLogin from './components/auth/SellerLogin';
import SellerRegistration from './components/seller/SellerRegistration';
import SellerDashboard from './components/seller/SellerDashboard';
import ProductManagement from './components/seller/ProductManagement';
import PaymentPortal from './components/payment/PaymentPortal';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <main>
                  <Hero />
                  <CategoryGrid />
                  <FeaturedProducts />
                  <MarketingSection />
                  <PricingPlans />
                  <SupplierSection />
                </main>
                <footer className="bg-gray-900 text-white py-8">
                  <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 BharatFabrics. All rights reserved.</p>
                  </div>
                </footer>
              </>
            }
          />

          {/* Auth Routes */}
          <Route path="/seller/login" element={<SellerLogin />} />
          <Route path="/seller/register" element={<SellerRegistration />} />
          <Route path="/seller/subscribe" element={<PaymentPortal />} />

          {/* Protected Seller Routes */}
          <Route path="/seller/dashboard" element={<SellerDashboard />} />
          <Route path="/seller/products" element={<ProductManagement />} />
        </Routes>
      </div>
    </Router>
  );
}