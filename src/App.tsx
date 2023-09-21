import { useState } from "react";
import DiningBill from "./components/DiningBill";
import ServiceRating from "./components/ServiceRating";
import Total from "./components/Total";
import Reset from "./components/Reset";
import {
  Avatar,
  Bar,
  BarDesign,
  DynamicPage,
  DynamicPageTitle,
  Form,
  FormGroup,
  FormItem,
  ShellBar,
  Title,
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
      <DynamicPage
        headerTitle={
          <DynamicPageTitle
            header={<Title>How much do you want to tip</Title>}
          />
        }
        footer={
          <Bar design={BarDesign.Footer}>
            <Reset
              onSetBill={setBill}
              onSetMyRating={setMyRating}
              onSetYourRating={setYourRating}
              props={{ slot: "endContent" }}
            />
          </Bar>
        }
        backgroundDesign="Transparent"
        style={{ height: "90vh" }}
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
      </DynamicPage>
    </>
  );
}

export default App;
