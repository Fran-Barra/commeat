import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import RecipeFeed from "./page/RecipeFeed";


function App() {

  return (
      <div style={{width: '400px', height: '100%'}}>
          <RecipeFeed recipes={[{recipeName: 'Empanadas de carne',
              recipeTimeInMin: 60,
              recipeImg: 'https://assets.elgourmet.com/wp-content/uploads/2023/10/EMPANADAS-1-1024x683.jpg.webp',
              recipePortions: 4,
              recipeChips: ['Carne', 'Empanadas', 'Fritura'],
              optionsOnClick: () => console.log('Options Clicked')},
              {recipeName: 'Empanadas de carne',
                  recipeTimeInMin: 60,
                  recipeImg: 'https://assets.elgourmet.com/wp-content/uploads/2023/10/EMPANADAS-1-1024x683.jpg.webp',
                  recipePortions: 4,
                  recipeChips: ['Carne', 'Empanadas', 'Fritura'],
                  optionsOnClick: () => console.log('Options Clicked')}]} filters={[{name: 'Fritura', selected: false}, {name: 'Horno', selected: false}, {name: 'Microondas', selected: false}, {name: 'Carne', selected: false}, {name: 'Cebolla', selected: false}]}/>
      </div>
  )
}

export default App
