import { useCallback } from "react";
import { useRouter } from "next/router";

const END = ({ onClose }) => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="relative w-[415px] h-[415px] max-w-full max-h-full overflow-auto text-center text-xl text-darkslategray-200 font-inter">
      <div className="absolute h-[81.93%] w-full top-[18.07%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden">
        <div
          className="absolute top-[247px] left-[43px] rounded-8xs bg-tomato w-[330px] h-[50px] overflow-hidden cursor-pointer text-white"
          onClick={onFrameContainerClick}
        >
          <div className="absolute top-[12px] left-[117px] font-semibold inline-block w-24 h-[25px]">
            OK
          </div>
        </div>
        <div className="absolute top-[95px] left-[101px] text-13xl font-semibold inline-block w-[213px] h-[38px]">
          Are you sure?
        </div>
        <div className="absolute top-[160px] left-[43px] font-medium font-poppins inline-block w-[330px] h-[60px]">
          <p className="m-0">Are you sure to terminate</p>
          <p className="m-0">SHOT POS?</p>
        </div>
      </div>
      <div className="absolute h-[36.14%] w-[36.14%] top-[0%] right-[31.81%] bottom-[63.86%] left-[32.05%] rounded-[50%] bg-tomato" />
      <img
        className="absolute h-[9.77%] w-[9.77%] top-[13.07%] right-[45.12%] bottom-[77.16%] left-[45.12%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector-10.svg"
      />
      <img
        className="absolute h-[9.77%] w-[9.77%] top-[13.07%] right-[45.12%] bottom-[77.16%] left-[45.12%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector-11.svg"
      />
    </div>
  );
};

export default END;
