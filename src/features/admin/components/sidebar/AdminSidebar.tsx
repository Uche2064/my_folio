"use client";

import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

import AdminSidebarContent from "./AdminSidebarContent";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader />
      <AdminSidebarContent />
      <SidebarFooter>
        <div className={isCollapsed ? "" : "p-4"}>
          {isCollapsed ? (
            <SidebarMenuButton
              asChild
              tooltip="Sign out"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              <Button
                variant='ghost'
                aria-label="Sign out"
                size="sm"
              >
                <LogOut />
              </Button>
            </SidebarMenuButton>
          ) : (
            <Button
              variant="outline"
              className="w-full"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign out
            </Button>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
