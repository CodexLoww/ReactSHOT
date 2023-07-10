import { useCallback } from "react";
import { useRouter } from "next/router";

const SALESHISTORY = () => {
  const router = useRouter();

  const onDashboardTextClick = useCallback(() => {
    router.push("/d-a-s-h-b-o-a-r-d");
  }, [router]);

  const onMenuTextClick = useCallback(() => {
    router.push("/f-i-n-a-l-m-e-n-u-admin");
  }, [router]);

  const onInventoryTextClick = useCallback(() => {
    router.push("/i-n-v-e-n-t-o-r-y");
  }, [router]);

  const onSettingsTextClick = useCallback(() => {
    router.push("/s-e-t-t-i-n-g-s-staff");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[1023px] overflow-hidden text-left text-base text-gray-200 font-poppins">
      <div className="absolute top-[104px] left-[288px] bg-whitesmoke w-[1032px] h-[920px] overflow-hidden">
        <div className="absolute top-[175px] left-[36px] rounded-3xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[968px] h-[687px] overflow-hidden" />
      </div>
      <div className="absolute top-[128px] left-[327px] text-xl font-semibold">
        Products Sold
      </div>
      <div className="absolute top-[174px] left-[1017px] w-72 h-[243px] text-darkslategray-100 font-montserrat">
        <div className="absolute h-[6.92%] w-[90.91%] top-[0%] right-[4.55%] bottom-[93.08%] left-[4.55%]">
          <div className="absolute top-[0%] left-[0%] font-medium">
            Payment Method
          </div>
        </div>
        <div className="absolute h-[20.76%] w-[90.91%] top-[9.69%] right-[4.55%] bottom-[69.55%] left-[4.55%] text-dimgray-100">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-white shadow-[0px_4px_14px_rgba(0,_0,_0,_0.1)]"  />
          <img
            className="absolute h-[11.11%] w-[4.11%] top-[45.28%] right-[7.59%] bottom-[43.61%] left-[88.3%] max-w-full overflow-hidden max-h-full opacity-[0.8]"
            alt=""
            src="/chevron.svg"
          />
          <div className="absolute h-[33.33%] w-[65.71%] top-[33.33%] right-[28.57%] bottom-[33.33%] left-[5.71%]">
            <div className="absolute top-[0%] left-[0%]">Select Method</div>
          </div>
        </div>
        <div className="absolute h-[90.31%] w-full top-[9.69%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
          <div className="absolute w-[90.91%] top-[68px] right-[4.55%] left-[4.55%] rounded-lg shadow-[0px_4px_14px_rgba(0,_0,_0,_0.1)] h-px overflow-hidden flex flex-col items-center justify-center gap-[1px] opacity-[0]">
            <div className="self-stretch relative bg-white h-11 overflow-hidden shrink-0">
              <div className="absolute top-[12px] left-[16px]">Cash</div>
            </div>
            <div className="self-stretch relative bg-white h-11 overflow-hidden shrink-0">
              <div className="absolute top-[12px] left-[16px]">GCASH</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[174px] left-[729px] w-72 h-[243px] text-darkslategray-100 font-montserrat">
        <div className="absolute h-[6.92%] w-[90.91%] top-[0%] right-[4.55%] bottom-[93.08%] left-[4.55%]">
          <div className="absolute top-[0%] left-[0%] font-medium">
            Sales Date
          </div>
        </div>
        <div className="absolute h-[20.76%] w-[90.91%] top-[9.69%] right-[4.55%] bottom-[69.55%] left-[4.55%] text-dimgray-100">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-white shadow-[0px_4px_14px_rgba(0,_0,_0,_0.1)]" />
          <img
            className="absolute h-[11.11%] w-[4.11%] top-[45.28%] right-[7.59%] bottom-[43.61%] left-[88.3%] max-w-full overflow-hidden max-h-full opacity-[0.8]"
            alt=""
            src="/chevron.svg"
          />
          <div className="absolute h-[33.33%] w-[65.71%] top-[33.33%] right-[28.57%] bottom-[33.33%] left-[5.71%]">
            <div className="absolute top-[0%] left-[0%]">Select sales data</div>
          </div>
        </div>
        <div className="absolute h-[90.31%] w-full top-[9.69%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
          <div className="absolute w-[90.91%] top-[68px] right-[4.55%] left-[4.55%] rounded-lg shadow-[0px_4px_14px_rgba(0,_0,_0,_0.1)] h-px overflow-hidden flex flex-col items-center justify-center gap-[1px] opacity-[0]">
            <div className="self-stretch relative bg-white h-11 overflow-hidden shrink-0">
              <div className="absolute top-[12px] left-[16px]">Today</div>
            </div>
            <div className="self-stretch relative bg-white h-11 overflow-hidden shrink-0">
              <div className="absolute top-[12px] left-[16px]">Past 7 days</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[31px] left-[330px] text-13xl font-semibold">
        Sales History
      </div>
      <div className="absolute top-[0px] left-[0px] bg-black w-72 h-[1024px] overflow-hidden text-lightgray">
        <div className="absolute top-[0px] left-[0px] bg-gray-500 w-72 h-[104px] overflow-hidden text-xl">
          <div className="absolute top-[39px] left-[133px] font-semibold">
            SHOT Café!
          </div>
          <img
            className="absolute top-[15px] left-[25px] w-[102px] h-[73px] object-cover"
            alt=""
            src="/black-white-square-interior-designer-logo2-1@2x.png"
          />
        </div>
        <div className="absolute top-[835px] left-[14px] rounded-3xs bg-gray-500 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[260px] h-[180px] overflow-hidden text-sm">
          <div className="absolute top-[28px] left-[130px] text-lg font-semibold">
            SHOT Café!
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[102px] h-[104px] object-cover"
            alt=""
            src="/black-white-square-interior-designer-logo2-11@2x.png"
          />
          <img
            className="absolute top-[25.5px] left-[110px] w-0.5 h-[35px]"
            alt=""
            src="/vector-3.svg"
          />
          <div className="absolute top-[79px] left-[18px] font-semibold">
            Help Center
          </div>
          <div className="absolute top-[79px] left-[149px] font-semibold">
            Legal
          </div>
          <div className="absolute top-[106px] left-[18px] text-xs inline-block w-[232px]">
            <p className="m-0">SHOT Café : A POS system created</p>
            <p className="m-0">
              by Group 1 of Polytechnic University of the Philippines 2023
            </p>
          </div>
        </div>
        <div className="absolute top-[170px] left-[14px] rounded-mini bg-gray-500 w-[260px] h-[50px] overflow-hidden hidden" />
        <div className="absolute top-[119px] left-[14px] rounded-mini bg-gray-500 w-[260px] h-[50px] overflow-hidden hidden" />
        <div className="absolute top-[272px] left-[14px] rounded-mini bg-gray-500 w-[260px] h-[50px] overflow-hidden" />
        <div className="absolute top-[221px] left-[14px] rounded-mini bg-gray-500 w-[260px] h-[50px] overflow-hidden hidden" />
        <img
          className="absolute top-[343px] left-[20px] w-[247.5px] h-0.5"
          alt=""
          src="/vector-4.svg"
        />
        <div
          className="absolute top-[132px] left-[31px] font-medium cursor-pointer"
          onClick={onDashboardTextClick}
        >
          Dashboard
        </div>
        <div
          className="absolute top-[183px] left-[30px] font-medium cursor-pointer"
          onClick={onMenuTextClick}
        >
          Menu
        </div>
        <div
          className="absolute top-[234px] left-[30px] font-medium cursor-pointer"
          onClick={onInventoryTextClick}
        >
          Inventory
        </div>
        <div className="absolute top-[285px] left-[31px] font-medium text-white">
          Sales History
        </div>
        <div
          className="absolute top-[366px] left-[30px] font-semibold cursor-pointer"
          onClick={onSettingsTextClick}
        >
          Settings
        </div>
      </div>
      <div className="absolute top-[0px] left-[1321px] bg-black [filter:blur(4px)] w-[434px] h-[1024px] overflow-hidden text-xl text-lightgray">
        <div className="absolute top-[0px] left-[0px] bg-gray-500 w-[434px] h-[104px] overflow-hidden text-3xl">
          <b className="absolute top-[21px] left-[40px]">Current Order</b>
          <div className="absolute top-[54px] left-[40px] text-mini font-semibold inline-block w-[184px]">
            12:59:09 - June 10, 2023
          </div>
        </div>
        <div className="absolute top-[122px] left-[40px] font-semibold">
          Orders
        </div>
        <div className="absolute top-[602px] left-[6px] rounded-mini bg-gray-500 w-[421px] h-[220px] overflow-hidden">
          <div className="absolute top-[35px] left-[34px] font-semibold">
            Subtotal
          </div>
          <div className="absolute top-[79px] left-[34px] text-base font-semibold">
            Add-ons
          </div>
          <div className="absolute top-[159px] left-[34px] text-5xl font-semibold">
            Total
          </div>
          <img
            className="absolute top-[144px] left-[34px] w-[367px] h-0.5"
            alt=""
            src="/vector-5.svg"
          />
        </div>
        <div className="absolute top-[867px] left-[6px] rounded-mini bg-gray-500 w-[421px] h-[152px] overflow-hidden text-mini">
          <div className="absolute top-[84px] left-[64px] rounded-3xs bg-gray-200 w-[293px] h-[47px] overflow-hidden">
            <div className="absolute top-[12px] left-[102px] font-semibold inline-block w-[89px]">
              Place Order
            </div>
          </div>
          <div className="absolute top-[21px] left-[83px] rounded-3xs bg-gray-200 w-[113px] h-[47px] overflow-hidden">
            <div className="absolute top-[12px] left-[36px] font-semibold inline-block w-[41px]">
              Cash
            </div>
          </div>
          <div className="absolute top-[21px] left-[227px] rounded-3xs bg-gray-200 w-[113px] h-[47px] overflow-hidden">
            <div className="absolute top-[12px] left-[24px] font-semibold inline-block w-[65px]">
              E-wallet
            </div>
          </div>
        </div>
        <div className="absolute top-[761px] left-[301px] text-5xl font-medium">
          ₱
        </div>
      </div>
    </div>
  );
};

export default SALESHISTORY;
