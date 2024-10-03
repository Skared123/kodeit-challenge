import NotificationsIcon from "@mui/icons-material/Notifications";
import ProfileComponent from "./ProfileComponent";

export default function NavBar() {
  return (
    <div className="border h-[80px] flex justify-between p-4">
      <div className="flex items-center justify-center">
        <p className="text-xl font-bold">@ Biometricos</p>
      </div>
      <div className="flex space-x-4 items-center">
        <NotificationsIcon className="hover:cursor-pointer" />
        <ProfileComponent />
      </div>
    </div>
  );
}
