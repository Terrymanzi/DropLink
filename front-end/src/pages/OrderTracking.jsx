import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OrderTracking() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Order Tracking</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Order #12345</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-700">Order Placed</p>
              <p className="text-green-500">Completed</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-700">Shipped</p>
              <p className="text-yellow-500">In Progress</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-700">Delivered</p>
              <p className="text-red-500">Pending</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}