import date from "../../assets/date.svg";
import date_white from "../../assets/date-white.svg";

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
const CardDateInput: React.FC<InputProps> = ({
  theme,
  inputData,
  handleCardNumberInputFocus,
  handleCardNumberInputBlur,
  handleInputData,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input: string = e.target.value;
    console.log(
      "🚀 ~ file: CardDateInput.tsx:19 ~ handleInputChange ~ input:",
      input
    );
    handleInputData(e.target.name, input);
  };
  return (
    <>
      <div className="group-2">
        <label htmlFor="cardDateInput">
          <img
            className="svg_image_small"
            src={theme ? date : date_white}
            alt="date"
          />{" "}
          Expiry
        </label>
        <input
          style={{ color: "#000000a8" }}
          className="form_input"
          name="date"
          id="cardDateInput"
          type="month"
          value={inputData.date}
          onChange={handleInputChange}
          pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
          required
          onFocus={(e) => handleCardNumberInputFocus(e.target.id)}
          onBlur={(e) => handleCardNumberInputBlur(e.target.id)}
        />
      </div>
    </>
  );
};

export default CardDateInput;
