// Takes care of rendering the name of the course
const Header = (props) => {
  console.log(props)
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

// Renders the specific parts of the course
const Content = (props) => {
  console.log('Content props:', {props})
  return(
    <>
      <Part name={props.part1} exercises={props.exercises1} />
      <Part name={props.part2} exercises={props.exercises2} />
      <Part name={props.part3} exercises={props.exercises3} />
    </>
  )
}

// Renders name of the parts and their number of exercises
const Part = (props) => {
  console.log('Part props:', {props})
  return(
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  )
}

// Renders the total number of exercises
const Total = (props) => {
  return(
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0].name} part2={parts[1].name} part3={parts[2].name} exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
    </div>
  )
}

export default App
