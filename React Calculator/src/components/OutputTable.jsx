import { useEffect, useState } from "react"
import { calculateInvestmentResults } from "../util/investment";

export const OutputTable = ({ investmentParams }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const arr = calculateInvestmentResults(investmentParams)
        let sum = 0;
        const newArr = arr.map((obj) => {
            sum += obj.interest;
            const newObj = {
                year: obj.year,
                investmentVale: obj.valueEndOfYear,
                interest: obj.interest,
                totalInterest: sum,
                investedCapitial: investmentParams.initialInvestment + 
                    (obj.year * investmentParams.annualInvestment) 
            }
            
            return newObj;
        });
        setData(newArr);
    }, [investmentParams])

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                { data.map((item, index) => (
                    <tr key={index}>
                        {Object.values(item).map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}