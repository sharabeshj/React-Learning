import { useState } from "react"
import { Header } from "./components/Header"
import { UserInput } from "./components/userInput"
import { OutputTable } from "./components/OutputTable";

function App() {
  const [investmentParams, setInvestmentParams] = useState({
    initialInvestment: 100,
    annualInvestment: 500,
    expectedReturn: 4,
    duration: 10
  });

  function handleChange(event, inputName) {
    const value = parseInt(event.target.value)
    if (!isNaN(value)){
      setInvestmentParams({
        ...investmentParams,
        [inputName]: value
      });
      }  
  }

  return (
    <>
      <Header />
      <UserInput handleChange={handleChange}/>
      <OutputTable investmentParams={investmentParams} />
    </>
  )
}

export default App
