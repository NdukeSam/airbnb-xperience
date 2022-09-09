import './App.css';
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardImg from "./images/katie.png"
import star from "./images/Star 1.png"


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      
      <div 
      style = {{display: "flex", gap: "13px"}}>
      <Card 
      img = {cardImg}
      rating = {5.0}
      star = {star}
      reviewCount = {6}
      country = "USA"
      title = "Life Lessons with Katie Zaferes"
      currency = "$"
      price = {136}
      bgColor = "blue"
      />

      <Card 
      img = {cardImg}
      rating = {5.0}
      star = {star}
      reviewCount = {6}
      country = "USA"
      title = "Life Lessons with Katie Zaferes"
      currency = "$"
      price = {136}
      bgColor = "red"

      />
      </div>


    </div>
  );
}

export default App;
