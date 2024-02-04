import { NewTask } from "./NewTask";

export const SelectedProject = ({ projectData, handleDelete, onAdd, onDelete, tasks }) => {

    const formattedDate  = new Date(projectData.dueDate).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{ projectData.title }</h1>
                    <button onClick={() => handleDelete(projectData.id)} className="text-stone-600 hover:text-stone-950">Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{ formattedDate }</p>
                <p className="text-stone-600 whitespace-pre-wrap">{projectData.description}</p>
            </header>
            <section>
                <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
                <NewTask onAdd={onAdd} />
                { tasks.length == 0 ? (<p className="text-stone-800 mb-4">This project does not have any tasks yet.</p>) : (
                    <ul className="p-4 mt-8 rounded-md bg-stone-100">
                        { tasks.map((task) => (
                            <li key={task.id} className="flex justify-between my-4">
                                <span>{task.text}</span>
                                <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(task.id)}>Remove</button>
                            </li>
                        )) }
                    </ul>
                )}
            </section>
        </div>
    )
}