import { useState } from "react"
import List from "./components/List"
import data from './data/db'
const App = () => {
  const [people, setPeople] = useState(data)
  console.log(data);
  return (
    <div className="h-screen bg-slate-400 w-full text-center flex  items-center ">
      <div className="bg-slate-200 w-[600px] rounded mx-auto p-4 ">
        <h1 className="text-3xl"> {people.length} Birthday</h1>
        {people.length > 0 ? 
        <List people={people} setPeople={setPeople} />
          :'No item'
        }
        <br />
      {people.length==0 ? <button onClick={()=>setPeople(data) } className="bg-blue-400 text-white px-2 rounded">Reset</button> :''}
      </div>

    </div>
  )
}

export default App