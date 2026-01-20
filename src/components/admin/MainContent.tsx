import React from "react";

type MainContentProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
actions?: React.ReactNode;
  className?: string;
};

export default function MainContent({
  title,
  subtitle,
  children,
  actions,
  className = "",
}: MainContentProps) {
  return (
    <section className={`max-w-7xl mx-auto p-8 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              {subtitle}
            </p>
          )}
        </div>

        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>

      <div>{children}</div>
    </section>
  );
}
