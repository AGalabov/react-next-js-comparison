import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next Layout Example</title>
      </head>
      <body>
        <header>
          <nav
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "yellow",
            }}
          >
            <Link href="/ssr">SSR</Link>
            <Link href="/ssg">SSG</Link>
            <Link href="/isr">ISR</Link>
            <Link href="/client-side">Client Side</Link>
            <Link href="/client-side-actions">Client Side Actions</Link>
            <Link href="/layouts">Layouts</Link>
          </nav>
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
