// import Button from "tailwindcss";

export default function Reset({ onSetBill, onSetMyRating, onSetYourRating }) {
  function handleClick() {
    onSetBill("");
    onSetMyRating(0);
    onSetYourRating(0);
  }

  return (
    <>
      <div className="reset container bg-slate-50">
        <button
          className="focus:outline-none focus:ring focus:ring-violet-300"
          onClick={handleClick}
        >
          Reset
        </button>
      </div>
    </>
  );
}
