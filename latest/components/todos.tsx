"use client";

import { use } from "react";
// swr/immutable has nothing enabled as automatic refresh - it's manually controlled.
// https://swr.vercel.app/docs/revalidation
import useSWR from "swr";
// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const fetchTodos = async () => {
  const result = await fetch("http://localhost:3002");

  return result.json();
};

export function Todos() {
  // const { data } = useSWR<{ todos: string[]; reqNum: number }>(
  //   "http://localhost:3002",
  //   fetcher,
  //   {
  //     suspense: true,
  //     // Polling interval in milliseconds
  //     // refreshInterval: 1000,
  //   }
  // );

  const data = use(fetchTodos());

  if (!data) {
    throw new Error("Should not be happening because of suspense");
  }

  return (
    <>
      <>Current TODOs:</>
      <ul>
        {data.todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </>
  );
}
