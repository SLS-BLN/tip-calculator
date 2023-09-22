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
  DynamicPageHeader,
  DynamicPageTitle,
  FlexBox,
  Form,
  FormGroup,
  FormItem,
  Label,
  ShellBar,
  Title,
} from "@ui5/webcomponents-react"; // loads ui5-button wrapped in a ui5-webcomponents-react component
import { spacing } from "@ui5/webcomponents-react-base";

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
        headerContent={
          <DynamicPageHeader>
            <FlexBox wrap="Wrap">
              <FlexBox direction="Column" style={spacing.sapUiContentPadding}>
                <Label>
                  <b>Poor:</b>10 percent
                </Label>
                <Label>
                  <b>Fair:</b>15 percent
                </Label>
                <Label>
                  <b>Good:</b>20 percent
                </Label>
                <Label>
                  <b>Great:</b>25 percent
                </Label>
              </FlexBox>
            </FlexBox>
          </DynamicPageHeader>
        }
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
            <FormItem label="How did your like the service">
              <ServiceRating
                rating={myRating}
                onRating={setMyRating}
              ></ServiceRating>
            </FormItem>

            <FormItem label="How did your friend like the service">
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

{
  /* <DynamicPage
  headerContent={
    <DynamicPageHeader>
      <FlexBox wrap="Wrap">
        <FlexBox direction="Column">
          <Label>Location: Warehouse A</Label>
          <Label>Halway: 23L</Label>
          <Label>Rack: 34</Label>
        </FlexBox>
        <span style={{ width: "1rem" }} />
        <FlexBox direction="Column">
          <Label>Availability:</Label>
          <ObjectStatus state="Success">In Stock</ObjectStatus>
        </FlexBox>
      </FlexBox>
    </DynamicPageHeader>
  }
  headerTitle={
    <DynamicPageTitle
      actions={
        <>
          <Button design="Emphasized">Edit</Button>
          <Button design="Transparent">Delete</Button>
          <Button design="Transparent">Copy</Button>
          <Button design="Transparent" icon="action" />
        </>
      }
      breadcrumbs={
        <Breadcrumbs>
          <BreadcrumbsItem>Home</BreadcrumbsItem>
          <BreadcrumbsItem>Page 1</BreadcrumbsItem>
          <BreadcrumbsItem>Page 2</BreadcrumbsItem>
          <BreadcrumbsItem>Page 3</BreadcrumbsItem>
          <BreadcrumbsItem>Page 4</BreadcrumbsItem>
          <BreadcrumbsItem>Page 5</BreadcrumbsItem>
        </Breadcrumbs>
      }
      expandedContent={
        <MessageStrip>
          Information (only visible if header content is expanded)
        </MessageStrip>
      }
      header={<Title>Header Title</Title>}
      navigationActions={
        <>
          <Button design="Transparent" icon="full-screen" />
          <Button design="Transparent" icon="exit-full-screen" />
          <Button design="Transparent" icon="decline" />
        </>
      }
      snappedContent={
        <MessageStrip>
          Information (only visible if header content is collapsed/snapped)
        </MessageStrip>
      }
      subHeader={<Label>This is a sub header</Label>}
    >
      <Badge>Status: OK</Badge>
    </DynamicPageTitle>
  }
  onPinnedStateChange={function ka() {}}
  onToggleHeaderContent={function ka() {}}
  style={{
    maxHeight: "700px",
  }}
>
  <M />
</DynamicPage>; */
}
