import Link from "next/link"

export default function Home() {
  return <>
  <header className="flex justify-between items-center">
    <h1 className="text-2xl text-center mt-6">Todo things</h1>
    <Link className="border-2 border-violet-800 p-2 rounded hover:bg-violet-500 hover:text-white" href="/new">New page</Link>
  </header>
  <div className="m-4 p-3 rounded border-2 border-violet-800">
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
  </div>
  <footer className="">
    footer
  </footer>
  </>
}