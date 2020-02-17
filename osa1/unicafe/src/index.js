import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    
    const setGoodValue = () => {
        setGood(good +1)
        setAll(all +1)
         
    }
    const setNeutralValue = () => {
        setNeutral(neutral +1)
        setAll(all +1)
    }
    const setBadValue = () => {
        setBad(bad +1)
        setAll(all +1)
    }
    
    return (
        <div>
            <Statistics good={good} bad={bad} neutral={neutral}
                        all={all} goodValue={setGoodValue}
                        neutralValue={setNeutralValue} badValue={setBadValue} />
        </div>
    )
}
const Header = ({header}) => <div><h1>{header}</h1></div>
const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}
     
const Statistic = ({text, value, optionalText}) => {
    return (
            
             <tr>
                <td>{text}</td>
                <td>{value} {optionalText}</td> 
            </tr>
             
    )
}
        
const Statistics = ({good, neutral, bad, all, goodValue, neutralValue, badValue }) => {
    if(all===0){
        return (
            <div>
                <Header header='Give feedback' />
                <Button onClick={goodValue} text='Good' />
                <Button onClick={neutralValue} text='Neutral' />
                <Button onClick={badValue} text='Bad' />
                <Header header='Statistics' />
                No feedback given
            </div>
        )
    }
    return (
        <div>
            <Header header='Give feedback' />
            <Button onClick={goodValue} text='Good' />
            <Button onClick={neutralValue} text='Neutral' />
            <Button onClick={badValue} text='Bad' />
            <table>
                <thead>
                    <tr>
                        <th><Header header='Statistics' /></th>
                    </tr>
                </thead>
                <tbody>
                    <Statistic text='Good' value={good} />
                    <Statistic text='Neutral' value={neutral} />
                    <Statistic text='Bad' value={bad} />
                    <Statistic text='All' value={all} />
                    <Statistic text='Average' value={(good + (bad * -1))/all} />
                    <Statistic text='Positives' value={(good/all)*100} optionalText=' %' />
                </tbody>
            </table>
        </div>
    )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)