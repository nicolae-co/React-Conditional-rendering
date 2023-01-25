import jokesData from './assets/jokesData.js'
import Joke from './components/Joke.jsx'
import './App.css'

function App() {
  const jokeElements = jokesData.map(joke => {
    return (
        <Joke 
            key={joke.id}
            setup={joke.setup} 
            punchline={joke.punchline} 
        />
    )
})
    return (
        <div>
            {jokeElements}
        </div>
    )
}

export default App
