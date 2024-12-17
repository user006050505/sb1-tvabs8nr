import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutGrid, Package, Users, BarChart3, Settings } from 'lucide-react';
import { Button } from '../Button';

export default function SellerDashboard() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutGrid, label: 'Dashboard', path: '/seller/dashboard' },
    { icon: Package, label: 'Products', path: '/seller/products' },
    { icon: Users, label: 'Customers', path: '/seller/customers' },
    { icon: BarChart3, label: 'Analytics', path: '/seller/analytics' },
    { icon: Settings, label: 'Settings', path: '/seller/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside className="bg-white border-r border-gray-200 p-4">
          <div className="space-y-4">
            {menuItems.map((item) => (
              <Button
                key={item.path}
                variant="outline"
                className="w-full justify-start text-left"
                onClick={() => navigate(item.path)}
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Stats Cards */}
            {['Total Orders', 'Revenue', 'Products', 'Customers'].map((stat) => (
              <div key={stat} className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-sm text-gray-500">{stat}</h3>
                <p className="text-2xl font-semibold mt-2">0</p>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <p className="text-gray-500 text-sm">No recent activity</p>
          </div>
        </main>
      </div>
    </div>
  );
}