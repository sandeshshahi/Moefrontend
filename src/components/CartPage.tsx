import image1 from "../assets/fabric-43354_1280.jpg";

const CartPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Cart Header */}
        <div className="p-6 border-b flex items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-700">My Shopping Cart</h1>
        </div>

        {/* Cart Items */}
        <div className="p-6">
          <div
            key="id"
            className="flex items-center justify-between border-b py-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={image1}
                alt="img"
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="font-medium text-gray-800">
                  Wireless Headphones
                </h2>
                <p className="text-sm text-gray-500">
                  Selected Options: Color: Red, Size: M, Model: M,
                  Material:Cotton
                </p>
                <p className="text-sm text-green-500">$200</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-2 py-2 text-gray-500 border rounded">
                -
              </button>
              <span className="px-2 py-2 text-center border rounded">20</span>
              <button className="px-2 py-2 text-gray-500 border rounded">
                +
              </button>
              <button className="ml-4 text-red-500 hover:bg-red-500 hover:text-white bg-red-100 p-2 rounded-md">
                Remove
              </button>
            </div>
          </div>

          {/* if cart is empty  show this*/}
          <p className="text-gray-500 text-center">Your cart is empty!</p>
        </div>

        {/* Summary Section */}
        {/* if items in cart then show this */}
        <div className="p-6 border-t">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-800">Total</h2>
            <p className="text-lg font-medium text-gray-800">$200</p>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
