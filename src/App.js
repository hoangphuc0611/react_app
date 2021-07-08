import './App.css';
import Test from './components/test/Test';
// import Pplot from './components/plotly/plotly'
import { chatLoad } from './components/test/apiLoad';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import trangchu from './screens/trangChu';
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="link__item" to="/">
                    TRANG CHỦ
                    </Link>
                </li>
                <li className="nav-item active">
                  <Link className="link__item" to="/chungcu" onClick={(e) => {
                    chatLoad();
                  }}>
                    CHUNG CƯ
                    </Link>
                </li>
                <li className="nav-item active">
                  <a href="http://localhost:8050/">VISUALIZE</a>
                </li>
                {/* <Plot
                  data={[
                    {
                      x: [1, 2, 3],
                      y: [2, 6, 3],
                      type: 'scatter',
                      mode: 'lines+markers',
                      marker: { color: 'red' },
                    },
                    { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                  ]}
                  layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
                /> */}

              </ul>
              <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Đăng ký</button>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Đăng nhập</button>
              </form>
            </div>
          </nav>

        </div>
        <body>
          <Switch>
            <Route path="/chungcu" component={Test}></Route>
            <Route path="/" component={trangchu}></Route>
            <Route path="/visualize" component={Test}></Route>
          </Switch>

          <div className='chats' id='chats' >

          </div>
        </body>


      </div>
    </Router>
  );
}

export default App;
