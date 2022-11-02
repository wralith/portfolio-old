import { TablerIcon } from '@tabler/icons'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  icon?: React.ReactElement
  className?: string
}

function Button(props: Props) {
  if (props.icon) {
    return (
      <button className={`glass hover-neutral p-2 flex gap-2 ${props.className}`}>
        <span>{props.icon}</span> {props.children}
      </button>
    )
  }
  return <button className={`hover-neutral p-2 ${props.className}`}>{props.children}</button>
}

export default Button
