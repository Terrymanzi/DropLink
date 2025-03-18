import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AdminPanel() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Users</h2>
            <p className="text-gray-700">Manage users and roles.</p>
            <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full">
              View Users
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Transactions</h2>
            <p className="text-gray-700">Monitor all transactions.</p>
            <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full">
              View Transactions
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">System Performance</h2>
            <p className="text-gray-700">Check system health and logs.</p>
            <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full">
              View Performance
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}