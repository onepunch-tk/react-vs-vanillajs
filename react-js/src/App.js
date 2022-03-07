import './App.css';
import Card from './components/Card';


const App = () => {
  return (
    <div className="main-layout">
      <h2>React todo list!</h2>
      <Card contents="아침에 일어나서 청소하기!"/>
    </div>
  );
};

export default App;
