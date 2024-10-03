import MenuIcon from "@mui/icons-material/Menu";
export default function SideBar() {
  return (
    <div className="bg-slate-100 flex">
      <div className="bg-slate-700 flex p-4 text-white hover:cursor-pointer h-[80px] w-[70px] text-center justify-center items-center">
        <MenuIcon fontSize="large" />
      </div>
    </div>
  );
}
