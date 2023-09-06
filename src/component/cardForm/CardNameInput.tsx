import person from "@assets/person.svg";
import person_white from "@assets/person-white.svg";
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
const CardNameInput: React.FC<InputProps> = ({
  theme,
  inputData,
  handleCardNumberInputFocus,
  handleCardNumberInputBlur,
  handleInputData,
}) => {
  return (
    <>
      <label htmlFor="cardNameInput">
        <img
          className="svg_image_small"
          src={theme ? person : person_white}
          alt="person"
        />
        Card holder name
      </label>
      <input
        className="form_input"
        type="text"
        id="cardNameInput"
        name="name"
        value={inputData.name ?? ""}
        placeholder="eg.Mohammad Jaradat"
        required
        onChange={(e) => handleInputData(e.target.name, e.target.value)}
        onFocus={(e) => handleCardNumberInputFocus(e.target.id)}
        onBlur={(e) => handleCardNumberInputBlur(e.target.id)}
      />
    </>
  );
};

export default CardNameInput;
