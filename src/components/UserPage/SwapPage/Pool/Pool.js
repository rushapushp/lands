import React, { useEffect, useContext, useState, memo } from "react";
import { AiOutlineDown, AiOutlineRadiusBottomright } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import Modal from "react-modal";
import { UserContext } from "../../../../context/UserContext";
import timeback from "../../../../assets/icons/svg-gobbler.svg";
import gearwheel from "../../../../assets/icons/svg-goblin.svg";

Modal.setAppElement(document.getElementById("root"));

const customstyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    padding: 0,
    border: "none",
    zIndex: 100
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.3)",
    backdropFilter: "blur(2px)",
    zIndex: 100
  },
};

const Pool = () => {
  const [isShowing, setIsShowing] = useState(false);

  const openModal = () => {
    setIsShowing(true);
  };

  const closeModal = () => {
    setIsShowing(false);
  };
  return (
    <div className="w-full flex justify-center mb-36">
      <div className=" w-[894px] h-[260px] relative  border-0 rounded-xl shadow-3xl text-left p-[40px]">
        <p className="text-xl font-semibold">Ваша ликвидность</p>
        <p className="pt-[7px] text-stone-600 text-sm font-[10]">
          Чтобы вернуть токены, удалите ликвидность
        </p>
        <input
          className="bg-[#ededed] w-[424px] outline-none rounded-[25px] h-[50px] px-[20px] mt-[30px] mb-[18px]"
          placeholder="Ликвидность не найдена"
        ></input>

        <button
          onClick={() => openModal()}
          className="w-[233px] h-[50px] text-white text-[16px] font-[400] bg-[#049CA6] rounded-[25px] mx-[29px]"
        >
          {" "}
          + Добавить ликвидность
        </button>
        <div>
          <div className="float-left">
            <p className="text-[14px] mt-[12px]">Не видите свой пул?</p>
          </div>
          <div className="float-left">
            <button className="ml-[81px] text-[14px] border-[2px] border-[#049CA6] px-[25px] py-[11px] rounded-[25px] w-[220px] h-[40] hover:bg-[#049CA6]  hover:border-[#049CA6] hover:text-white transition duration-100">
              {" "}
              Найти другие LP-токены
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[123px] h-[60px] bg-[#373C3D] rounded-tl-[0px] rounded-tr-[10px] rounded-br-[0px] rounded-bl-[50px]">
          <div className="">
            <button className="mr-[20px]  my-[20px] w-[20px] h-[20px]">
              <img src={timeback}></img>
            </button>
            <button className=" float-left mr-[20px] ml-[42px] my-[20px] w-[20px] h-[20px]">
              <img src={gearwheel}></img>
            </button>
          </div>
        </div>
        <Modal isOpen={!!isShowing} style={customstyle}>
          <div>
            <h1>ЧИЧА ЛОХ</h1>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Pool;
