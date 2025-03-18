export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">About Droplink</h3>
              <p className="text-gray-400">
                Droplink is your one-stop solution for drop-shipping in Rwanda. We connect wholesalers, drop-shippers, and customers seamlessly.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/store" className="text-gray-400 hover:text-blue-500">
                    Store
                  </a>
                </li>
                <li>
                  <a href="/cart" className="text-gray-400 hover:text-blue-500">
                    Cart
                  </a>
                </li>
                <li>
                  <a href="/order-tracking" className="text-gray-400 hover:text-blue-500">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="/ratings" className="text-gray-400 hover:text-blue-500">
                    Ratings
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400">Email: support@droplink.com</p>
              <p className="text-gray-400">Phone: +250 788 123 456</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            &copy; 2023 Droplink. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }