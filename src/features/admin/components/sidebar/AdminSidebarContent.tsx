import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Calendar, Home, Inbox, Search, Settings, Toolbox } from "lucide-react";


const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Projects",
    url: "#",
    icon: Toolbox,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export default function AdminSidebarContent() {


  return (
    <SidebarContent>
       <SidebarGroup>
          <SidebarGroupLabel>MY FOLIO ADMIN PANEL</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
    </SidebarContent>
  );
}
