/* import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import { Modal } from './Modal.jsx'

function App() {
  /* const [count, setCount] = useState(0) */

  return (
    <div className ="app-style">
      <Modal href="123">
        <div className ="card-body">
          <h5 className="card-title">О карточках</h5>
          <p className="card-text">Карточки могут быть с любой информацией, а также с картинкой и без.</p>
        </div>
      </Modal>
      <Modal img="https://i.pinimg.com/originals/d5/e2/48/d5e2486abe0383ce6331fd31c619d56b.png" alt="Супермен!">
        <div className ="card-body">
          <h5 className="card-title">Супермен</h5>
          <p className="card-text">Архетипический супергерой: он носит диковинный костюм, использует кодовое имя и борется со злом с помощью экстраординарных способностей.</p>
        </div>
      </Modal>
      <Modal img="off" >
        <div className ="card-body">
          <h5 className="card-title">О картинке карточки</h5>
          <p className="card-text">Если в пропсе igm указать что угодно кроме ссылки, например "off", то место под картинку на карточке будт с стандартной заставкой.</p>
        </div>
      </Modal>
      
    </div>
  )
}

export default App
