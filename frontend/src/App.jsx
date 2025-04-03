import './App.css';
import './index.css';
import Header from './components/Header';
import Tarefa from './components/Tarefa';

function App() {

  return (
    <div className='m-auto'>
      <Header/>

      <div className='flex justify-center items-center'>
        <Tarefa/>
      </div>

    </div>
  )
}

export default App
