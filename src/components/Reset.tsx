import { Button } from "@ui5/webcomponents-react";

export default function Reset({
  onSetBill,
  onSetMyRating,
  onSetYourRating,
  props,
}) {
  function handleClick() {
    onSetBill("");
    onSetMyRating(0);
    onSetYourRating(0);
  }

  return (
    <>
      <div slot={props.slot}>
        <Button design="Emphasized" onClick={handleClick}>
          Reset
        </Button>
      </div>
    </>
  );
}
