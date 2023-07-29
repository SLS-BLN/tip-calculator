export default function Total({ myRating, yourRating, bill }) {
  const POOR_TIP = 0.1;
  const FAIR_TIP = 0.15;
  const GOOD_TIP = 0.2;
  const GREAT_TIP = 0.25;

  const numOrNot = typeof myRating;
  console.log(numOrNot);

  const myTip =
    myRating === "1"
      ? POOR_TIP
      : myRating === "2"
      ? FAIR_TIP
      : myRating === "3"
      ? GOOD_TIP
      : myRating === "4"
      ? GREAT_TIP
      : 0;

  const yourTip =
    yourRating === "1"
      ? POOR_TIP
      : yourRating === "2"
      ? FAIR_TIP
      : yourRating === "3"
      ? GOOD_TIP
      : yourRating === "4"
      ? GREAT_TIP
      : 0;

  const totalTip = myTip + yourTip;
  const total = Number(bill) + Number(bill) * totalTip;

  return (
    <>
      <h2>You pay: ${total}</h2>
    </>
  );
}
