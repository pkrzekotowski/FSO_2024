// Takes care of rendering the name of the course
const Header = (props) => {
  console.log(props)
  return(
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

// Renders the specific parts of the course
const Content = (props) => {
  console.log('Content props:', {props})
  return(
    <>
      <Part name={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part name={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part name={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
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
      <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </>
  )
}

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
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
