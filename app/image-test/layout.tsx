import React from 'react';

export const runtime = 'experimental-edge';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-12 lg:space-y-16">
      <div>{children}</div>
    </div>
  );
}
