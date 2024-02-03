export const InputElement = ({ labelName, id, min, max, handleChange }) => (
    <div className="input-group">
        <label htmlFor={id}>{labelName}</label>
        <input type="number" id={id} name={labelName} min={min} max={max} onChange={(e) => handleChange(e, id)}/>
    </div>
)