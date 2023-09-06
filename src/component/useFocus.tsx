import { useState } from "react";

interface CardInputState {
  cardNameInput: boolean;
  cardNumberInput: boolean;
  cardDateInput: boolean;
  cardCvvInput: boolean;
}

const input: CardInputState = {
  cardNameInput: false,
  cardNumberInput: false,
  cardDateInput: false,
  cardCvvInput: false,
};

const useInputFocus = (): [
  CardInputState,
  (name: string) => void,
  (name: string) => void
] => {
  const [inputState, setInputState] = useState<CardInputState>(input);
  const focusHandler = (e: string, value: boolean) => {
    setInputState({ ...inputState, [e]: value });
  };

  const handleCardNumberInputFocus = (name: string) => {
    focusHandler(name, true);
  };

  const handleCardNumberInputBlur = (name: string) => {
    focusHandler(name, false);
  };

  return [inputState, handleCardNumberInputFocus, handleCardNumberInputBlur];
};

export default useInputFocus;
