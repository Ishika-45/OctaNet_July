import './App.css'
import {Provider} from "redux"
import store from './redux/store'

function App() {

  return (
    <Provider store = {store}>
      <h1 className='text-5xl font-bold'>Hello, Developer!!</h1>
    </Provider>
  )
}

export default App
