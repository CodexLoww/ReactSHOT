import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

const FINALMENUStaff = () => {
  const router = useRouter();

  const onFrameIcon1Click = useCallback(() => {
    router.push("/w-i-t-h-a-d-d-e-d-i-t-e-m-staff");
  }, [router]);

  const onSettingsTextClick = useCallback(() => {
    router.push("/s-e-t-t-i-n-g-s-staff");
  }, [router]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative bg-white w-full h-[1023px] overflow-hidden text-left text-lg text-lightgray font-poppins">
      <div className="absolute top-[104px] left-[289px] bg-whitesmoke w-[1032px] h-[920px] overflow-hidden text-white">
        <div className="absolute top-[16px] left-[16px] rounded-6xl bg-gray-400 w-[107px] h-[46px] overflow-hidden">
          <div className="absolute top-[9px] left-[32px] w-11 h-[27px]">
            <div className="absolute top-[0px] left-[0px] font-semibold">
              Cafe
            </div>
          </div>
        </div>
        <div className="absolute top-[16px] left-[145px] rounded-6xl bg-gray-400 w-48 h-[46px] overflow-hidden">
          <div className="absolute top-[9px] left-[32px] w-[132px] h-[27px]">
            <div className="absolute top-[0px] left-[0px] font-semibold">
              Premium Cafe
            </div>
          </div>
        </div>
        <div className="absolute top-[80px] left-[16px] rounded-mini bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_101px_28px_rgba(0,_0,_0,_0),_0px_65px_26px_rgba(0,_0,_0,_0.01),_0px_36px_22px_rgba(0,_0,_0,_0.03),_0px_16px_16px_rgba(0,_0,_0,_0.05),_0px_4px_9px_rgba(0,_0,_0,_0.06),_0px_0px_0px_rgba(0,_0,_0,_0.06)] w-[1000px] h-[380px] overflow-x-auto text-base text-darkslategray-200">
          <div className="absolute top-[19px] left-[23px] w-[237px] h-[157px]">
            <div className="absolute top-[14px] left-[37px] rounded-6xl bg-whitesmoke w-[200px] h-[134px] overflow-hidden">
              <div className="absolute top-[17px] left-[73px] font-semibold">
                Iced Coffee
              </div>
              <div className="absolute top-[90px] left-[119px] text-mini font-semibold inline-block w-2.5">
                0
              </div>
              <img
                className="absolute top-[86px] left-[73px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-25.svg"
              />
              <img
                className="absolute top-[86px] left-[141px] rounded-lg w-[34px] h-[30px] overflow-hidden cursor-pointer"
                alt=""
                src="/frame-26.svg"
                onClick={onFrameIcon1Click}
              />
              <div className="absolute top-[43px] left-[73px] text-sm font-medium inline-block w-[61px]">
                ₱ 120.00
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[-4px] w-[114px] h-[165px] object-cover"
              alt=""
              src="/4@2x.png"
            />
          </div>
          <div className="absolute top-[21px] left-[266px] w-[225px] h-[157px]">
            <div className="absolute top-[13px] left-[25px] rounded-6xl bg-whitesmoke w-[200px] h-[134px] overflow-hidden">
              <div className="absolute top-[17px] left-[81px] font-semibold">
                Latte Coffee
              </div>
              <div className="absolute top-[43px] left-[81px] text-sm font-medium inline-block w-14">
                ₱ 125.00
              </div>
              <div className="absolute top-[92px] left-[127px] text-mini font-semibold inline-block w-2.5">
                0
              </div>
              <img
                className="absolute top-[88px] left-[81px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-25.svg"
              />
              <img
                className="absolute top-[88px] left-[149px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-26.svg"
              />
            </div>
            <img
              className="absolute top-[0px] left-[-4px] w-[114px] h-[165px] object-cover"
              alt=""
              src="/5@2x.png"
            />
          </div>
          <div className="absolute top-[20px] left-[505px] w-[233px] h-[157px] text-mini">
            <div className="absolute top-[12px] left-[33px] rounded-6xl bg-whitesmoke w-[200px] h-[134px] overflow-hidden">
              <div className="absolute top-[92px] left-[130px] font-semibold inline-block w-2.5">
                0
              </div>
              <img
                className="absolute top-[88px] left-[84px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-25.svg"
              />
              <img
                className="absolute top-[88px] left-[152px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-26.svg"
              />
              <div className="absolute top-[17px] left-[83px] text-base font-semibold">
                Americano
              </div>
              <div className="absolute top-[43px] left-[83px] text-sm font-medium inline-block w-[55px]">
                ₱ 110.00
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[-4px] w-[114px] h-[165px] object-cover"
              alt=""
              src="/6@2x.png"
            />
          </div>
          <div className="absolute top-[16px] left-[743px] w-[233px] h-[157px]">
            <div className="absolute top-[17px] left-[33px] rounded-6xl bg-whitesmoke w-[200px] h-[134px] overflow-hidden">
              <div className="absolute top-[16px] left-[79px] font-semibold">
                White Coffee
              </div>
              <div className="absolute top-[91px] left-[125px] text-mini font-semibold inline-block w-2.5">
                0
              </div>
              <img
                className="absolute top-[87px] left-[79px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-25.svg"
              />
              <img
                className="absolute top-[87px] left-[147px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-26.svg"
              />
              <div className="absolute top-[42px] left-[80px] text-sm font-medium inline-block w-[55px]">
                ₱ 110.00
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[-4px] w-[115px] h-[165px] object-cover"
              alt=""
              src="/7@2x.png"
            />
          </div>
          <div className="absolute top-[200px] left-[27px] w-[234px] h-[157px] text-sm">
            <div className="absolute top-[15px] left-[34px] rounded-6xl bg-whitesmoke w-[200px] h-[134px] overflow-hidden">
              <div className="absolute top-[43px] left-[82px] font-medium inline-block w-[55px]">
                ₱ 110.00
              </div>
              <div className="absolute top-[91px] left-[125px] text-mini font-semibold inline-block w-2.5">
                0
              </div>
              <img
                className="absolute top-[87px] left-[79px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-25.svg"
              />
              <img
                className="absolute top-[87px] left-[147px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-26.svg"
              />
              <div className="absolute top-[17px] left-[82px] text-base font-semibold">
                Brown Coffee
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[-4px] w-[115px] h-[165px] object-cover"
              alt=""
              src="/8@2x.png"
            />
          </div>
          <div className="absolute top-[200px] left-[261px] w-[231px] h-[157px] text-mini">
            <div className="absolute top-[15px] left-[31px] rounded-6xl bg-whitesmoke w-[200px] h-[134px] overflow-hidden">
              <div className="absolute top-[91px] left-[125px] font-semibold inline-block w-2.5">
                0
              </div>
              <img
                className="absolute top-[87px] left-[79px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-25.svg"
              />
              <img
                className="absolute top-[87px] left-[147px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-26.svg"
              />
              <div className="absolute top-[43px] left-[82px] text-sm font-medium inline-block w-[55px]">
                ₱ 110.00
              </div>
              <div className="absolute top-[17px] left-[82px] text-base font-semibold">
                Red Eye
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[-4px] w-[115px] h-[165px] object-cover"
              alt=""
              src="/9@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[31px] left-[330px] text-13xl font-semibold text-gray-200">
        Menu
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
        <div className="absolute top-[125px] left-[14px] rounded-mini bg-gray-500 w-[260px] h-[50px] overflow-hidden text-white">
          <div className="absolute top-[13px] left-[16px] font-medium">
            Menu
          </div>
        </div>
        <div className="absolute top-[119px] left-[14px] rounded-mini bg-gray-500 w-[260px] h-[50px] overflow-hidden hidden" />
        <div className="absolute top-[272px] left-[14px] rounded-mini bg-gray-500 w-[260px] h-[50px] overflow-hidden hidden" />
        <div className="absolute top-[221px] left-[14px] rounded-mini bg-gray-500 w-[260px] h-[50px] overflow-hidden hidden" />
        <img
          className="absolute top-[194px] left-[20px] w-[247.5px] h-0.5"
          alt=""
          src="/vector-4.svg"
        />
        <div
          className="absolute top-[216px] left-[21px] font-semibold cursor-pointer"
          onClick={onSettingsTextClick}
        >
          Settings
        </div>
      </div>
      <div className="absolute top-[0px] left-[1321px] bg-black w-[434px] h-[1024px] overflow-hidden text-xl">
        <div className="absolute top-[0px] left-[0px] bg-gray-500 w-[434px] h-[104px] overflow-hidden text-3xl">
          <b className="absolute top-[21px] left-[40px]">Current Order</b>
          <div className="absolute top-[54px] left-[40px] text-mini font-semibold inline-block w-[184px]">
            {currentTime.toLocaleTimeString()} - {currentTime.toLocaleDateString()}
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
        <div className="absolute top-[761px] left-[300px] text-5xl font-medium">
          ₱
        </div>
      </div>
      <div className="absolute top-[611px] left-[305px] rounded-mini bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_117px_33px_rgba(0,_0,_0,_0),_0px_75px_30px_rgba(0,_0,_0,_0.01),_0px_42px_25px_rgba(0,_0,_0,_0.03),_0px_19px_19px_rgba(0,_0,_0,_0.05),_0px_5px_10px_rgba(0,_0,_0,_0.06),_0px_0px_0px_rgba(0,_0,_0,_0.06)] w-[1000px] h-[380px] overflow-x-auto text-mini text-darkslategray-200">
        <div className="absolute top-[17px] left-[26px] w-[234px] h-[159.82px]">
          <div className="absolute top-[17px] left-[34px] rounded-6xl bg-whitesmoke w-[200px] h-[134px] overflow-hidden">
            <div className="absolute top-[18px] left-[73.17px] font-semibold">
              Frappuccino
            </div>
            <div className="absolute top-[41px] left-[73.17px] text-sm font-medium inline-block w-[58px]">
              ₱ 120.00
            </div>
            <div className="absolute top-[86px] left-[73.17px] w-[102px] h-[30px]">
              <div className="absolute top-[4px] left-[46px] font-semibold inline-block w-2.5">
                0
              </div>
              <img
                className="absolute top-[0px] left-[0px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-21.svg"
              />
              <img
                className="absolute top-[0px] left-[68px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-22.svg"
              />
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[-4px] w-[98.01px] h-[167.82px] object-cover"
            alt=""
            src="/14-1@2x.png"
          />
        </div>
        <div className="absolute top-[17px] left-[508px] w-[228.83px] h-[163px]">
          <div className="absolute top-[17px] left-[28.83px] rounded-6xl bg-whitesmoke w-[200px] h-[134px] overflow-hidden">
            <div className="absolute top-[86px] left-[73.17px] w-[102px] h-[30px]">
              <div className="absolute top-[4px] left-[46px] font-semibold inline-block w-2.5">
                0
              </div>
              <img
                className="absolute top-[0px] left-[0px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-25.svg"
              />
              <img
                className="absolute top-[0px] left-[68px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-26.svg"
              />
            </div>
            <div className="absolute top-[17px] left-[73.17px] text-base font-semibold">
              Affogato
            </div>
            <div className="absolute top-[42px] left-[73.17px] text-sm font-medium inline-block w-[57px]">
              ₱ 150.00
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[-4px] w-[103px] h-[171px] object-cover"
            alt=""
            src="/12-1@2x.png"
          />
        </div>
        <div className="absolute top-[17px] left-[739px] w-[236.83px] h-[157px] text-base">
          <div className="absolute top-[17px] left-[36.83px] rounded-6xl bg-whitesmoke w-[200px] h-[134px] overflow-hidden">
            <div className="absolute top-[11px] left-[73.17px] font-semibold inline-block w-14">
              Mocha
            </div>
            <div className="absolute top-[36px] left-[73.17px] text-sm font-medium inline-block w-14">
              ₱ 130.00
            </div>
            <div className="absolute top-[80px] left-[73.17px] w-[102px] h-[30px] text-mini">
              <div className="absolute top-[4px] left-[46px] font-semibold inline-block w-2.5">
                0
              </div>
              <img
                className="absolute top-[0px] left-[0px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-25.svg"
              />
              <img
                className="absolute top-[0px] left-[68px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-26.svg"
              />
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[-4px] w-[115px] h-[165px] object-cover"
            alt=""
            src="/2@2x.png"
          />
        </div>
        <div className="absolute top-[202px] left-[264px] w-[226.83px] h-[157px] text-base">
          <div className="absolute top-[19px] left-[26.83px] rounded-6xl bg-whitesmoke w-[200px] h-[134px] overflow-hidden">
            <div className="absolute top-[12px] left-[73.17px] font-semibold">
              Flat White
            </div>
            <div className="absolute top-[37px] left-[73.17px] text-sm font-medium inline-block w-[52px]">
              ₱ 110.00
            </div>
            <div className="absolute top-[81px] left-[73.17px] w-[102px] h-[30px] text-mini">
              <div className="absolute top-[4px] left-[46px] font-semibold inline-block w-2.5">
                0
              </div>
              <img
                className="absolute top-[0px] left-[0px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-25.svg"
              />
              <img
                className="absolute top-[0px] left-[68px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-26.svg"
              />
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[-4px] w-[103px] h-[165px] object-cover"
            alt=""
            src="/10@2x.png"
          />
        </div>
        <div className="absolute top-[203px] left-[23px] w-[236.83px] h-[157px]">
          <div className="absolute top-[16px] left-[36.83px] rounded-6xl bg-whitesmoke w-[200px] h-[134px] overflow-hidden">
            <div className="absolute top-[81px] left-[73.17px] w-[102px] h-[30px]">
              <div className="absolute top-[4px] left-[46px] font-semibold inline-block w-2.5">
                0
              </div>
              <img
                className="absolute top-[0px] left-[0px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-25.svg"
              />
              <img
                className="absolute top-[0px] left-[68px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-26.svg"
              />
            </div>
            <div className="absolute top-[12px] left-[73.17px] text-base font-semibold">
              Iced Espresso
            </div>
            <div className="absolute top-[36px] left-[73.17px] text-sm font-medium inline-block w-[54px]">
              ₱ 70.00
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[-4px] w-[115px] h-[165px] object-cover"
            alt=""
            src="/11@2x.png"
          />
        </div>
        <div className="absolute top-[20px] left-[264px] w-[226.72px] h-40 text-sm">
          <div className="absolute top-[14px] left-[26.72px] rounded-6xl bg-whitesmoke w-[200px] h-[134px] overflow-hidden">
            <div className="absolute top-[20px] left-[65.28px] font-semibold">
              Mocha w/ Frappe
            </div>
            <div className="absolute top-[42px] left-[65.28px] font-medium inline-block w-[65px]">
              ₱ 150.00
            </div>
            <div className="absolute top-[86px] left-[65.28px] w-[102px] h-[30px] text-mini">
              <div className="absolute top-[4px] left-[46px] font-semibold inline-block w-2.5">
                0
              </div>
              <img
                className="absolute top-[0px] left-[0px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-211.svg"
              />
              <img
                className="absolute top-[0px] left-[68px] rounded-lg w-[34px] h-[30px] overflow-hidden"
                alt=""
                src="/frame-221.svg"
              />
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[-4px] w-[98px] h-[168px] object-cover"
            alt=""
            src="/13-2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FINALMENUStaff;
