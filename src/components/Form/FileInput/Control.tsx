'use client'
import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

export type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files

    if (!files) {
      return null
    }

    const fileList = Array.from(files)
    onFilesSelected(fileList)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFilesSelected}
      {...props}
    />
  )
}
