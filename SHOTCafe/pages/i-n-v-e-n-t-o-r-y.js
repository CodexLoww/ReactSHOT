import { useState, useCallback } from "react";
import Confirm1 from "../components/confirm1";
import PortalPopup from "../components/portal-popup";
import Cancelled from "../components/cancelled";
import { useRouter } from "next/router";

const INVENTORY = () => {
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [isCancelledOpen, setCancelledOpen] = useState(false);
  const router = useRouter();

  const openConfirm = useCallback(() => {
    setConfirmOpen(true);
  }, []);

  const closeConfirm = useCallback(() => {
    setConfirmOpen(false);
  }, []);

  const openCancelled = useCallback(() => {
    setCancelledOpen(true);
  }, []);

  const closeCancelled = useCallback(() => {
    setCancelledOpen(false);
  }, []);

  const onMenuTextClick = useCallback(() => {
    router.push("/f-i-n-a-l-m-e-n-u-admin");
  }, [router]);

  const onDashboardTextClick = useCallback(() => {
    router.push("/d-a-s-h-b-o-a-r-d");
  }, [router]);

  const onSalesHistoryTextClick = useCallback(() => {
    router.push("/s-a-l-e-s-h-i-s-t-o-r-y");
  }, [router]);

  const onSettingsTextClick = useCallback(() => {
    router.push("/s-e-t-t-i-n-g-s-staff");
  }, [router]);

  return (
    <>
      <div className="relative bg-white w-full h-[1023px] overflow-hidden text-left text-mini text-lightgray font-poppins">
        <div className="absolute top-[104px] left-[288px] bg-whitesmoke w-[1032px] h-[920px] overflow-hidden">
          <div className="absolute top-[139px] left-[603px] rounded-mini bg-white w-[391px] h-[299px] overflow-hidden text-xs text-dimgray-300 font-roboto">
            <div
              className="absolute top-[222px] left-[21px] rounded-3xs bg-gray-200 w-[113px] h-[47px] overflow-hidden cursor-pointer text-mini text-lightgray font-poppins"
              onClick={openConfirm}
            >
              <div className="absolute top-[12px] left-[36px] font-semibold inline-block w-[41px]">
                Save
              </div>
            </div>
            <div
              className="absolute top-[222px] left-[144px] rounded-3xs bg-gray-200 w-[113px] h-[47px] overflow-hidden cursor-pointer text-mini text-lightgray font-poppins"
              onClick={openCancelled}
            >
              <div className="absolute top-[12px] left-[29px] font-semibold inline-block w-[55px]">
                Cancel
              </div>
            </div>
            <i className="absolute top-[31px] left-[164px] text-dimgray-200">
              Product ID: 12
            </i>
            <div className="absolute top-[31px] left-[19px] rounded-mini bg-dimgray-200 w-[120px] h-[170px] overflow-x-auto text-whitesmoke">
              <i className="absolute top-[74px] left-[41px]">
                <p className="m-0">Upload</p>
                <p className="m-0">Image</p>
              </i>
            </div>
            <div className="relative">
              <input 
                className="absolute top-[57px] left-[162px] rounded-3xs bg-lightgray w-[170px] h-[30px] p-2 text-sm font-poppins"
                type="text"
                placeholder="Product Name"//para sa input yan
              />
            </div>
            <div className="relative">
              <input
                className="absolute top-[159px] left-[162px] rounded-3xs bg-lightgray w-[170px] h-[30px] p-2 text-sm font-poppins"
                type="text"
                placeholder="Category"
              />
            </div>
            <div className="relative">
              <input
                className="absolute top-[108px] left-[162px] rounded-3xs bg-lightgray w-[170px] h-[30px] p-2 text-sm font-poppins"
                type="text"
                placeholder="Product Price"
              />
            </div>
          </div>
          <div className="absolute top-[69px] left-[39px] rounded-mini bg-white w-[425px] h-[89px] overflow-x-auto" />
          <div className="absolute top-[170px] left-[39px] rounded-mini bg-white w-[425px] h-[89px] overflow-x-auto" />
          <div className="absolute top-[274px] left-[39px] rounded-mini bg-white w-[425px] h-[89px] overflow-x-auto" />
          <div className="absolute top-[375px] left-[42px] rounded-mini bg-white w-[422px] h-[89px] overflow-x-auto" />
          <div className="absolute top-[478px] left-[42px] rounded-mini bg-white w-[422px] h-[89px] overflow-x-auto" />
          <div className="absolute top-[24px] left-[39px] text-xl font-semibold text-gray-200">
            Products Available
          </div>
          <div className="absolute top-[69px] left-[617px] rounded-3xs bg-gray-200 w-[113px] h-[47px] overflow-hidden">
            <div className="absolute top-[12px] left-[39px] font-semibold inline-block w-[34px]">
              Add
            </div>
          </div>
          <div className="absolute top-[69px] left-[742px] rounded-3xs bg-gray-200 w-[113px] h-[47px] overflow-hidden">
            <div className="absolute top-[12px] left-[32px] font-semibold inline-block w-[49px]">
              Delete
            </div>
          </div>
          <div className="absolute top-[69px] left-[867px] rounded-3xs bg-gray-200 w-[113px] h-[47px] overflow-hidden">
            <div className="absolute top-[12px] left-[28px] font-semibold inline-block w-[57px]">
              Update
            </div>
          </div>
        </div>
        <div className="absolute top-[31px] left-[330px] text-13xl font-semibold text-gray-200">
          Inventory
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
          <div className="absolute top-[272px] left-[14px] rounded-mini bg-gray-500 w-[260px] h-[50px] overflow-hidden hidden" />
          <div className="absolute top-[221px] left-[14px] rounded-mini bg-gray-500 w-[260px] h-[50px] overflow-hidden" />
          <img
            className="absolute top-[343px] left-[20px] w-[247.5px] h-0.5"
            alt=""
            src="/vector-4.svg"
          />
          <div className="absolute top-[119px] left-[14px] rounded-mini bg-gray-500 w-[260px] h-[50px] overflow-hidden hidden" />
          <div
            className="absolute top-[132px] left-[31px] font-medium cursor-pointer"
            onClick={onDashboardTextClick}
          >
            Dashboard
          </div>
          <div className="absolute top-[234px] left-[30px] text-white font-medium">
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
        <div className="absolute top-[0px] left-[1321px] bg-black [filter:blur(4px)] w-[434px] h-[1024px] overflow-hidden text-xl">
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
      {isConfirmOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConfirm}
        >
          <Confirm1 onClose={closeConfirm} />
        </PortalPopup>
      )}
      {isCancelledOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCancelled}
        >
          <Cancelled onClose={closeCancelled} />
        </PortalPopup>
      )}
    </>
  );
};

export default INVENTORY;
