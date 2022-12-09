import Link from "next/link";
import { ReactNode, Suspense } from "react";

interface Response {
  todos: string[];
  reqNum: number;
}

const getDataSsr = async (url: string) => {
  const res = await fetch(url, { cache: "no-store" });

  console.log("loaded stuff");
  return (await res.json()) as Response;
};

async function LayoutComponent({ children }: { children: ReactNode }) {
  const data = await getDataSsr("http://localhost:3002");

  return (
    <Suspense fallback={<h1>Global loading</h1>}>
      <h1>Hello to layouts.</h1>

      <ul>
        {data.todos.map((todo, id) => (
          <li>
            <Link href={`/layouts/${id}`} key={todo}>
              {todo}
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </Suspense>
  );
}

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<h1>Global loading</h1>}>
      {/**
       * Typescript is yet to add support for async server components.
       * */}
      {/* @ts-ignore  */}
      <LayoutComponent>{children}</LayoutComponent>
    </Suspense>
  );
}
