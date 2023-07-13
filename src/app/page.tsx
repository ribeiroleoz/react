import { prisma } from "@/db";
import Link from "next/link";
import { TodoItem } from "@/components/TodoItem";

//

function getTodos(){
  return prisma.todo.findMany()
}

export default async function Home() {
  const todos = await prisma.todo.findMany()
  //await prisma.todo.create({ data: { title: 'test', complete: false}})
  return (<>
  <header className="flex justify-between items-center">
    <h1 className="text-2xl text-center mt-6">Todo things</h1>
    <Link className="border-2 border-violet-800 p-2 rounded hover:bg-violet-500 hover:text-white" href="/new">New item</Link>
  </header>
  <div className="m-4 p-3 rounded border-2 border-violet-800">
        <ul>
          {todos.map(todo => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
  </div>
  </>)
}