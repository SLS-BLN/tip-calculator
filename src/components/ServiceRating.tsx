export default function ServiceRating({ rating, onRating, children }) {
  const POOR_TIP = 0.1;
  const FAIR_TIP = 0.15;
  const GOOD_TIP = 0.2;
  const GREAT_TIP = 0.25;

  const ratings = [
    { value: 0, label: "Select a rating" },
    { value: POOR_TIP, label: "Poor" },
    { value: FAIR_TIP, label: "Fair" },
    { value: GOOD_TIP, label: "Good" },
    { value: GREAT_TIP, label: "Great" },
  ];

  function handleChange(event) {
    onRating(event.target.value);
  }

  return (
    <>
      <section className="rating container">
        {children}
        <select id="rating" onChange={handleChange} value={rating}>
          {ratings.map((rating, index) => (
            <option
              value={rating.value}
              key={index}
              label={rating.label}
            ></option>
          ))}
        </select>
      </section>
    </>
  );
}
