import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home(){
  let location = useLocation();
  return(
    <h1>Home {location.pathname}</h1>
  );
}

function About(){
  let location = useLocation();
  return(
    <h1>About {location.pathname}</h1>
  );
}

function NotFound(){
  let location = useLocation();
  return(
    <h1>404 Not Found {location.pathname}</h1>
  );
}
export default App;