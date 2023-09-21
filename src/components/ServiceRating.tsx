import { Select, Option } from "@ui5/webcomponents-react";

export default function ServiceRating({ rating, onRating }) {
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
    // onRating(event.target.value);
    onRating(event.detail.selectedOption.dataset.value);
  }

  return (
    <>
      <section className="rating">
        <Select id="rating" onChange={handleChange}>
          {ratings.map((rating, index) => (
            <Option data-value={rating.value} key={index}>
              {rating.label}
            </Option>
          ))}
        </Select>
      </section>
    </>
  );
}
