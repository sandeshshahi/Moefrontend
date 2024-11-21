import Avatar from "./Avatar";

export default function Topbar() {
  return (
    <>
      <div className="w-[100%] h-[90px] bg-gray-800 ">
        <div className="h-[100%] py-0  px-5 flex content-center justify-between">
          <div className="flex cursor-pointer items-center">
            <span className="text-white"> Logo</span>
          </div>
          <div className="flex items-center mr-6">
            <Avatar name="sandesh shahi" />
          </div>
        </div>
      </div>
    </>
  );
}
