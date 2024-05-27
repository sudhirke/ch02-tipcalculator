export default function BillInput({ amount, onSetBill }) {
  return (
    <div>
      <span className="field">How much was the bill?</span>
      <input
        type="text"
        placeholder="Total bill amount."
        value={amount}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
