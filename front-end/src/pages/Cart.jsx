import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Product Name</h2>
            <p className="text-lg font-semibold">$20.00</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-700">Quantity: 1</p>
            <button className="text-red-500 hover:text-red-700">Remove</button>
          </div>
        </div>
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-lg font-semibold">$20.00</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-700">Shipping</p>
            <p className="text-lg font-semibold">$5.00</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700">Total</p>
            <p className="text-lg font-semibold">$25.00</p>
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}