import Table from "../Table";

const Sidebar = () => {
  return (
    <div className="flex h-screen">
      <div className="max-h-screen grid grid-cols-7">
        {/* sidebar */}
        <aside className="bg-gray-800 pr-0.5 text-blue-500 h-[calc(100vh-90px)] col-start-1 col-span-1 sticky top-[90px]">
          <nav className="px-1 mt-3 h-full">
            <div className="flex items-center pl-10 h-12 hover:bg-blue-500 hover:text-white hover:cursor-pointer capitalize">
              Brands
            </div>
            <div className="flex items-center pl-10 h-12 hover:bg-blue-500 hover:text-white hover:cursor-pointer capitalize">
              Products
            </div>
            <div className="flex items-center pl-10 h-12 hover:bg-blue-500 hover:text-white hover:cursor-pointer capitalize">
              Orders
            </div>
            <div className="flex items-center pl-10 h-12 hover:bg-blue-500 hover:text-white hover:cursor-pointer capitalize">
              categories
            </div>
            <div className="flex items-center pl-10 h-12 hover:bg-blue-500 hover:text-white hover:cursor-pointer capitalize">
              sub categories
            </div>
          </nav>
        </aside>

        {/* content */}
        <main className="bg-blue-100 col-start-2 col-span-6 overflow-y-auto p-4">
          <Table />
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
