export default function Reset({ onSetBill, onSetMyRating, onSetYourRating }) {
  function handleClick() {
    onSetBill("");
    onSetMyRating(0);
    onSetYourRating(0);
  }

  return (
    <>
      <div className="reset">
        <button onClick={handleClick}>Reset</button>
      </div>
    </>
  );
}
