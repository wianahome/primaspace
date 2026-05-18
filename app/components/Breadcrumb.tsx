import Link from 'next/link';

export type BreadcrumbItem = {
  label: string;
  href: string;
  current?: boolean;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="mb-8 text-sm text-slate-600" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.current ? (
              <span aria-current="page" className="font-medium text-slate-900">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="text-slate-600 hover:text-slate-900 hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
