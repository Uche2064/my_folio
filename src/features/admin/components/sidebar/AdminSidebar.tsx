import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import AdminSidebarContent from "./AdminSidebarContent";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <AdminSidebarContent /> 
      <SidebarFooter  />
    </Sidebar>
  );
}
