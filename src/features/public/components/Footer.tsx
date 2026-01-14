export default function Footer() {
  return (
    <footer className="bg-white text-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} My Folio. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}