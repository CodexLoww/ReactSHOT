import { useState, useCallback } from "react";
import END from "../components/e-n-d";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";

const SETTINGSAdmin = () => {
  const [isENDOpen, setENDOpen] = useState(false);
  const router = useRouter();

  const openEND = useCallback(() => {
    setENDOpen(true);
  }, []);

  const closeEND = useCallback(() => {
    setENDOpen(false);
  }, []);

  const onMenuTextClick = useCallback(() => {
    router.push("/f-i-n-a-l-m-e-n-u-admin");
  }, [router]);

  const onDashboardTextClick = useCallback(() => {
    router.push("/d-a-s-h-b-o-a-r-d");
  }, [router]);

  const onInventoryTextClick = useCallback(() => {
    router.push("/i-n-v-e-n-t-o-r-y");
  }, [router]);

  const onSalesHistoryTextClick = useCallback(() => {
    router.push("/s-a-l-e-s-h-i-s-t-o-r-y");
  }, [router]);

  return (
    <>
      <div className="relative bg-white w-full h-[1023px] overflow-hidden text-left text-xl text-gray-200 font-poppins">
        <div className="absolute top-[104px] left-[288px] bg-whitesmoke w-[1032px] h-[920px] overflow-hidden">
          <div className="absolute top-[96px] left-[207px] w-[300px] h-[355px]">
            <div className="absolute top-[80px] left-[0px] rounded-6xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[300px] h-[275px] overflow-hidden">
              <div className="absolute top-[145px] left-[49px] font-semibold">
                John Louie Campos
              </div>
              <img
                className="absolute top-[224px] left-[168px] w-5 h-5 overflow-hidden"
                alt=""
                src="/social-icons.svg"
              />
              <img
                className="absolute top-[224px] left-[140px] w-5 h-5 overflow-hidden"
                alt=""
                src="/social-icons1.svg"
              />
              <img
                className="absolute top-[224px] left-[112px] w-5 h-5 overflow-hidden"
                alt=""
                src="/social-icons2.svg"
              />
              <div className="absolute top-[175px] left-[89px] text-base font-medium text-black">
                UI/UX Designer
              </div>
            </div>
            <div className="absolute top-[0px] left-[50px] rounded-[50%] bg-gainsboro w-[200px] h-[200px]" />
            <img
              className="absolute h-[56.34%] w-[66.67%] top-[0%] right-[17%] bottom-[43.66%] left-[16.33%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/camposdp@2x.png"
            />
          </div>
          <div className="absolute top-[468px] left-[207px] w-[300px] h-[355px]">
            <div className="absolute top-[80px] left-[0px] rounded-6xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[300px] h-[275px] overflow-hidden">
              <div className="absolute top-[145px] left-[75px] font-semibold">
                Leinard Rapiza
              </div>
              <img
                className="absolute top-[224px] left-[168px] w-5 h-5 overflow-hidden"
                alt=""
                src="/social-icons.svg"
              />
              <img
                className="absolute top-[224px] left-[140px] w-5 h-5 overflow-hidden"
                alt=""
                src="/social-icons1.svg"
              />
              <img
                className="absolute top-[224px] left-[112px] w-5 h-5 overflow-hidden"
                alt=""
                src="/social-icons2.svg"
              />
              <div className="absolute top-[175px] left-[89px] text-base font-medium text-black">
                UI/UX Designer
              </div>
            </div>
            <div className="absolute top-[0px] left-[50px] rounded-[50%] bg-gainsboro w-[200px] h-[200px]" />
          </div>
          <div className="absolute top-[96px] left-[526px] w-[300px] h-[355px]">
            <div className="absolute top-[80px] left-[0px] rounded-6xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[300px] h-[275px] overflow-hidden">
              <div className="absolute top-[145px] left-[63px] font-semibold">
                Juan Paolo Mejia
              </div>
              <img
                className="absolute top-[224px] left-[168px] w-5 h-5 overflow-hidden"
                alt=""
                src="/social-icons.svg"
              />
              <img
                className="absolute top-[224px] left-[140px] w-5 h-5 overflow-hidden"
                alt=""
                src="/social-icons3.svg"
              />
              <img
                className="absolute top-[224px] left-[112px] w-5 h-5 overflow-hidden"
                alt=""
                src="/social-icons2.svg"
              />
              <div className="absolute top-[175px] left-[89px] text-base font-medium text-black">
                UI/UX Designer
              </div>
            </div>
            <div className="absolute top-[0px] left-[50px] rounded-[50%] bg-gainsboro w-[200px] h-[200px]" />
          </div>
          <div className="absolute top-[468px] left-[526px] w-[300px] h-[355px]">
            <div className="absolute top-[80px] left-[0px] rounded-6xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[300px] h-[275px] overflow-hidden">
              <div className="absolute top-[145px] left-[33px] font-semibold">
                John Cedrick Tolentino
              </div>
              <img
                className="absolute top-[224px] left-[168px] w-5 h-5 overflow-hidden"
                alt=""
                src="/social-icons.svg"
              />
              <img
                className="absolute top-[224px] left-[140px] w-5 h-5 overflow-hidden"
                alt=""
                src="/social-icons3.svg"
              />
              <img
                className="absolute top-[224px] left-[112px] w-5 h-5 overflow-hidden"
                alt=""
                src="/social-icons2.svg"
              />
              <div className="absolute top-[175px] left-[89px] text-base font-medium text-black">
                UI/UX Designer
              </div>
            </div>
            <div className="absolute top-[0px] left-[50px] rounded-[50%] bg-gainsboro w-[200px] h-[200px]" />
          </div>
          <img
            className="absolute top-[468px] left-[575px] rounded-662xl-5 w-[200px] h-[200px] object-cover"
            alt=""
            src="/82877041-2073663036111699-3765205929403597562-n-1@2x.png"
          />
          <img
            className="absolute top-[468px] left-[256px] rounded-91xl w-[200px] h-[200px] object-cover"
            alt=""
            src="/image-11@2x.png"
          />
          <img
            className="absolute top-[96px] left-[576px] rounded-341xl w-[200px] h-[200px] object-cover"
            alt=""
            src="/mejiii@2x.png"
          />
          <div
            className="absolute top-[849px] left-[33px] rounded-3xs bg-gray-200 w-[113px] h-[47px] overflow-hidden cursor-pointer text-mini text-lightgray"
            onClick={openEND}
          >
            <div className="absolute top-[12px] left-[30px] font-semibold inline-block w-[53px]">
              Logout
            </div>
          </div>
        </div>
        <div className="absolute top-[155px] left-[731px] text-17xl font-semibold">
          GROUP 1
        </div>
        <div className="absolute top-[140px] left-[686px] font-medium">
          Created and Design by:
        </div>
        <div className="absolute top-[155px] left-[731px] text-17xl font-semibold">
          GROUP 1
        </div>
        <div className="absolute top-[31px] left-[330px] text-13xl font-semibold">
          Settings
        </div>
        <div className="absolute top-[0px] left-[0px] bg-black w-72 h-[1024px] overflow-hidden text-base text-lightgray">
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
          <div className="absolute top-[221px] left-[14px] rounded-mini bg-gray-500 w-[260px] h-[50px] overflow-hidden hidden" />
          <div className="absolute top-[119px] left-[14px] rounded-mini bg-gray-500 w-[260px] h-[50px] overflow-hidden hidden" />
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
          <div className="absolute top-[353px] left-[14px] rounded-mini bg-gray-500 w-[260px] h-[50px] overflow-hidden" />
          <div className="absolute top-[366px] left-[30px] font-semibold text-white">
            Settings
          </div>
        </div>
        <div className="absolute top-[0px] left-[1321px] bg-black [filter:blur(4px)] w-[434px] h-[1024px] overflow-hidden text-lightgray">
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
      {isENDOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEND}
        >
          <END onClose={closeEND} />
        </PortalPopup>
      )}
    </>
  );
};

export default SETTINGSAdmin;
