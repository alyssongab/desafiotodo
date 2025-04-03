import './App.css';
import './index.css';
import Header from './components/Header';
import Tarefa from './components/Tarefa';
import Tabela from './components/Tabela';

function App() {

  return (
    <div className='m-auto'>
      <Header/>

        <div className='flex flex-col justify-center items-center'>
          <Tarefa/>
          <Tabela/>
        </div>

    </div>
  )
}

export default App
