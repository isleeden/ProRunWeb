import "./App.scss";
import EnterPhone from "./pages/EnterPhone/EnterPhone";
import EnterCode from "./pages/EnterCode/EnterCode";
import EnterPassword from "./pages/EnterPassword/EnterPassword";
import NewPassword from "./pages/NewPassword/NewPassword";
import EnterName from "./pages/EnterName/EnterName"
import EnterSex from "./pages/EnterSex/EnterSex"
import ForgotNewPassword from "./pages/ForgotNewPassword/ForgotNewPassword"
import EnterDateBirth from "./pages/EnterDateBirth/EnterDateBirth"

function App() {
  return (
    <div className="App">
      <EnterDateBirth/>
    </div>
  );
}

export default App;
