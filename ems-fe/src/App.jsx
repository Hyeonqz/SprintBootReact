import './App.css'
import ListEmployeeComponent from "./component/ListEmployeeComponent.jsx";
import HeaderComponent from "./component/HeaderComponent.jsx";
import FooterComponent from "./component/FooterComponent.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import EmployeeComponent from "./component/EmployeeComponent.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <HeaderComponent /> {/* BrowserRouter 안에 있고 Routes 가 없어 페이지가 리다이렉팅 되도 같은 화면을 보여준다.*/}

            <Routes> {/*개별 경로를 정할 수 있는 곳 . */}
                {/* localhost:3000 -> 기본경로*/}
                <Route path='/' element = { <ListEmployeeComponent /> }></Route>
                {/* localhost:3000/employees */}
                <Route path='/employees' element={ <ListEmployeeComponent /> }></Route>
                {/* localhost:3000/add-employee */}
                <Route path='/add-employee' element= { <EmployeeComponent /> }></Route>
            </Routes>

            <FooterComponent />
        </BrowserRouter>
    </>
  )
}

export default App
