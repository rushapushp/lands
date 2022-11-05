import React, { useEffect, useContext, useState, memo } from "react";
import { UserContext } from "../../../../context/UserContext";

const styles = {
  wrapper: `
    w-max flex flex-col items-center justify-center mb-36
  `,
  container: `
    w-full
  `,
  content: `
    bg-[#eaeaea] border border-[#eeeeee] w-[26rem] rounded-3xl p-4 my-5
    phone:w-full phone:m-2
  `,
  formHeader: `
    px-2 flex items-center justify-between font-semibold text-lg
  `,
  stackingPropContainer: `
    p-2 placeholder:text-[#373C3D] outline-none w-full text-md
  `,
  stackingPropInput: `
    bg-[#ededed] p-3 rounded-full placeholder:text-[#abc0c2] outline-none mb-3 w-full text-2xl
  `,
  additionalInformation: `w-full flex flex-row justify-end text-[0.85rem] font-semibold mb-6`,
  confirmButton: `
    w-full bg-[#049CA6] my-2 rounded-full py-5 px-8 text-xl text-white flex items-center justify-center cursor-pointer shadow shadow-xl hover:shadow-none hover:bg-[#05a4ad] transtition-all duration-100 disabled:bg-[#d9d9d9] disabled:text-[#373C3D] disabled:border-[#d9d9d9] disabled:shadow-none
  `,
};

const Stacking = memo(() => {
  const { txhash, getWeiBalance, walletBalance } = useContext(UserContext);

  const [formData, setFormData] = useState({
    amount: "0.0",
    days: "",
  });

  const [bonus, setBonus] = useState(0);

  const handleChange = (e, name) => {
    if (!e.target.value) return;

    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  useEffect(() => {
    getWeiBalance(txhash);
  }, [getWeiBalance, txhash]);

  useEffect(() => {
    if(formData.days < 10) setBonus(0)
    if(formData.days >= 10) setBonus(10)
    if(formData.days >= 20) setBonus(30)
    if(formData.days >= 30) setBonus(50)
  }, [formData.days, bonus])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.formHeader}>
            <span>LANDS для стекинга</span>
          </div>
          <div className={styles.stackingPropContainer}>
            <input
              type="text"
              className={styles.stackingPropInput}
              placeholder="0.0"
              pattern="^[0-9]*[.,]?[0-9]*$"
              onChange={(e) => handleChange(e, "amount")}
            />
            <div className={styles.additionalInformation}><span>Ваш баланс: {walletBalance}</span></div>
          </div>
          <div className={styles.formHeader}>
            <span>Дни для ставок</span>
          </div>
          <div className={styles.stackingPropContainer}>
            <input
              type="text"
              className={styles.stackingPropInput}
              placeholder="0"
              onChange={(e) => handleChange(e, "days")}
            />
            <div className={styles.additionalInformation}><span>Долгосрочный бонус: {bonus}%</span></div>
          </div>
          {walletBalance > 0 ? (
            <button onClick={() => fetch()} className={styles.confirmButton}>
              Подтвердить
            </button>
          ) : (
            <button disabled className={styles.confirmButton}>
              Недостаточно BNB
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

export default Stacking;
