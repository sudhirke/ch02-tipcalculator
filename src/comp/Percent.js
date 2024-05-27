export default function Percent({ children, value, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={value} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Unsatisfactory (0%)</option>
        <option value="5">Okay (5%)</option>
        <option value="10">Good (10%)</option>
        <option value="20">Excellent (20%)</option>
      </select>
    </div>
  );
}
