import creditCard from "@assets/credit-card.svg";
import creditCard_white from "@assets/credit-card-white.svg";

interface InputProps {
  theme: boolean;
  inputData: inputDataTypes;
  handleCardNumberInputFocus: (s: string) => void;
  handleCardNumberInputBlur: (s: string) => void;
  handleInputData: (name: string, value: string) => void;
}
interface inputDataTypes {
  name: string;
  cardNumber: string;
  date: string;
  cvv: string;
}
const CardNumberInput: React.FC<InputProps> = ({
  theme,
  handleCardNumberInputFocus,
  handleCardNumberInputBlur,
  handleInputData,
  inputData,
}) => {
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input: string = e.target.value;
    const numericInput: string = input.replace(/\D/g, ""); // Remove non-numeric characters

    // setCardNumber(numericInput);
    if (numericInput.length <= 16) {
      handleInputData(e.target.name, formatCardNumber(numericInput));
    }
  };
  // Function to format the card number as **** **** **** ****
  const formatCardNumber = (cardNumber: string) => {
    const formattedNumber = cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ");
    return formattedNumber;
  };

  return (
    <>
      <label htmlFor="cardNumberInput">
        <img
          className="svg_image_small"
          src={theme ? creditCard : creditCard_white}
          alt="creditCard"
        />{" "}
        Card number
      </label>
      <input
        type="text"
        id="cardNumberInput"
        name="cardNumber"
        className="form_input"
        value={formatCardNumber(inputData.cardNumber)}
        onChange={handleCardNumberChange}
        placeholder="4444 **** **** 4444"
        maxLength={19}
        required
        onFocus={(e) => handleCardNumberInputFocus(e.target.id)}
        onBlur={(e) => handleCardNumberInputBlur(e.target.id)}
      />
    </>
  );
};

export default CardNumberInput;
