import { ReactNode } from 'react'
import Navbar from '../nav/Navbar'

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <h4 className="fixed bottom-0 left-5 cursive text-[10rem] text-gray-200/30 mix-blend-overlay">Hello, World</h4>
      <div className="h-screen flex flex-col text-white">
        <div className="fixed bg-orange-600/50 top-0 left-0 h-screen w-screen -z-50">
          <div className="w-1/3 bg-zinc-900 h-full"></div>
        </div>
        <Navbar />
        <main className="flex flex-col flex-1">{children}</main>
      </div>
    </>
  )
}

export default Layout
