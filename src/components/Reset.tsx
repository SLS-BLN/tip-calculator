export default function Reset({ onSetBill, onSetMyRating, onSetYourRating }) {
  function handleClick() {
    onSetBill("");
    onSetMyRating(0);
    onSetYourRating(0);
  }

  return (
    <>
      <button onClick={handleClick}>Reset</button>
    </>
  );
}
