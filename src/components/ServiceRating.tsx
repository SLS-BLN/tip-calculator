export default function ServiceRating({ onRating, children }) {
  function handleChange(event) {
    onRating(event.target.value);
  }

  return (
    <>
      <section className="rating">
        {children}
        <select id="rating" onChange={handleChange}>
          <option value="0">Select a rating</option>
          <option value="1">Poor</option>
          <option value="2">Fair</option>
          <option value="3">Good</option>
          <option value="4">Great</option>
        </select>
      </section>
    </>
  );
}
