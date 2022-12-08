interface Response {
  todos: string[];
  reqNum: number;
}

const getDataSsr = async (url: string) => {
  // Next.js will attempt to re-generate the page:
  // - When a request comes in
  // - At most once every 5 seconds
  const res = await fetch(url, { next: { revalidate: 5 } });

  console.log("loaded stuff");
  return (await res.json()) as Response;
};

export default async function ServerSide() {
  const data = await getDataSsr("http://localhost:3002");

  return (
    <div>
      <h1>Hello from the server siiiiide.</h1>
      {data.todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </div>
  );
}
