import './App.css';
import Footer from './component/Footer/Footer';
import Page from './component/Homepage/Page'
import Ilkommunity from './component/Ilkommunity/Ilkommunity';
import Komnews from './component/Komnews/Komnews';
import Megaproker from './component/Megaproker/Megaproker';


function App() {
  return (
    <div className="App">
      <Page />
      <Ilkommunity />
      <Megaproker />
      <Komnews />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
