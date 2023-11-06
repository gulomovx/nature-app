
const List = ({ people, setPeople }) => {
  const deleteItem = (id) => {
    const filtered = people.filter((item) => {
      return item.id!==id
    })
    setPeople(filtered)
  }
  return (
      <ul className="mt-4">
          {people.map((item) => {
            const { name, age, image, id } = item
            
              
              return (
                  <li className="flex bg-orange-500 rounded-lg p-2  items-center gap-2 mb-2" key={id}>
                  {/* <img src={image} alt="" width={75} height={75} /> */}
                  <div className="w-[70px] flex items-center justify-center h-[70px] rounded-full bg-slate-800">
                    <div className="bg-white w-[20px] h-[20px] rounded-full hover:scale-125 duration-300"></div>
                  </div>
                  <div className=" w-full  justify-between items-center">
                    <p className="text-2xl text-sky-900 font-medium">{name}</p>
                    <p className="text-[20px]">{ age}</p>
                    {/* <div className="">
                    </div> */}

                  </div>
                    <button onClick={()=>deleteItem(item.id)} className="bg-red-500 ml-auto p-2 px-4 rounded active:scale-110 duration-200">Delete</button>
                  </li>
              )
          })}
      
    </ul>
  )
}

export default List