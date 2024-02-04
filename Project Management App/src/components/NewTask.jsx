import { useState } from "react"

export const NewTask = ({ onAdd }) => {
    const [enteredValue, setEnteredValue] = useState("")
    
    function handleAdd() {
        if (enteredValue.trim() === "") return;
        onAdd(enteredValue)
        setEnteredValue("")
    }


    return (
        <div className="flex items-center gap-4">
            <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text" onChange={(e) => setEnteredValue(e.target.value)} value={enteredValue}/>
            <button className="text-stone-700 hover:text-stone-950" onClick={handleAdd}>Add</button>
        </div>
    )
}