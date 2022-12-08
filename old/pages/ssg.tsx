import { GetStaticProps } from "next";

interface Response {
  todos: string[];
  reqNum: number;
}

interface StaticProps {
  data: Response;
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const res = await fetch("http://localhost:3002");

  console.log("loaded stuff");
  const data = (await res.json()) as Response;

  return { props: { data } };
};

export default function ServerSide({ data }: StaticProps) {
  return (
    <div>
      <h1>Hello from the server siiiiide.</h1>
      {data.todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </div>
  );
}
