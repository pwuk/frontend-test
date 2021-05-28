import './App.css';
import {useFetch} from './hooks';
import DataContext from "./dataContext";
import SectorList from "./SectorList";

function App() {
  const data = useFetch();
  return <div>
    <div>Insight capital test…</div>
    <DataContext.Provider value={data}>
        <SectorList />
    </DataContext.Provider>
  </div>;
}

export default App;
