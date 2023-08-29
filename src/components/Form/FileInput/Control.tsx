'use client'
import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

export type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files

    if (!files) {
      return null
    }

    const fileList = Array.from(files)
    onFilesSelected(fileList, multiple)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      multiple={multiple}
      onChange={handleFilesSelected}
      {...props}
    />
  )
}
