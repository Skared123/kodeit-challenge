import Form from "./components/Form";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="h-full flex">
      <SideBar />
      <div className="w-full">
        <NavBar />
        <Form />
      </div>
    </div>
  );
}

export default App;
