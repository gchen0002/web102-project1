import './App.css';

const Card = ({ name, cuisine, image, website }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{cuisine}</p>
        <a href={website} target="_blank" rel="noopener noreferrer">
          <button>View Menu</button>
        </a>
      </div>
    </div>
  );
};

const App = () => {
  const fastFoodRestaurants = [
    { name: "McDonald's", cuisine: "American", image: "/images/mcd.jpg", website: "https://www.mcdonalds.com" },
    { name: "Chick-fil-A", cuisine: "American", image: "/images/chick-fil-a.jpg", website: "https://www.chick-fil-a.com" },
    { name: "In-N-Out", cuisine: "American", image: "/images/innout.jpg", website: "https://www.in-n-out.com" },
    { name: "Raising Cane's", cuisine: "American", image: "/images/raisingcanes.jpeg", website: "https://www.raisingcanes.com" },
    { name: "Del Taco", cuisine: "Mexican", image: "/images/deltaco.jpg", website: "https://www.deltaco.com" },
    { name: "Taco Bell", cuisine: "Mexican", image: "/images/tacobell.jpg", website: "https://www.tacobell.com" },
    { name: "Burger King", cuisine: "American", image: "/images/burgerking.jpg", website: "https://www.bk.com" },
    { name: "Wendy's", cuisine: "American", image: "/images/wendys.jpg", website: "https://www.wendys.com" },
    { name: "KFC", cuisine: "American", image: "/images/kfc.jpg", website: "https://www.kfc.com" },
    { name: "Popeyes", cuisine: "American", image: "/images/popeyes.jpg", website: "https://www.popeyes.com" }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fast Food Favorites</h1>
      </header>
      <div className="card-container">
        {fastFoodRestaurants.map((restaurant, index) => (
          <Card 
            key={index} 
            name={restaurant.name} 
            cuisine={restaurant.cuisine} 
            image={restaurant.image} 
            website={restaurant.website} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;