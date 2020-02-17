import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
            name: 'Fundamentals of React',
            exercises: 10
            },

            {      
            name: 'Using props to pass data',
            exercises: 7
            },

            {
            name: 'State of a component',
            exercises: 14
            }
            ]
        }
    return (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />          
    </div>
    )
}

const Header = (props) => {
    console.log("Header running")
    console.log(props)
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}
const Content = (props) => {
    console.log("Content running")
    console.log(props)
    return (
        <div>
            <Part parts={props.parts} index={0}/>
            <Part parts={props.parts} index={1}/>
            <Part parts={props.parts} index={2}/>
        </div>
    )
}

const Total = (props) => {
    console.log("Total running")
    console.log(props)
    return (
        <div>
            <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
        </div>
    )
}

const Part = (props) => {
    console.log(props)
    const i = props.index
    return (
        <div>
        <p>
            {props.parts[i].name} {props.parts[i].exercises}
        </p>
    </div>
    )  
}

ReactDOM.render(<App />, document.getElementById('root'))
