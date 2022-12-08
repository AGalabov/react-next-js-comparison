interface Response {
  todos: string[];
  reqNum: number;
}

const getDataSsg = async (url: string) => {
  // Same as passing cache: 'force-cache' (default)
  const res = await fetch(url);

  console.log("loaded stuff");
  return (await res.json()) as Response;
};

export default async function ServerSide() {
  const data = await getDataSsg("http://localhost:3002");

  return (
    <div>
      <h1>Hello from the server siiiiide.</h1>
      {data.todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </div>
  );
}
