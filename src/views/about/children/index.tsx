import { useState } from "react"
export default function About() {
  const [state, setState] = useState('about-child')
  return <div>page-{state}</div>
}