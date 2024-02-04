import { useRef } from "react";
import { Input } from "./Input";
import { Modal } from "./Modal";

export default function NewProject({ handleSave, handleCancel }) {

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function onSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle == '' || enteredDescription == '' || dueDate === '') {
            modal.current.open();
            return;
        }

        handleSave({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });

    }


    return (
            <div className="w-[35rem] mt-16">
                <Modal ref={modal} buttonCaption="Okay">
                    <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                    <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value </p>
                    <p className="text-stone-600 mb-4"> Please make sure you provide a valid value</p>
                </Modal>

                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button onClick={handleCancel} className="text-stone-800 hover:ext-stone-950">Cancel</button></li>
                    <li><button onClick={onSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
                </menu>
                <div>
                    <Input ref={title} labelName={"Title"} name={"title"} />
                    <Input ref={description} labelName={"Description"} name="Desription" isTextArea />
                    <Input ref={dueDate} labelName="Due Date" name={"dueDate"} type="date" />
                </div>
            </div>
        
    )
}