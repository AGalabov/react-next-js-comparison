import Link from "next/link";
import { ReactNode } from "react";

interface Response {
  todos: string[];
  reqNum: number;
}

const getDataSsr = async (url: string) => {
  const res = await fetch(url, { cache: "no-store" });

  console.log("loaded stuff");
  return (await res.json()) as Response;
};

export default async function Layout({ children }: { children: ReactNode }) {
  const data = await getDataSsr("http://localhost:3002");

  return (
    <div>
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
    </div>
  );
}
