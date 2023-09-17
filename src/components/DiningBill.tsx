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
      <section className="bill container shadow-sm">
        <h2>Dining Bill</h2>
        <label htmlFor="bill">How much was the bill? </label>
        <input
          type="text"
          id="bill"
          value={bill}
          onInput={handleInput}
          placeholder="Bill value"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        />
      </section>
    </>
  );
}
