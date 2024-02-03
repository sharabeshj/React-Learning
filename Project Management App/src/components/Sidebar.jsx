import Button from "./Button"

export const Sidebar = ({ handleAddProject  }) => {
    return (
        <aside className="w-1/3 md:w-72 bg-stone-900 text-stone-50 px-8 py-16 rounded-r-xl">
            <h2 className="uppercase mb-8 font-bold md:text-xl text-stone-200">Your Projects</h2>
            <Button onClick={handleAddProject} >
                + Add Projects
            </Button>
            <ul></ul>
        </aside>
    )
}