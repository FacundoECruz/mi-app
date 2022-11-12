import Competidor from './components/Competidor';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Estos son los candidatos para Red Bull 2022</h1>
        <Competidor 
          nombre='Gazir'
          pais='España'
          imagen='gazir'
          titulo='Red Bull España 2021 y FMS Internacional 2021'
          frase='No sé de los callejones, no me toco esa vida. Yo no nací en el rap, pero llegue hasta el con rimas. Nadie escoge su casilla de partida, pero si la dirección hacia la que luego camina'/>
        <Competidor
          nombre='Aczino'
          pais='México'
          imagen='aczino'
          titulo='Red Bull Internacional 2017 y 2021, FMS Internacional 2020'
          frase='Yo sí soy un engreído, un presumido, un crecido, sí un maldito mal nacido. Pero hay algo que no pueden negar del Aczino ¡que es el mejor maldito freestylero que se ha parido'/>    
      </div>
    </div>
  );
}

export default App;
