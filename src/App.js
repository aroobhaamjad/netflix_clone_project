import logo from './logo.svg';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Netflix from './pages/Netflix';
import Card from './components/Card';
import Slider from './components/Slider';
import MyList from './pages/MyList'

function App() {
  const cardData = [
    {title: "The Dictator", time:"1h 56m" ,genre:"Comedy", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "Purple Hearts", time:"1h 32m" , genre:"Romance", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "The Invitation", time:"2h 12m",genre:"Horror", imageUrl: "/src/netflixappimgs/card.jpg", addToList: true },
    {title: "The Grinch", time:"2h 32m" ,genre:"Comedy", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "Inception", time:"1h 02m" , genre:"Thriller", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "The Marvels", time:"1h 32m",genre:"Action", imageUrl: "/src/netflixappimgs/card.jpg", addToList: true },
    {title: "Joker", time:"1h 32m" ,genre:"Comedy", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "Leo", time:"1h 32m" , genre:"Romance", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "The Creator", time:"1h 32m",genre:"Sci-Fi", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "No Time to Die", time:"1h 32m" ,genre:"Comedy", imageUrl: "/src/netflixappimgs/card.jpg", addToList: true },
    {title: "Candy Cane Lane", time:"1h 32m" , genre:"Romance", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "Rustin", time:"1h 32m",genre:"Fantasy", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "Locked In", time:"1h 32m" ,genre:"Fantasy", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "Pain Hustlers", time:"1h 32m" , genre:"Sci-Fi", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "Batman Begins", time:"1h 32m",genre:"Action", imageUrl: "/src/netflixappimgs/card.jpg", addToList: true },
    {title: "The Nun II", time:"1h 32m" ,genre:"Horror", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "Family Switch", time:"1h 32m" , genre:"Comedy", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "Inside Out", time:"1h 32m",genre:"Animated", imageUrl: "/src/netflixappimgs/card.jpg", addToList: true },
    {title: "The Departed", time:"1h 32m" ,genre:"", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "Avatar", time:"1h 32m" , genre:"Romance", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "The Notebook", time:"1h 32m",genre:"Romance", imageUrl: "/src/netflixappimgs/card.jpg", addToList: true },
    {title: "Dear John", time:"1h 32m" ,genre:"Romance", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "Catch Me If You Can", time:"1h 32m" , genre:"Thriller", imageUrl: "/src/netflixappimgs/card.jpg", addToList: true },
    {title: "Fight Club", time:"1h 32m",genre:"Drama", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "Thor", time:"1h 32m" ,genre:"Comedy", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "Momento", time:"1h 32m" , genre:"Thriller", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "Next Goal Wins", time:"1h 32m",genre:"Comedy", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "The Godfather", time:"1h 32m" ,genre:"Drama", imageUrl: "/src/netflixappimgs/card.jpg", addToList: true },
    {title: "Finding Nemo", time:"1h 32m" , genre:"Animated", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
    {title: "Toy Story", time:"1h 32m",genre:"Animated", imageUrl: "/src/netflixappimgs/card.jpg", addToList: false },
];
  
  return (
    <div>
      <Netflix cardData={cardData}/>
    </div>
  );
}

export default App;
