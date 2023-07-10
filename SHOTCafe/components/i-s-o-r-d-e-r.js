import { useCallback } from "react";
import { useRouter } from "next/router";

const ISORDER = ({ onClose }) => {
  const router = useRouter();

  const onFrameContainer4Click = useCallback(() => {
    router.push("/w-i-t-h-a-d-d-e-d-i-t-e-m-staff");
  }, [router]);

  return (
    <div className="relative w-[552px] h-[991px] max-w-full max-h-full overflow-auto text-center text-base text-white font-poppins">
      <div className="absolute h-[94.92%] w-full top-[5.08%] right-[0%] bottom-[0%] left-[0%] rounded-[20px] bg-gray-100 overflow-hidden">
        <div className="absolute top-[66px] left-[116px] text-13xl font-semibold font-inter inline-block w-80 h-[35px]">
          Confirmation
        </div>
        <b className="absolute top-[292px] left-[116px] text-13xl inline-block font-inter w-80 h-[35px]">
          ₱ 250.00
        </b>
        <div className="absolute top-[134px] left-[40px] text-5xl inline-block w-[472px] h-[29px]">
          Please check if the order is correct.
        </div>
        <div className="absolute top-[244px] left-[40px] text-5xl inline-block w-[472px] h-[29px]">
          Total Payment
        </div>
        <img
          className="absolute top-[212.5px] left-[40px] w-[472px] h-px"
          alt=""
          src="/vector-12.svg"
        />
        <img
          className="absolute top-[600.5px] left-[40px] w-[472px] h-px"
          alt=""
          src="/vector-12.svg"
        />
        <div className="absolute top-[359.75px] left-[39.75px] rounded-3xs box-border w-[227.5px] h-[85.5px] overflow-hidden text-lightgray border-[0.5px] border-solid border-lightgray">
          <div className="absolute top-[8px] left-[11px] inline-block w-[65px] h-[29px]">
            Order ID
          </div>
          <div className="absolute top-[37px] left-[11px] text-xl text-white inline-block w-[13px] h-[29px]">
            1
          </div>
        </div>
        <div className="absolute top-[633.75px] left-[39.75px] rounded-3xs box-border w-[468.5px] h-[217.5px] overflow-hidden text-xl border-[0.5px] border-solid border-lightgray">
          <div className="absolute top-[8px] left-[11px] text-base text-lightgray inline-block w-[65px] h-[29px]">
            Orders
          </div>
          <div className="absolute top-[37px] left-[19px] inline-block w-[25px] h-[29px]">
            1x
          </div>
          <div className="absolute top-[37px] left-[155px] inline-block w-[73px] h-[29px]">
            Mocha
          </div>
          <div className="absolute top-[37px] left-[366px] inline-block w-[79px] h-[29px]">
            ₱ 130.00
          </div>
          <div className="absolute top-[66px] left-[19px] inline-block w-[25px] h-[29px]">
            1x
          </div>
          <div className="absolute top-[66.09px] left-[155px] inline-block w-[108px] h-[29px]">
            Iced Cofee
          </div>
          <div className="absolute top-[66px] left-[366px] inline-block w-[79px] h-[29px]">
            ₱ 120.00
          </div>
        </div>
        <div className="absolute top-[359.75px] left-[284.75px] rounded-3xs box-border w-[227.5px] h-[85.5px] overflow-hidden text-lightgray border-[0.5px] border-solid border-lightgray">
          <div className="absolute top-[8px] left-[11px] inline-block w-[88px] h-[29px]">
            Order Date
          </div>
          <div className="absolute top-[37px] left-[11px] text-xl text-white inline-block w-[120px] h-[29px]">
            23 Feb 2023
          </div>
        </div>
        <div className="absolute top-[869.84px] left-[120.75px] rounded-3xs box-border w-[150.5px] h-[50.5px] overflow-hidden text-xl border-[0.5px] border-solid border-lightgray">
          <div className="absolute top-[10px] left-[15px] inline-block w-[120px] h-[29px]">
            Confirm
          </div>
        </div>
        <div
          className="absolute top-[869.84px] left-[280.75px] rounded-3xs box-border w-[150.5px] h-[50.5px] overflow-hidden cursor-pointer text-xl border-[0.5px] border-solid border-lightgray"
          onClick={onFrameContainer4Click}
        >
          <div className="absolute top-[10px] left-[15px] inline-block w-[120px] h-[29px]">
            Cancel
          </div>
        </div>
        <div className="absolute top-[463.75px] left-[39.75px] rounded-3xs box-border w-[227.5px] h-[85.5px] overflow-hidden text-lightgray border-[0.5px] border-solid border-lightgray">
          <div className="absolute top-[8px] left-[11px] inline-block w-[138px] h-[29px]">
            Payment Method
          </div>
          <div className="absolute top-[37px] left-[11px] text-xl text-white inline-block w-[54px] h-[29px]">
            Cash
          </div>
        </div>
        <div className="absolute top-[463.75px] left-[284.75px] rounded-3xs box-border w-[227.5px] h-[85.5px] overflow-hidden text-lightgray border-[0.5px] border-solid border-lightgray">
          <div className="absolute top-[8px] left-[11px] inline-block w-[89px] h-[29px]">
            Order Time
          </div>
          <div className="absolute top-[37.09px] left-[11px] text-xl text-white inline-block w-[76px] h-[29px]">
            11:25 PM
          </div>
        </div>
      </div>
      <div className="absolute h-[10.16%] w-[18.12%] top-[0%] right-[40.94%] bottom-[89.84%] left-[40.94%] rounded-[50%] bg-gray-100" />
      <img
        className="absolute h-[5.22%] w-[9.96%] top-[2.1%] right-[45.02%] bottom-[92.68%] left-[45.02%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/-icon-question-mark-circle.svg"
      />
    </div>
  );
};

export default ISORDER;
