export default function DiningBill({ bill, onBill }) {
  function handleInput(event) {
    const bill = event.target.value;
    if (isNaN(bill)) {
      return;
    }
    onBill(bill);
  }

  return (
    <>
      <section className="bill fd-section">
        <h2 className="fd-section__title">Dining Bill</h2>
        <label className="fd-form-label" htmlFor="bill">
          How much was the bill?{" "}
        </label>
        <input
          className="fd-input"
          type="text"
          id="bill"
          value={bill}
          onInput={handleInput}
          placeholder="Bill value"
        />
      </section>
    </>
  );
}
