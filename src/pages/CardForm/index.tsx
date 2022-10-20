import { useState } from "react";
import { Cards, Form } from "components/Pages/CardForm";
import { CardInfoTypes } from "types/CardForm";
import "./CardForm.css";

const CardForm = () => {
  const [cardInfo, setCardInfo] = useState<CardInfoTypes>({
    name: "Sherin Lin",
    number: "1234123412341234",
    expireDate: "1234",
    cvc: "123",
  });

  const setCardInfoHandler = (target: string, value: string) =>
    setCardInfo({ ...cardInfo, [target]: value });

  return (
    <>
      <main className="container">
        <div className="card-section card-form-bg-image">
          <Cards cardInfo={cardInfo} />
        </div>

        <div className="form-section">
          <Form cardInfo={cardInfo} setCardInfo={setCardInfoHandler} />
        </div>
      </main>
    </>
  );
};

export default CardForm;
