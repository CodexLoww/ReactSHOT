import { useCallback } from "react";
import { useRouter } from "next/router";

const DASHBOARD = () => {
  const router = useRouter();

  const onMenuTextClick = useCallback(() => {
    router.push("/f-i-n-a-l-m-e-n-u-admin");
  }, [router]);

  const onInventoryTextClick = useCallback(() => {
    router.push("/i-n-v-e-n-t-o-r-y");
  }, [router]);

  const onSalesHistoryTextClick = useCallback(() => {
    router.push("/s-a-l-e-s-h-i-s-t-o-r-y");
  }, [router]);

  const onSettingsTextClick = useCallback(() => {
    router.push("/s-e-t-t-i-n-g-s-staff");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[1023px] overflow-hidden text-left text-xl text-lightgray font-poppins">
      <div className="absolute top-[104px] left-[288px] bg-whitesmoke w-[1032px] h-[920px] overflow-hidden text-dimgray-200">
        <div className="absolute top-[524px] left-[581px] w-[388px] h-[531px]">
          <div className="absolute top-[45px] left-[23px] rounded-mini bg-white w-[346px] h-[152px] overflow-hidden">
            <div className="absolute top-[24px] left-[109px] font-semibold">
              Frappuccino
            </div>
            <div className="absolute top-[64px] left-[109px] text-base font-semibold">
              Items sold: 98
            </div>
          </div>
          <img
            className="absolute top-[15px] left-[0px] rounded-[244.5px] w-[117.11px] h-[193px] object-cover"
            alt=""
            src="/14-3@2x.png"
          />
          <img
            className="absolute top-[41px] left-[333px] w-[55px] h-20 object-cover"
            alt=""
            src="/promot3-1@2x.png"
          />
          <div className="absolute top-[379px] left-[23px] rounded-mini bg-white w-[346px] h-[152px] overflow-hidden" />
          <div className="absolute top-[212px] left-[23px] rounded-mini bg-white w-[346px] h-[152px] overflow-hidden" />
          <div className="absolute top-[0px] left-[23px] font-semibold text-gray-200">
            Top Seller
          </div>
          <div className="absolute top-[15px] left-[322px] text-sm font-semibold">
            See all
          </div>
        </div>
        <div className="absolute top-[524px] left-[91px] w-[359px] h-[379px] text-gray-200">
          <div className="absolute top-[45px] left-[0px] rounded-mini bg-white w-[359px] h-[334px] overflow-x-auto" />
          <div className="absolute top-[0px] left-[0px] font-semibold">
            Summary of Orders
          </div>
          <div className="absolute top-[15px] left-[312px] text-sm font-semibold text-dimgray-200">
            See all
          </div>
        </div>
        <div className="absolute top-[978px] left-[94px] rounded-mini bg-white w-[356px] h-[89px] overflow-x-auto" />
        <div className="absolute top-[12px] left-[42px] w-[950px] h-[518px]">
          <div className="absolute h-[96.53%] w-full top-[0%] right-[0%] bottom-[3.47%] left-[0%] rounded-mini bg-white overflow-x-auto">
            <img
              className="absolute top-[0px] left-[0px] rounded-3xs w-[950px] h-[500px] object-cover"
              alt=""
              src="/promot2@2x.png"
            />
          </div>
          <div className="absolute h-[1.93%] w-[10.53%] top-[98.07%] right-[45.68%] bottom-[0%] left-[43.79%] rounded-31xl bg-darkslategray-200 overflow-hidden" />
          <div className="absolute h-[1.93%] w-[1.05%] top-[98.07%] right-[43.68%] bottom-[0%] left-[55.26%] rounded-31xl bg-darkslategray-200 overflow-hidden opacity-[0.5]" />
          <div className="absolute h-[1.93%] w-[1.05%] top-[98.07%] right-[42.42%] bottom-[0%] left-[56.53%] rounded-31xl bg-darkslategray-200 overflow-hidden opacity-[0.5]" />
        </div>
      </div>
      <div className="absolute top-[31px] left-[330px] text-13xl font-semibold text-gray-200">
        Dashboard
      </div>
      <div className="absolute top-[0px] left-[0px] bg-black w-72 h-[1024px] overflow-hidden text-base">
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
        <div
          className="absolute top-[183px] left-[30px] font-medium cursor-pointer"
          onClick={onMenuTextClick}
        >
          Menu
        </div>
        <div className="absolute top-[119px] left-[14px] rounded-mini bg-gray-500 w-[260px] h-[50px] overflow-hidden text-white">
          <div className="absolute top-[13px] left-[17px] font-medium">
            Dashboard
          </div>
        </div>
        <div className="absolute top-[272px] left-[14px] rounded-mini bg-gray-500 w-[260px] h-[50px] overflow-hidden hidden" />
        <div className="absolute top-[221px] left-[14px] rounded-mini bg-gray-500 w-[260px] h-[50px] overflow-hidden hidden" />
        <img
          className="absolute top-[343px] left-[20px] w-[247.5px] h-0.5"
          alt=""
          src="/vector-4.svg"
        />
        <div
          className="absolute top-[234px] left-[30px] font-medium cursor-pointer"
          onClick={onInventoryTextClick}
        >
          Inventory
        </div>
        <div
          className="absolute top-[285px] left-[31px] font-medium cursor-pointer"
          onClick={onSalesHistoryTextClick}
        >
          Sales History
        </div>
        <div
          className="absolute top-[366px] left-[30px] font-semibold cursor-pointer"
          onClick={onSettingsTextClick}
        >
          Settings
        </div>
      </div>
      <div className="absolute top-[0px] left-[1321px] bg-black [filter:blur(4px)] w-[434px] h-[1024px] overflow-hidden">
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

export default DASHBOARD;
