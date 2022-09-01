import Todolist from './Components/todolist';

import './App.css';

function App() {
  return (
    <div className="todo">
      <div className='todo__name'>TODOS</div>
      <Todolist />      
    </div>
  );
}

export default App;
