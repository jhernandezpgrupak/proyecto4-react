//import Content from './components/Content';
import Movies from "./components/Movies";
import style from "./css/Content.module.css";

function App() {
  return (
    <div className="App"> 
      <header>
        <h1 className={style.title}>
          Movies
        </h1>
      </header> 
      <main>
        <Movies />
      </main>
    </div>
  );
}

export default App;
