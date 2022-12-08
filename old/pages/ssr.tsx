interface Response {
  todos: string[];
  reqNum: number;
}

import { GetServerSideProps } from "next";

interface ServerSideProps {
  data: Response;
}

export const getServerSideProps: GetServerSideProps<
  ServerSideProps
> = async () => {
  const res = await fetch("http://localhost:3002");

  console.log("loaded stuff");
  const data = (await res.json()) as Response;

  return { props: { data } };
};

export default function ServerSide({ data }: ServerSideProps) {
  return (
    <div>
      <h1>Hello from the server siiiiide.</h1>
      {data.todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </div>
  );
}
