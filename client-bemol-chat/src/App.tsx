import './App.css'
import { WebsocketProvider, socket } from './context/WebsocketContext'
import { Websocket } from './components/Websocket'

function App() {

  return (
    <WebsocketProvider value={socket}>
      <Websocket />
    </WebsocketProvider>
      
  )
}

export default App
