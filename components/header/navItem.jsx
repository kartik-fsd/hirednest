import Link from "next/link";

export default function ListItem({ title, href, children, icon: Icon }) {
  return (
    <li>
      <Link
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-800 focus:bg-green-50 focus:text-green-800"
      >
        <div className="text-sm font-medium leading-none flex items-center">
          <Icon className="h-4 w-4 mr-2 text-green-600" />
          {title}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-gray-600 mt-1">
          {children}
        </p>
      </Link>
    </li>
  );
}
