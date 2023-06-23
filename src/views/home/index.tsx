import { useState } from "react"
export default function Home() {
  const [state, setState] = useState('home')
  return <div>page-{state}</div>
}