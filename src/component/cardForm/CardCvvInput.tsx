import lock from "../../assets/lock.svg";
import lock_white from "../../assets/lock-white.svg";

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
const CardCvvInput: React.FC<InputProps> = ({
  theme,
  inputData,
  handleCardNumberInputFocus,
  handleCardNumberInputBlur,
  handleInputData,
}) => {
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input: string = e.target.value;
    const numericInput: string = input.replace(/\D/g, ""); // Remove non-numeric characters

    // setCardNumber(numericInput);
    if (numericInput.length <= 3) {
      handleInputData(e.target.name, numericInput);
    }
  };
  return (
    <>
      <div className="group-2">
        <label htmlFor="cardCvvInput">
          <img
            className="svg_image_small"
            src={theme ? lock : lock_white}
            alt="lock"
          />{" "}
          CVV
        </label>

        <input
          name="cvv"
          className="form_input"
          type="text"
          id="cardCvvInput"
          value={inputData.cvv}
          onChange={handleCardNumberChange}
          placeholder="xxx"
          required
          onFocus={(e) => handleCardNumberInputFocus(e.target.id)}
          onBlur={(e) => handleCardNumberInputBlur(e.target.id)}
        />
      </div>
    </>
  );
};

export default CardCvvInput;
