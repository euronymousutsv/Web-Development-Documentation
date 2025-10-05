import Result from './components/Result';
import Checkbox from './components/Checkbox';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import './App.css';

function App({name,address,clawss}) {
console.log(new Date());
const dateInfo =(dat)=>{
 const d = dat.getDate();
 const m = dat.getMonth() +1;
 const y = dat.getFullYear();
return [d, m, y]
}
const [date, month, year] =dateInfo(new Date());
console.log(date);
console.log(month);
console.log(year);


  return (<BrowserRouter>
  {/*Navigation */}
<nav>
  <Link to="/Result">Result</Link> | {" "}
  <Link to="/Checkbox">Checkbox</Link>|{" "}
</nav>
{/*Routes */}
<Routes>
  <Route path="/Result" element={<Result/>}/>
  <Route path="/Checkbox" element={<Checkbox/>}/>
</Routes>
 </BrowserRouter>
  );
}

export default App;
