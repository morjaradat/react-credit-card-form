import { ReactNode, useEffect, useRef } from "react";

import card1 from "../assets/color-card-1.webp";
import card2 from "../assets/color-card-2.webp";
interface CardInputState {
  cardNameInput: boolean;
  cardNumberInput: boolean;
  cardDateInput: boolean;
  cardCvvInput: boolean;
}
interface DebitCardProps {
  theme: boolean;
  children: ReactNode;
  inputState: CardInputState;
}

const DebitCard: React.FC<DebitCardProps> = ({
  theme,
  children,
  inputState,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const flipCard = () => {
      if (inputState.cardCvvInput) {
        ref.current?.classList.add("is-flipped");
      } else {
        ref.current?.classList.remove("is-flipped");
      }
    };

    // Call the flipCard function when inputState.cardCvvInput changes
    flipCard();
  }, [inputState.cardCvvInput]);

  return (
    <>
      <div className="card_image">
        <div
          ref={ref}
          className="card__inner"
          style={{
            backgroundImage: `url(${theme ? card1 : card2})`,
            backgroundPosition: theme ? " " : "right center",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default DebitCard;
