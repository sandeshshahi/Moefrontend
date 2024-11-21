import addIcon from "../assets/add.svg";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";

export default function Table() {
  return (
    <div className="container mx-auto md:px-48">
      <table className="table-auto w-full">
        <thead className="border border-b-2 border-t-0 border-l-0 border-r-0 border-gray-400">
          <tr className="text-left text-lg/9 font-semibold text-gray-900 ">
            <th className="text-center">title</th>
            <th className="text-center">title</th>
            <th className="text-center">title</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-400 ">
            <td className="text-center text-base/8 font-semibold text-gray-900 py-3">
              policy2
            </td>
            <td className="text-center text-base/8 font-semibold text-gray-900">
              gg
            </td>
            <td className="text-center text-base/8 font-semibold text-gray-900">
              gg
            </td>
            <td className="text-center text-base/8 font-semibold text-gray-900">
              <div className="flex items-center gap-x-4 justify-center">
                <button className=" bg-green-100 p-1">
                  <img src={addIcon} className="h-6" alt="add" />
                </button>
                <button className=" bg-gray-100 p-1">
                  <img src={editIcon} className="h-6" alt="edit" />
                </button>
                <button className=" bg-red-100 p-1">
                  <img src={deleteIcon} className="h-6" alt="delete" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
