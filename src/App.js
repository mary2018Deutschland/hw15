import "./App.css";
import UserList from "./components/UserList";
const allUsers = [
  { id: 0, name: "Alex" },
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" },
  { id: 4, name: "Smith" },
  { id: 5, name: "Marry" },
];
function App() {
  return (
    <div className="App">
      <UserList usersArray={allUsers} />
    </div>
  );
}

export default App;
