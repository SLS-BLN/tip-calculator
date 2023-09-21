import { Title } from "@ui5/webcomponents-react";

export default function Total({ myRating, yourRating, bill }) {
  const totalTip = (Number(myRating) + Number(yourRating)) / 2;
  const total = Number(bill) + Number(bill) * totalTip;

  return (
    <>
      <div className="total">
        <Title level="H2">You pay: ${total}</Title>
      </div>
    </>
  );
}
