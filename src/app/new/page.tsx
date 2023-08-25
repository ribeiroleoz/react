import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function newPage() {
    async function createTodo(data: FormData){    
        "use server"
        
        const title:string = data.get("title")?.valueOf() as string;

        await prisma.todo.create({ data: { title, complete: false}})

        redirect("/")
    }

  return (<>
  <header className="flex justify-between items-center">
    <h1 className="text-2xl text-center mt-6">Todo things</h1>
    <Link className="border-2 border-violet-800 p-2 rounded hover:bg-violet-500 hover:text-white" href="/#">Back page</Link>
  </header>
  <div className="m-4 p-3 rounded border-2 border-violet-800">
    <form action={createTodo} className="flex gap-2">
        <input placeholder="title" type="text" name="title" className="border-2 rounded bg-transparent border-white"/>
    <div className="flex gap-3 mt-3">
        <Link className="py-1" href="/#">Cancel</Link>
        <button className="border-2 border-violet-800 rounded px-2 py-1 hover:bg-violet-500" type="submit">Create</button>
    </div>
    </form>
  </div>
  </>)
}