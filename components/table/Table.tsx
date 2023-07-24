import { Payment, columns } from "./Colum";
import { DataTable } from "./Data-Table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

export default async function TableComponent() {
  const data = await getData();

  return (
    <div className="bg-white">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
