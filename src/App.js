import './reset.css'
import './App.css'
import Header from './Header'

function App() {
  return (
    <div className="App">
      <div className="App_opacityLayer">
        <Header/>
        <div className="App_middleSection">
        <h1>GRAYSCALE</h1>
        <p>A free, responsive, one page Bootstrap theme</p>
        <p>created by Start Bootstrap.</p>
        <p className="App_getStarted">GET STARTED</p>
      </div>
      </div>
    </div>
  );
}

export default App;
