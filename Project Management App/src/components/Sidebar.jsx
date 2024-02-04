import Button from "./Button"

export const Sidebar = ({ handleAddProject, handleChangeProject, projects, selectedProject  }) => {
    return (
        <aside className="w-1/3 md:w-72 bg-stone-900 text-stone-50 px-8 py-16 rounded-r-xl">
            <h2 className="uppercase mb-8 font-bold md:text-xl text-stone-200">Your Projects</h2>
            <Button onClick={handleAddProject} >
                + Add Projects
            </Button>
            <ul className="mt-8">
                { projects.map((item) => {

                    let classes = "my-1 px-2 py-1 w-full rounded-sm text-left hover:text-stone-200 hover:bg-stone-800"
                    if(item.id === selectedProject) {
                        classes += " bg-stone-800 text-stone-200"
                    } else {
                        classes += " text-stone-400"
                    }

                    return (
                        <li key={item.id}>
                            <button onClick={() => handleChangeProject(item.id)} className={classes}>
                                {item.title}
                            </button>
                        </li>)
                })}
            </ul>
        </aside>
    )
}