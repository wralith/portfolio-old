import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function IconButton({ children: icon }: Props) {
  return <button className="p-2 hover-neutral rounded-xl">{icon}</button>
}

export default IconButton
