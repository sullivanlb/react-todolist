import { Todo, columns } from "./columns"
import { DataTable } from "./data-table"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

 async function getData(): Promise<Todo[]> {
    // Fetch data from your API here.
    return [
      {
        id: 1,
        title: "title of my task!",
        description: "here is a good description",
        status: "Created",
      },
      // ...
    ]
}

export default async function DemoPage() {
    const data = await getData()
   
    return (
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    )
}