import { useState } from "react";
import Header from "./Component/Header";
import UserInput from "./Component/UserInput";
import Result from "./Component/Result";

function App() {
  const [userInvestment, setUserInvestment] = useState({
    initialInvestment: 10000,
    annualInvestment: 5000,
    expectedReturn: 12,
    duration: 10,
  });

  const validInput = userInvestment.duration >= 1;

  function handleChange(Initialinvestment, userValue) {
    setUserInvestment((prevInvestment) => {
      return {
        ...prevInvestment,
        [Initialinvestment]: +userValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInvestment={userInvestment} />
      {!validInput && (
        <p className="center">Please enter the duration greater than zero.</p>
      )}
      {validInput && <Result Investment={userInvestment} />}
    </>
  );
}

export default App;
