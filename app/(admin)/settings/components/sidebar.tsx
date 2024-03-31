"use client";

import SidebarItem from "./sidebarItem";

function Sidebar() {
  return (
    <div className="w-[206px]  fixed top-[80px] h-auto mr-auto left-3 right-0  ">
      <SidebarItem
        to="profileInfos"
        className="pl-3 text-[#475569]"
        title="Edit profile"
      />
      <SidebarItem
        to="subscription"
        className="pl-3 text-[#475569]"
        title="Manage Subscription"
      />
      <SidebarItem
        to="changeEmail"
        className="pl-3 text-[#475569]"
        title="Change email"
      />
      <SidebarItem
        to="changePassword"
        className="pl-3 text-[#475569]"
        title="Change password"
      />
    </div>
  );
}

export default Sidebar;
