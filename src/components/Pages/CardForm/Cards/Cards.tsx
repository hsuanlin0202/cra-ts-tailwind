import { CardInfoTypes } from "types/CardForm";
import "./Cards.css";
type FrontCardProps = { number: string; name: string; expireDate: string };

const FrontCard = ({ name, number, expireDate }: FrontCardProps) => {
  return (
    <div className="card front-card">
      <div className="card-logo">
        <img src="/card-form/card-logo.svg" alt="card-logo" />
      </div>

      <div className="card-number">{`${number.substring(
        0,
        4
      )} ${number.substring(4, 8)} ${number.substring(
        8,
        12
      )} ${number.substring(12, 16)}`}</div>

      <div className="card-down-section">
        <span>{name.toUpperCase()}</span>
        <span>{`${expireDate.substring(0, 2)}/${expireDate.substring(
          2,
          4
        )}`}</span>
      </div>
    </div>
  );
};

type BackCardProps = { cvc: string };

const BackCard = ({ cvc }: BackCardProps) => {
  return (
    <div className="card back-card">
      <span className="cvc">{cvc}</span>
    </div>
  );
};

type CardsProps = {
  cardInfo: CardInfoTypes;
};

export const Cards = ({ cardInfo }: CardsProps) => {
  return (
    <div className="cards">
      <div className="cards-container">
        <BackCard cvc={cardInfo.cvc} />
        <FrontCard
          name={cardInfo.name}
          number={cardInfo.number}
          expireDate={cardInfo.expireDate}
        />
      </div>
    </div>
  );
};
