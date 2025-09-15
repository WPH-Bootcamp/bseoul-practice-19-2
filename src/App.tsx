import MainComponent, {
  GreetingWithClass,
  GreetingWithFunction,
} from "./materi/1-Class-vs-Functional-Component";
import UserProfile from "./materi/2-Props";
import { PropDrilling } from "./materi/3-Prop-Drilling";
import ButtonCustom from "./materi/4-Rest-Param";
import CustomButton from "./materi/5-Handle-ClassName-&-Style";
import CustomCard from "./materi/6-Spread-Syntax";
import ExampleInlineStyle from "./materi/7-Inline-Style";
import Counter from "./materi/8-State";
import CounterProblem from "./materi/9-Callback-Function";
import ComponentLifeCycle from "./materi/10-Component-LifeCycle";

import { useState } from "react";

function App() {
  const handleButtonClick = () => {
    alert();
    console.log();
  };

  const cardCustomProps = {
    product: "TV Besar",
    price: 2_000_000,
    status: "available" as "available" | "unavailable",
  };

  const [show, setShow] = useState(true);

  return (
    <>
      <div style={{ height: "2000dvh", fontFamily: "arial" }}>
        {/* 1. Class vs Functional Component */}
        <MainComponent name="Chris John" age={23} />
        <GreetingWithClass name="Ucup" />
        <GreetingWithFunction name="Rencup" age={30} />
        {/* 1. Class vs Functional Component */}
        <hr />
        {/* 2. Props */}
        <UserProfile
          name={"Handi"}
          age={20}
          address={{
            street: "Jl Untung Jawa",
            city: "Jakarta",
            zip: "21098",
          }}
        />
        <UserProfile
          name="Dicky"
          age={30}
          address={{
            street: "Jl Untung Jawa",
            city: "Tangerang",
            zip: "21098",
          }}
        />
        {/* 2. Props */}
        <hr />
        {/* 3. Prop Drilling */}
        <PropDrilling />
        {/* 3. Prop Drilling */}
        <hr />
        {/* 4. Rest Param */}
        <ButtonCustom
          onClick={() => {
            alert("Hello");
            console.log("Helloo");
          }}
          disabled={false}
          type="button"
        >
          Click Saya
        </ButtonCustom>
        {/* 4. Rest Param */}
        <hr />
        {/* 5. Handle-ClassName-&-Style */}
        <CustomButton size="large" variant="red" disabled={false}>
          Tekan saya
        </CustomButton>
        {/* 5. Handle-ClassName-&-Style */}
        <hr />
        {/* 6. Spread Syntax */}
        <CustomCard {...cardCustomProps} />
        {/* 6. Spread Syntax */}
        <hr />
        {/* 7. Inline Style */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <ExampleInlineStyle name="Umbara" />
          <ExampleInlineStyle name="Timtim" />
          <ExampleInlineStyle name="Andri" />
          <ExampleInlineStyle name="Handi" />
          <ExampleInlineStyle />
        </div>
        {/* 7. Inline Style */}
        <hr />
        {/* 8. State */}
        <Counter />
        {/* 8. State */}
        {/* 9. Callback Function */}
        <CounterProblem />
        {/* 9. Callback Function */}
        {/* 10. Component Lifecycle */}
        <div>
          <button onClick={() => setShow(!show)}>
            {show ? "Sembunyikan Komponen" : "Tampilkan Komponen"}
          </button>
          {show && <ComponentLifeCycle />}
        </div>
        {/* 10. Component Lifecycle */}
      </div>
    </>
  );
}

export default App;
