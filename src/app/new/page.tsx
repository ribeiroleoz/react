import { prisma } from "@/db";
import Link from "next/link";
import { TodoItem } from "@/components/TodoItem";

export default function newPage() {
    async function createTodo(data: FormData){
        
        const title = data.get("title")?.valueOf()
        await prisma.todo.create({ data: { title, complete: false}})
    }

  return (<>
  <header className="flex justify-between items-center">
    <h1 className="text-2xl text-center mt-6">Todo things</h1>
    <Link className="border-2 border-violet-800 p-2 rounded hover:bg-violet-500 hover:text-white" href="/#">Back page</Link>
  </header>
  <div className="m-4 p-3 rounded border-2 border-violet-800">
    <form action="submit" className="flex gap-2">
        <input placeholder="title" type="text" name="title" className="border-2 rounded bg-transparent border-white"/>
    </form>
    <div className="flex gap-3 mt-3">
        <Link className="py-1" href="/#">Cancel</Link>
        <button onClick={createTodo} className="border-2 border-violet-800 rounded px-2 py-1 hover:bg-violet-500" type="submit">Create</button>
    </div>
  </div>
  </>)
}