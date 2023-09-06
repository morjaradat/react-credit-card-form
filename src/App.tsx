import { useEffect, useState } from "react";
import "./App.css";
import DebitCard from "./component/DebitCard";
import Form from "./component/Form";
import StyleSwitcher from "./component/StyleSwitcher";
import FrontCard from "./component/cardImage/FrontCard";
import BackCard from "./component/cardImage/BackCard";
import CardNumberInput from "./component/cardForm/CardNumberInput";
import CardNameInput from "./component/cardForm/CardNameInput";
import CardDateInput from "./component/cardForm/CardDateInput";
import CardCvvInput from "./component/cardForm/CardCvvInput";
import useFocus from "./component/useFocus";
import { rootElementStyle, cssVariable } from "./component/styles";

interface inputDataTypes {
  name: string;
  cardNumber: string;
  date: string;
  cvv: string;
}

const App = () => {
  const [theme, setTheme] = useState<boolean>(true);
  const [inputState, handleCardNumberInputFocus, handleCardNumberInputBlur] =
    useFocus();
  const [inputData, setInputData] = useState<inputDataTypes>({
    name: "",
    cardNumber: "",
    date: "",
    cvv: "",
  });

  const selectedStyle = theme ? cssVariable[0] : cssVariable[1];
  useEffect(() => {
    for (const key in selectedStyle) {
      rootElementStyle.setProperty(key, selectedStyle[key]);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  const handleInputData = (name: string, value: string) => {
    setInputData({ ...inputData, [name]: value });
  };

  const toggleStyle = () => {
    setTheme(!theme);
  };

  return (
    <>
      <StyleSwitcher theme={theme} toggleStyle={toggleStyle} />
      <div
        className="container"
        style={{ backgroundImage: `url("./color-bank-credit-card-2.jpg")` }}
      >
        <DebitCard inputState={inputState} theme={theme}>
          <FrontCard inputState={inputState} inputData={inputData} />
          <BackCard inputState={inputState} inputData={inputData} />
        </DebitCard>

        <Form>
          <CardNameInput
            inputData={inputData}
            handleInputData={handleInputData}
            theme={theme}
            handleCardNumberInputFocus={handleCardNumberInputFocus}
            handleCardNumberInputBlur={handleCardNumberInputBlur}
          />
          <CardNumberInput
            inputData={inputData}
            handleInputData={handleInputData}
            theme={theme}
            handleCardNumberInputFocus={handleCardNumberInputFocus}
            handleCardNumberInputBlur={handleCardNumberInputBlur}
          />

          <div className="box_group">
            <CardDateInput
              inputData={inputData}
              handleInputData={handleInputData}
              theme={theme}
              handleCardNumberInputFocus={handleCardNumberInputFocus}
              handleCardNumberInputBlur={handleCardNumberInputBlur}
            />
            <CardCvvInput
              inputData={inputData}
              handleInputData={handleInputData}
              theme={theme}
              handleCardNumberInputFocus={handleCardNumberInputFocus}
              handleCardNumberInputBlur={handleCardNumberInputBlur}
            />
          </div>
        </Form>
      </div>
    </>
  );
};

export default App;
