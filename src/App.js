import './App.css';
import AllCardFrame from './Components/Cards';
import Filter from './Components/Filter';
import NavBarIndex from './Components/Navbar';
import { SortingProvider } from './Context/ContextProvider';

function App() {
  return (
    <SortingProvider>  {/* Correctly wrap the components with FilterProvider */}
      <div>
        <NavBarIndex />
        <Filter />
        <AllCardFrame />
      </div>
    </SortingProvider>
  );
}

export default App;
