export default async function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Keep this root layout neutral. The proxy middleware protects /admin and redirects
  // unauthenticated users to /admin/login. The protected layout under
  // `src/app/admin/(protected)/layout.tsx` will render the sidebar only when a valid
  // session exists.
  return <>{children}</>;
}
