export default function Total({ myRating, yourRating, bill }) {
  const totalTip = (Number(myRating) + Number(yourRating)) / 2;
  const total = Number(bill) + Number(bill) * totalTip;

  return (
    <>
      <div className="total">
        <h2>You pay: ${total}</h2>
      </div>
    </>
  );
}
