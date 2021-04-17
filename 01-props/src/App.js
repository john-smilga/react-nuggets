// setup individual props, pass the entire object, spread operator

const data = [
  { id: 1, name: 'john', age: 25 },
  { id: 2, name: 'susan', age: 23, job: 'developer' },
  { id: 3, name: 'anna', age: 21 },
]

function List() {
  return (
    <section>
      {data.map((item) => {
        return <Person key={item.id} {...item}></Person>
      })}
    </section>
  )
}

const Person = ({ name, age }) => {
  return (
    <h2>
      {name}:{age}
    </h2>
  )
}

export default List
