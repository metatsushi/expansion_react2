// App.jsx

import {Booklist} from "./components/Booklist.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import { TodoIndex } from "./pages/TodoIndex.jsx";
import { TodoToday } from "./pages/TodoToday.jsx";
import { TodoPost } from "./pages/TodoPost.jsx";
import { TestSlack } from "./pages/TestSlack";

const NotFound = () => {
  return <h2>Not Found... </h2>;
};

const App = () => {
  // Google Books APIで特定のKeywordを叩いた時の結果を返す関数
  const languages = ["React","Html","Vue"];
  const getDataFromAPI = async (keyword) => {
    const requestUrl = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
    const result = await axios.get(`${requestUrl}${keyword}`)
    return result;
  };

  
  return (
    <BrowserRouter>
      <h1>Google Books APIで技術書を探す</h1>
      <ul>
        <li>
          <Link to="/todo/index">todo 一覧（全件）</Link>
        </li>
        <li>
          <Link to="/todo/today">todo 一覧（本日）</Link>
        </li>
        <li>
          <Link to="/todo/post">todo 入力</Link>
        </li>
        <li>
          <Link to="/test-slack">test slack</Link>
        </li>
      </ul>
      <hr />
       {/* todoコンポーネントをルーティング */} 
      <Routes>
        <Route path="/todo/index" element ={ <TodoIndex /> } />
        <Route path="/todo/today" element ={ <TodoToday /> } />
        <Route path="/todo/post" element ={ <TodoPost /> } />
        <Route path="/test-slack" element ={ <TestSlack /> } />
        
        {/* どれにも当てはまらない場合は”/＊”となる */}
        {/* NotFoundは最後に書かないと、”/*が全てなのでいきなり全部NotFoundになる” */}
        <Route path="/*" element ={ <NotFound /> } />
        
    
      </Routes>  
    </BrowserRouter>
  );
};
export default App;
