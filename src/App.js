import './App.css';
import {Testimonio} from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
        <div className="contenedor-principal">
          <h1>Esto es un titulo de prueba</h1>
          <Testimonio 
            nombre="emma Bostian" 
            pais="Suecia" 
            imagen="java" 
            cargo="Ingeniera de software" 
            empresa="Spotify"
            testimonio="
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, ipsa." 
          />
                    <Testimonio 
            nombre="Shawn Wang" 
            pais="Singapur" 
            imagen="laravel" 
            cargo="Ingeniera de software" 
            empresa="amazon"
            testimonio="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa veritatis, ullam reprehenderit quisquam modi eos expedita explicabo veniam labore deserunt delectus aliquam nobis incidunt at magnam. Consequatur possimus itaque in." 
          />
                    <Testimonio 
            nombre="Sarah Chima" 
            pais="nigeria" 
            imagen="javascript" 
            cargo="Ingeniera de software" 
            empresa="ChatDesk"
            testimonio="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa veritatis, explicabo veniam labore deserunt  nobis incidunt at magnam. Consequatur possimus itaque in." 
          />
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
