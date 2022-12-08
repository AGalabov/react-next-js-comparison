"use client";

import { useEffect, useState } from "react";
// swr/immutable has nothing enabled as automatic refresh - it's manually controlled.
// https://swr.vercel.app/docs/revalidation
import useSWR from "swr";
const fetcher = (url: string) =>
  new Promise<any>((resolve) => {
    setTimeout(() => {
      console.log("Will resolve");
      resolve(fetch(url).then((res) => res.json()));
    }, 3000);
  });

export function TodosWithButton() {
  const [buttonNumClicks, setButtonNumClick] = useState(0);

  const { data, mutate: refresh } = useSWR<{ todos: string[]; reqNum: number }>(
    // TODO: Can modify to /unsafe to showcase ErrorBoundary. Important to build
    "http://localhost:3002",
    fetcher,
    {
      suspense: true,
    }
  );

  useEffect(() => {
    const fn = () =>
      fetch("http://localhost:3002/add", { method: "POST" }).then(() =>
        refresh()
      );
    if (buttonNumClicks) {
      fn();
    }
  }, [buttonNumClicks]);

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
      <button onClick={() => setButtonNumClick((clicks) => clicks + 1)}>
        Add another TODO
      </button>
    </>
  );
}
