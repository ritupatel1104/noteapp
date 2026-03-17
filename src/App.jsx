import React, { useState } from 'react'

const App = () => {
  const [Title, setTitle] = useState("")
  const [Notes, setNotes] = useState("")
  const [Tasks, setTasks] = useState([])

  function SubmitForm(){
      console.log("Task Added",{
        Heading: Title,
        List: Notes})


        let newTask = [...Tasks];

        newTask.push({
        Heading: Title,
        List: Notes});

        setTasks(newTask);
        

        setTitle("");
        setNotes("");


  }
  return (
    <>
      {/* 1024px(lg) thi small screen mate lagu pade nai */}
      {/* 1024px(lg) thi moti screen mate flex lagu padse */}

    <section className='lg:flex items-center justify-center'>

      {/*  1st div for form just for adding new task */}
      {/* submitform UI */}
      <div className='lg:w-1/2 w-full h-screen flex items-center justify-center p-4'>
          <div className='bg-red-700/20 max-w-sm w-full p-2 rounded-3xl shadow-2xl'>
               <form className='bg-white text-black w-full rounded-2xl p-6' onSubmit={(e)=>{
                e.preventDefault();
                SubmitForm();
                }}>
                   <h1 className='text-center text-4xl font-bold italic my-1 shadow-3xl'>Add Your Task</h1>
                   <input type="text" id="name" placeholder='Heading'  className='w-full px-4 py-2 bg-orange-200 rounded-md my-2 text-black text-md outline-none focus:ring-2 focus:ring-red-700'
                   value={Title}
                   onChange={(e)=>{
                    setTitle(e.target.value);
                   }}/>
                   <textarea rows={8} name="txtarea" id="txtarea" placeholder='Notes...' className='w-full px-4 py-2 bg-orange-200 rounded-md my-2 text-black outline-none focus:ring-2 focus:ring-red-700' 
                    value={Notes}
                    onChange={(e)=>{
                    setNotes(e.target.value);
                   }}></textarea>
                  <input type="submit" value="Add Task" className='w-full bg-orange-200 text-black rounded-md font-semibold px-4 py-2 my-2 active:scale-95 active:bg-orange-500/90 active:text-white border-2 border-red-700/20'/>
                </form>
          </div>
      </div>


      {/* div for showing all tasks */}
      {/* UI for Notes */}
      <div className='lg:w-1/2 w-full h-screen lg:border-l-2 max-lg:border-t-2
      border-dashed flex flex-wrap items-center justify-center p-6 bg-gray-200 gap-6 overflow-auto'>
       <h1 className="w-full text-4xl font-bold mb-4 text-center">
                {Tasks.length === 0 ? "No Tasks Yet 😴" : "Your Tasks Are Here!!"}
       </h1>
      {Tasks.map((task, id)=>{  
        return(

           <div className='w-full max-w-80 h-80 bg-white rounded-4xl shadow-2xl flex items-end justify-center p-3 relative' key={id}>
             <img src="./pinn.jpg" alt="pin"
             className='w-18 h-14 absolute z-10 top-1' />
            <div className='w-full h-60 bg-orange-200 border-2 border-orange-500 rounded-4xl p-3'>
              <h1 className='text-5xl font-bold'>{id+1}</h1>
              <h1 className='text-4xl font-semibold italic text-center my-1'>{task.Heading}</h1>
              <p className='text-red-700 font-medium text-xl'>{task.List}</p>

            </div>
          </div>

        )
        
        })}


         

      </div>
    </section>
      
    </>
  )
}
// https://i.pinimg.com/736x/85/67/a1/8567a1f2dd7594d5ffb2045fec0a14dc.jpg
export default App
