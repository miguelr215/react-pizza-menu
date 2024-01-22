import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Big Pizza</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  return (
    <footer>{new Date().toLocaleTimeString()}, We're currently open!</footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="public/pizzas/spinaci.jpg" alt="pizza" />
      <h2>Pizza Spinaci</h2>
    </div>
  );
}

export default App;
