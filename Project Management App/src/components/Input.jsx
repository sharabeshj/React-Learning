import { forwardRef } from "react"

export const Input = forwardRef(({ labelName, name, isTextArea, ...props }, ref) => {
    const classes = "w-full p-1 border-b-2 rounder-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"

    return (
        <p className="flex flex-col gap-1 my-4">
            <label htmlFor={name} className="text-sm font-bold uppercase text-stone-500">{labelName}</label>
            { isTextArea ? <textarea ref={ref} className={classes} name={name} {...props}/> : <input ref={ref} className={classes} name={name} {...props}/> }
        </p>
    )
})