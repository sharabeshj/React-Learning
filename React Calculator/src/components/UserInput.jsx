import { InputElement } from "./InputElement"

export const UserInput = ({ handleChange }) => {
    return (
        <div id="user-input" >
            <div className="input-group">
                <InputElement labelName="Initial Investment" id="initialInvestment" min={100} max={1000000} handleChange={handleChange}/>
                <InputElement labelName="Annual Investment" id="annualInvestment" min={500} max={10000} handleChange={handleChange}/>
            </div>
            <div className="input-group">
                <InputElement  labelName="Expected Return" id="expectedReturn" min={1} max={25} handleChange={handleChange}/>
                <InputElement className="input-group" labelName="Duration" id="duration" min={1} max={100} handleChange={handleChange}/>
            </div>
            
        </div>
    )
}