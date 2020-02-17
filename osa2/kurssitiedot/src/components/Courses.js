import React from 'react'

const Courses = ({courses}) => {
    const rows = () => courses.map(course =>
        <Course key={course.name} course={course}/>
    )
    return (
        <div>{rows()}</div> 
    )
}

const Course = ({course}) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />         
        </div>
    )
}

const Header = ({course}) => {
    console.log("Header running")
    return (
        <div>
            <h1>{course.name}</h1>
        </div>
    )
}

const Content = ({course}) => {
    const rows = () => course.parts.map(part =>
        <Part key={part.id} part={part}/>
    )
    return (
        <div>{rows()}</div>
    )
}

const Part = ({part}) => {
    return (
        <div>{part.name} {part.exercises}</div> 
    )  
}

const Total = ({course}) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const exercises = () => course.parts.map(part => 
        part.exercises)
    const total = exercises().reduce(reducer) 
    return (
        
        <div>Total of {total} exercises</div>
    )
}

export default Courses