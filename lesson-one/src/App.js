import './App.css';

function Title() {
    return (
        <p>Lorem ipsum dolor sit amet.</p>
    )
}

function Header(){
    return(
        <div>
            <h2>I am header component</h2>
            <Title/>
        </div>
    )
}

function Footer(){
    return(
        <div>
            <h2>I am footer component</h2>
            <Title/>
        </div>
    )
}
function Content(){
    return(
        <div>
            <h2>I am content component</h2>
            <Title/>
        </div>
    )
}

function App() {
  return (
      <div className="App">
        <h1>hello world</h1>
          <Header/>
          <Content/>
          <Footer/>
      </div>
  );
}

export default App;
