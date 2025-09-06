import WorkoutList from "./component/WorkoutList";
import MealList from "./component/MealList";

const App = () => {
  return ( 
    <div className="min-h-screen bg-slate-50 text-slate-800 ">
       
      <main className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8  ">
         <h1 className="text-2xl font-semibold tracking-tight">FitTracker Mini</h1>

         <section className="flex flex-col md:flex-row gap-8 mt-10">
          <section id="workouts" aria-labelledby="workouts-heading" className="flex-1 min-w-0">
            <WorkoutList/>      
          </section>
          
          <section id="meals" aria-labelledby="meals-heading" className="flex-1 min-w-0"> 
            <MealList/>
          </section>
         </section>
        
        
      </main>
     
    </div>


   );
}
 
export default App;

