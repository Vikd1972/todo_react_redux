import './App.css';
import Header from './header';
import InputField from './inputField';
import List from './list';

function App() {
  return (
    <div className="todo">
      <div className='todo__name'>TODOS</div>
      <Header />
      <InputField />
      <List />
    </div>
  );
}

export default App;
