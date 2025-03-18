import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center py-8">Welcome to Droplink</h1>
        <p className="text-center text-gray-700">
          Your one-stop solution for drop-shipping in Rwanda.
        </p>
      </div>
      <Footer />
    </div>
  );
}