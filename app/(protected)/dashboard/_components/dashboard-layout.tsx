import { ReactNode } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Home, User, Settings, LogOut } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-[#FDF8F3]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
        <div className="mb-10 font-bold text-3xl">DermAI</div>
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center text-gray-600 hover:text-yellow-500"
              >
                <Home className="mr-3 h-5 w-5" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="flex items-center text-gray-600 hover:text-yellow-500"
              >
                <User className="mr-3 h-5 w-5" />
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="flex items-center text-gray-600 hover:text-yellow-500"
              >
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <button className="flex items-center text-gray-600 hover:text-yellow-500">
          <LogOut className="mr-3 h-5 w-5" onClick={() => signOut()} />
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}
