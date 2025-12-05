import { PlusIcon } from "../icons/PlusIcon";

interface AddItemProps {
  h1: string
  p: string
  btn: string
  onClick: () => void
}

const AddItem = ({ h1, p, btn, onClick }: AddItemProps) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold bg-neon from-primary bg-clip-text text-transparent">{h1}</h1>
        <p className="text-foreground mt-1">{p}</p>
      </div>
      <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium bg-neon h-10 px-4 py-2 gap-2 cursor-pointer" onClick={onClick}>
        <PlusIcon className="lucide lucide-plus h-4 w-4" />
        {btn}
      </button>
    </div>
  )
}
export default AddItem