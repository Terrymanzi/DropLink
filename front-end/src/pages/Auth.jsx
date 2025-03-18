export default function Auth() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6">Login / Signup</h2>
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
            />
            <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Login
            </button>
            <p className="mt-4 text-center text-gray-600">Or sign up with social accounts</p>
          </form>
        </div>
      </div>
    );
  }