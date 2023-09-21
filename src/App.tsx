import { useState } from "react";
import DiningBill from "./components/DiningBill";
import ServiceRating from "./components/ServiceRating";
import Total from "./components/Total";
import Reset from "./components/Reset";
import {
  Avatar,
  Bar,
  Form,
  FormGroup,
  FormItem,
  Label,
  Page,
  ShellBar,
} from "@ui5/webcomponents-react"; // loads ui5-button wrapped in a ui5-webcomponents-react component

import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [myRating, setMyRating] = useState(0);
  const [yourRating, setYourRating] = useState(0);

  return (
    <>
      <ShellBar primaryTitle="Tip Calculator">
        <Avatar colorScheme="Accent6" icon="employee" shape="Circle" size="L" />
      </ShellBar>
      <Page
        header={
          <Bar>
            <Label>How much do you want to tip?</Label>
          </Bar>
        }
        footer={
          <Bar design="Footer">
            <Reset
              onSetBill={setBill}
              onSetMyRating={setMyRating}
              onSetYourRating={setYourRating}
              props={{ slot: "endContent" }}
            />
          </Bar>
        }
        style={{
          height: "500px",
        }}
      >
        <Form>
          <DiningBill onBill={setBill} bill={bill} />

          <FormGroup titleText="Rate the Service">
            <FormItem label="How did your like the service?">
              <ServiceRating
                rating={myRating}
                onRating={setMyRating}
              ></ServiceRating>
            </FormItem>

            <FormItem label="How did your friend like the service?">
              <ServiceRating
                rating={yourRating}
                onRating={setYourRating}
              ></ServiceRating>
            </FormItem>
          </FormGroup>
        </Form>
        <Total bill={bill} myRating={myRating} yourRating={yourRating} />
      </Page>
    </>
  );
}

export default App;
