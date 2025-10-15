import "./App.css";
import StudentProfile from "./components/studentProfile";

function App() {
  return (
    <>
      <StudentProfile
        fname="Kiruthuya"
        lname="Tharmakulasingam"
        email="kiruthu@gmail.com"
        age={20}
        isPresent={true}
      />
      <StudentProfile
        fname="Abisha"
        lname="Mohan"
        email="abimohan@gmail.com"
        age={20}
        isPresent={true}
      />
      <StudentProfile
        fname="Thushi"
        lname="Rajakulasingam"
        email="thushi@gmail.com"
        age={25}
        isPresent={false}
      />
    </>
  );
}

export default App;
