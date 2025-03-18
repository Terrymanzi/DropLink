export default function Products() {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Product Name</h2>
            <p className="text-gray-700">Description of the product.</p>
            <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }