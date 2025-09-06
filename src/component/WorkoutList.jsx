import { useState } from "react";
const WorkoutList=() =>{


const[workouts,setWorkouts]= useState([])

const[form,setForm]=useState({

    workoutType:'',
    hours:'',
    minutes:''
})


const handleSubmit=(e)=>{
    //prevent the browser from performing a default HTML form submit that reload the page
e.preventDefault();


//validation that check if the field is empty or a bunch of space
const totalMin=Number(form.hours || 0 ) * 60 + Number(form.minutes || 0)
const isInvalidLocal=(!form.workoutType.trim() || totalMin<=0);
if(isInvalidLocal)return;

const newWorkoutEntry={
    id:Date.now(),
    type:form.workoutType,
    durationMin:totalMin,//because input value comes in as a string we have to convert it to a number
}

//append the new object to the end of the workout array in state
setWorkouts(prev =>[newWorkoutEntry, ...prev])

//reset to dafault
 setForm({
    workoutType:"Cardio",
    hours:"",
    minutes:""
})

}

const handleSubmitChange=(e)=>{
  setForm({
    ...form,
    [e.target.name]:e.target.value
  })
}

const totalMin=Number(form.hours ||0 )*60 + Number(form.minutes||0)
const isInvalid=(!form.workoutType.trim() || totalMin<=0);
return(
    <div className="space-y-6">
        <h2 className="text-lg font-semibold" id="workouts-heading" >Workouts</h2>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-2xl bg-white border shadow-sm p-4 ">
         
         <label
          className="block text-sm font-medium text-slate-700"
          htmlFor="workoutType">
            Workout
           </label>
         <select 
         className="w-full  rounded-xl border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500  sm:col-span-2 "
         id="workoutType"
         name="workoutType"
         value={form.workoutType}
         onChange={handleSubmitChange}
         >
         <option value="" disabled>Select workout type</option>
          <option value="Cardio">Cardio</option>
           <option value="Weight-lifting">Weight-lifting</option>
            <option value="Calisthenics">Calisthenics</option>
         </select>
        

       <span className="block text-sm font-medium text-slate-700 sm:col-span-2">Workout Time</span>

       <div className="grid grid-cols-2 gap-3 sm:col-span-2">
         
         <div className="space-y-1">
         <label className="block text-sm font-medium text-slate-700" htmlFor="hours" >Hours</label>
         <input 
          className="w-full rounded-xl border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 "
         type="number"
         min="0"
         step="1"
         inputMode="numeric"
         id="hours"
         name="hours"
         value={form.hours}
         onChange={handleSubmitChange}
          />
         </div>
       

    <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-700" htmlFor="minutes" >Minutes</label>
        <input 
            className="w-full rounded-xl border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            type="number"
            min="0"
            max="59"
            step="1"
            inputMode="numeric"
            id="minutes"
            name="minutes"
            value={form.minutes}
            onChange={handleSubmitChange}
            />
    </div>
      </div>
        
          <button
          disabled={isInvalid}
          type="submit"
          className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[.99] disabled:opacity-50 disabled:cursor-not-allowed sm:col-span-2 "
          >Add workout
          </button>
        </form>

  {/* card */}
        <div className="mt-4 space-y-3">
            
            {workouts.length === 0? (
                <p className="rounded-2xl border bg-white p-8 text-center text-slate-500">
                  No workouts yet
                </p> 
                ) :(
                    
                   <ul className="space-y-3">
                   {workouts.map((w)=>{

                       const h = Math.floor(w.durationMin / 60);
                       const m = w.durationMin % 60;
               
                  return (
                    <li key={w.id} className="rounded-2xl bg-white border shadow-sm p-4">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold leading-tight">
                                 {w.type}
                                </h3>
                                 <p className="mt-1 text-sm text-slate-600">
                                    • {h}hrs • {m}mins
                                 </p>

                                  {h>1 && (
                         <span className="mt-2 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs border-emerald-300 text-emerald-700 bg-emerald-50">
                                    🔥 High intensity
                         </span>
                           )}
                            </div>
                        </div>
                    </li>
                  );
                  })}
                   </ul>
                )} 
        </div>
    </div>
)

}

export default WorkoutList;