import { Header, Welcome, About, Pricing, Contact } from './component';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <About />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
