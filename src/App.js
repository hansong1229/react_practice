import {
BrowserRouter as Router,
Routes,
Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
/* Routes는 라우트를 찾고 렌더링 하는 역할 */
function App() {
  return <Router>
    <Routes>
      {/* 
      이런식으로 쓸 수도 있긴 함 근데 그닥.....안좋을듯
      <Route path="/hello">
        <h1>Hello</h1>
      </Route> */}
      {/* :id를 쓴 이유 =>movie/ URL다음에 오는 파라미터가 뭔지 알아야할때 해당 라우트에서 useParam을 사용하면 알아서 가져오는듯 */}
      <Route path="/movie/:id" element={<Detail/>}></Route>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
  </Router>
}

export default App;
