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
      <section className="bill">
        <h2>Dining Bill</h2>
        <label htmlFor="bill">How much was the bill? </label>
        <input type="text" id="bill" value={bill} onInput={handleInput} />
      </section>
    </>
  );
}
