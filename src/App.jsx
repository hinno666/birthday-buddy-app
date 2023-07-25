import List from './List';
import data  from './data'
import { useState } from 'react';



const App = () => {
  const [people, setPeople] = useState(data)

  const deletePerson = (id) => {
    const newList = people.filter((person) => person.id != id)

    setPeople(newList)
  }

  const clearAll = () => {
    setPeople([])
  }

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List deletePerson={deletePerson} people={people}/>
        <button onClick={clearAll} type='button' className='btn btn-block'>clear all</button>
      </section>
    </main>
  );
};
export default App;
