import { getServerAuthSession } from "@/lib/auth";
import SettingClient from "./SettingClient";

export default async function Setting() {
  const session = await getServerAuthSession();
  const user = session?.user as
    | { id?: string; name?: string; email?: string; role?: string }
    | undefined;

  return <SettingClient user={user} />;
}
