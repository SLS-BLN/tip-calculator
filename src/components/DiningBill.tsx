import { Icon, Input, FormItem, FormGroup } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

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
            icon={<Icon name="receipt" />}
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
