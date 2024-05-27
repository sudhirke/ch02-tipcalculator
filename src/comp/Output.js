export default function Output({ billAmount, tipAmount }) {
  return (
    <div>
      <h3>
        You pay ${billAmount + tipAmount} (${billAmount} + ${tipAmount} tip)
      </h3>
    </div>
  );
}
