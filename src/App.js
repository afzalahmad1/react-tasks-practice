
import {Route, Routes } from 'react-router-dom';
import './App.css';
import CheckBox from './components/CheckBox';
import Covid19 from './components/Covid19';
import DropDown from './components/DropDown';
import FetchData from './components/FetchData';
import ImageUpload from './components/ImageUpload';
import RadioButton from './components/RadioButton';
import Search from './components/Search';
import List1 from './components/addInList.js/List1';
import Counter from './components/counter/Counter';
import Navigations from './components/Navigation';
import CardInput from './components/CardInput';
import Timer from './components/Timer';
import DropDownSearch from './components/DropDownSearch';
import Mock from './components/Mock';
import Thankyou from './components/ThankYou';
import Timer3 from './components/Timer3'
import Rmock3 from './components/Rmock3';
import Rmock4 from './components/Rmock4';

function App() {
  const list = ["afzal","adil","ahrar","dilnawaz","jitu","zeeshan","bakku","naruto","natsu","tanjiro"]
  const list2 = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className="App">

      
      <Navigations />
      {/* <h1>Afzal Ahmad</h1> */}
      
      <Rmock3 />
      <Rmock4 />
      {/* <Timer3 /> */}
      <Routes>
        <Route path='/' element={<ImageUpload />} />
        <Route path='/filtername' element={<Search  list={list}/>} />
        <Route path='/list' element={<List1 />} />
        <Route path='/radio' element={<RadioButton />} />
        <Route path='/fetch' element={<FetchData />} />
        <Route path='/dropdown' element={<DropDown  list={list} list2={list2}/>} />
        <Route path='/covid19' element={<Covid19 />} />
        <Route path='/checkbox' element={ <CheckBox />} />
        <Route path='/counter' element={ <Counter />} />
        <Route path='/timer' element={ <Timer />} />
        <Route path='/card' element={ <CardInput />} />
        <Route path='/drop' element={ <DropDownSearch />} />
        <Route path='/timer3' element={ <Timer3 />} />
        <Route path='/thankyou' element={<Thankyou />} />
        <Route path='/mock1' element={<Mock />} />
      </Routes>

    </div>
  );
}

export default App;
