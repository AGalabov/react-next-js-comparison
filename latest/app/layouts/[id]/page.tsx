interface Response {
  id: number;
  todo: string;
  description: string;
}

const getTodo = async (id: string) => {
  const res = await fetch(`http://localhost:3002/${id}`, { cache: "no-store" });

  console.log("loaded stuff");
  return (await res.json()) as Response;
};

export default async function TodoById({ params }: { params: { id: string } }) {
  const data = await getTodo(params.id);

  return (
    <div>
      <h1>
        {data.id} - {data.todo}
      </h1>
      <p>{data.description}</p>
    </div>
  );
}
