import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Ratings() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Ratings & Reviews</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Leave a Review</h2>
          <textarea
            placeholder="Write your review here..."
            className="w-full p-2 border rounded mb-4"
            rows="4"
          />
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Submit Review
          </button>
        </div>
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <p className="text-gray-700">"Great product! Highly recommend."</p>
              <p className="text-sm text-gray-500">- John Doe</p>
            </div>
            {/* Repeat for more reviews */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}