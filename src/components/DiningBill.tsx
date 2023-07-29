export default function DiningBill({ bill, onBill }) {
  function handleInput(event) {
    onBill(event.target.value);
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
