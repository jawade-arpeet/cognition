import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center">
      <section className="max-w-sm w-4/5">{children}</section>
    </main>
  );
};

export default Layout;
