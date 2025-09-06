import { useState } from "react"

const MealList=() => {


    const [meals,setMeals]= useState([])//pluray array

    const [form,setForm]= useState({
        name:"",
        calories:"",
        protein:"",
        carbs:"",
        fibers:"",
    });


    const handleSubmit=(e)=>{
        e.preventDefault();

        //validation 
        if(!form.name.trim()||!form.calories.trim()||Number(form.calories) <=0) return

        //create a new note object
        const newMealEntry={
            id:Date.now(),
            name:form.name,
            calories:Number(form.calories),
            protein:Number(form.protein ||0),
            carbs:Number(form.carbs||0),
            fibers:Number(form.fibers ||0)
        }

        //append list
        setMeals(prev =>[newMealEntry, ...prev]);


      //Rest enter meal form
        setForm({
        name:"",
        calories:"",
        protein:"",
        carbs:"",
        fibers:""
        
        })
    }

    const handleSubmitChange=(e)=>{
       setForm({
        ...form,
        [e.target.name]:e.target.value,
        
       })
    }

    const isInvalid = !form.name.trim() || !form.calories.trim() || Number(form.calories) <= 0;


    return(
    <div className="space-y-4">
        <h2 className="text-lg font-semibold" id="meals-heading">Meals List</h2>
   
       <form  onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-2xl bg-white border shadow-sm p-4">

         <div className="space-y-1  sm:col-span-2 ">
         <label className="block text-sm font-medium text-slate-700" htmlFor="name">Name</label>
         <input 
         className="w-full rounded-xl border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 "
         type="text"
         id="name"
         name="name"
         value={form.name}
         onChange={(handleSubmitChange)}
         />
         </div>
      
<div className="space-y-1 ">
        <label className="block text-sm font-medium text-slate-700" htmlFor="calories">Calories</label>
         <input 
         className="w-full rounded-xl border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" 
         type="number"
         min="1"
         step="1"
         inputMode="numeric"
         id="calories"
         name="calories"
         value={form.calories}
         onChange={(handleSubmitChange)}
          />
</div>
     
<div className="space-y-1  "> 
       <label className="block text-sm font-medium text-slate-700" htmlFor="protein">Protein</label>
         <input 
         className="w-full rounded-xl border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" 
         type="number"
         min="0"
         step="1"
         inputMode="numeric"
         id="protein"
         name="protein"
         value={form.protein}
         onChange={(handleSubmitChange)}
          /></div>
     

<div className="space-y-1 ">
    <label className="block text-sm font-medium text-slate-700" htmlFor="carbs">Carbs</label>
         <input
          className="w-full rounded-xl border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" 
        type="number"
         min="0"
         step="1"
         inputMode="numeric"
         id="carbs"
         name="carbs"
         value={form.carbs}
         onChange={(handleSubmitChange)}
          />
 </div>

 <div className="space-y-1 ">
    <label className="block text-sm font-medium text-slate-700" htmlFor="fibers">Fibers</label>
         <input
          className="w-full rounded-xl border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" 
        type="number"
         min="0"
         step="1"
         inputMode="numeric"
         id="fibers"
         name="fibers"
         value={form.fibers}
         onChange={(handleSubmitChange)}
          />
 </div>
     
         <button
          disabled={isInvalid}
           type="submit"
           className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[.99] disabled:opacity-50 disabled:cursor-not-allowed sm:col-span-2 ">
            Add Meal
            </button>
       </form>

       {/* card */}
    <div className="mt-4 space-y-3">
        {meals.length ===0 ?(
            <p className="rounded-2xl border bg-white p-8 text-center text-slate-500">
                  No Meals yet
            </p> ):(
                 <ul className="space-y-3">
                   {meals.map((m) =>{
                    return(
                    <li key={m.id}  className="rounded-2xl bg-white border shadow-sm p-4">
                          <div className="flex items-start justify-between gap-3">
                              <div>
                                <h3 className="text-base sm:text-lg font-semibold leading-tight">
                                    {m.name}
                                </h3>

                                <p className="mt-1 text-sm text-slate-600">
                                    {m.calories} kcal • {m.protein}g protein • {m.carbs}g carbs • {m.fibers}g fibers 
                                </p>
                                {m.protein >= 30 && (
                                <span className="mt-2 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs border-emerald-300 text-emerald-700 bg-emerald-50">
                                    🥩 High protein
                                </span>
                                )}
                                </div>
                          </div>
                       
                    </li>
                    );
                   })}

                 </ul>
            )
        }
    </div>
    </div>
)
}

export default MealList;