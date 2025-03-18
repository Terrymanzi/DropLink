import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Store() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Store Catalog</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-bold">Product Name</h2>
            <p className="text-gray-700">Description of the product.</p>
            <p className="text-lg font-semibold mt-2">$20.00</p>
            <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full">
              Add to Store
            </button>
          </div>
          {/* Repeat for more products */}
        </div>
      </div>
      <Footer />
    </div>
  );
}