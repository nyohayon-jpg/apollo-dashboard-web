export function AlertCard({ product, onHand, threshold }) {
  return (
    <div className="alert-card">
      <strong>{product}</strong>
      <span>{onHand} / {threshold} in stock</span>
    </div>
  );
}
