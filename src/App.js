import { useState } from "react";
import BillInput from "./comp/BillInput";
import Percent from "./comp/Percent";
import Output from "./comp/Output";
import Reset from "./comp/Reset";

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

export default App;

function TipCalculator() {
  const [billAmount, setBillAmount] = useState("");
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const tip = (billAmount * ((yourTip + friendTip) / 2)) / 100;

  function handleReset() {
    setBillAmount("");
    setYourTip(0);
    setFriendTip(0);
  }

  return (
    <div className="App">
      <BillInput amount={billAmount} onSetBill={setBillAmount} />
      <Percent value={yourTip} onSelect={setYourTip}>
        How do you like the service?
      </Percent>
      <Percent value={friendTip} onSelect={setFriendTip}>
        How did your friend like the service?
      </Percent>
      <Output billAmount={billAmount} tipAmount={tip} />

      {billAmount > 0 && <Reset onReset={handleReset} />}
    </div>
  );
}
