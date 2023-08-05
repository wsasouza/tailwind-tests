import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        src="https://github.com/wsasouza.png"
        alt=""
        width={100}
        height={100}
        className="h-10 w-10 rounded-full border-2 border-violet-700"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700">
          Walter Souza
        </span>
        <span className="truncate text-sm text-zinc-500">
          wsasouza@hotmail.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
