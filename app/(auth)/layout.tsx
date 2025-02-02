import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="bg-black text-white p-4">
        This is a shared navbar for auth
      </nav>
      {children}
    </div>
  );
}
