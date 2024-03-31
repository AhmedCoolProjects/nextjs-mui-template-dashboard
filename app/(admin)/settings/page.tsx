import { Metadata } from "next";
import Sidebar from "./components/sidebar";
import ProfileInfos from "./components/profileInfos";
import Subscription from "./components/subscription";
import ChangeEmail from "./components/changeEmail";
import ChangePassword from "./components/changePassword";

export const metadata: Metadata = {
  title: "Settings",
  description: ".",
};

export default function SettingsPage() {
  return (
    <div className="flex relative flex-row min-h-screen">
      <Sidebar />
      <div className="flex flex-1 ml-[224px]  flex-col items-center justify-start py-6 ">
        <div className="space-y-7 w-full  lg:max-w-2xl flex flex-col">
          <ProfileInfos id="profileInfos" />
          <Subscription id="subscription" />
          <ChangeEmail id="changeEmail" />
          <ChangePassword id="changePassword" />
        </div>
      </div>
    </div>
  );
}
