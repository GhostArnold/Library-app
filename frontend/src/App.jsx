import './App.css';
import BookForm from './components/BookForm/BookForm.jsx';
import BookList from './components/BookList/BookList.jsx';
import Filter from './components/Filter/Filter.jsx';
function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Book library App</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
    </div>
  );
}

export default App;
