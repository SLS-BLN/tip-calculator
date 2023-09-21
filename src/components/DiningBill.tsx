import { Icon, Input, FormItem, FormGroup } from "@ui5/webcomponents-react";

export default function DiningBill({ bill, onBill }) {
  function handleInput(event) {
    const bill = event.target.value;
    if (isNaN(bill)) {
      return;
    }
    onBill(bill);
  }

  return (
    <>
      <FormGroup titleText="Dining Bill">
        <FormItem label="How much was the bill">
          <Input
            icon={<Icon name="employee" />}
            value={bill}
            valueState="None"
            onInput={handleInput}
            placeholder="Bill value"
          />
        </FormItem>
      </FormGroup>
    </>
  );
}
