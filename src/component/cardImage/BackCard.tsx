interface CardInputState {
  cardNameInput: boolean;
  cardNumberInput: boolean;
  cardDateInput: boolean;
  cardCvvInput: boolean;
}
interface inputDataTypes {
  name: string;
  cardNumber: string;
  date: string;
  cvv: string;
}
const backCard = ({
  inputState,
  inputData,
}: {
  inputState: CardInputState;
  inputData: inputDataTypes;
}) => {
  const borderAnimationStyle: React.CSSProperties = {
    border: "5px solid #3498db", // Initial border color
    animation: "borderAnimation 2.5s infinite", // Use the CSS animation
    transformOrigin: "center", // Set the transform origin to the center for scaling
    boxShadow: "0 0 5px rgba(52, 152, 219, 0.5)", // Initial box shadow
  };
  return (
    <>
      <div className="card__face | card__face--back">
        <div className="black_line space_top"></div>
        <div className="cvv_group">
          <span className="black_line half"></span>
          <span
            className="cvv"
            style={inputState.cardCvvInput ? borderAnimationStyle : {}}
          >
            {inputData.cvv === "" ? "123" : inputData.cvv}
          </span>
        </div>
      </div>
    </>
  );
};

export default backCard;
