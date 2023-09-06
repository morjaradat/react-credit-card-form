import { ReactNode } from "react";

interface DebitCardProps {
  children: ReactNode;
}
const Form: React.FC<DebitCardProps> = ({ children }) => {
  return (
    <form className="card_details">
      <h1>Card Details</h1>
      {children}
      <button className="btn" type="submit">
        Processed Payment
      </button>
    </form>
  );
};

export default Form;
