export default function Reset({ onSetBill, onSetMyRating, onSetYourRating }) {
  function handleClick() {
    onSetBill("");
    onSetMyRating(0);
    onSetYourRating(0);
  }

  return (
    <>
      <div className="fd-dynamic-page__toolbar">
        <button
          className="fd-button fd-button--emphasized"
          onClick={handleClick}
        >
          Reset
        </button>
      </div>
    </>
  );
}
