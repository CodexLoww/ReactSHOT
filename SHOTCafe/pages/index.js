import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import PortalPopup from "../components/portal-popup";
import Incorrect from "../components/incorrect";

const ISADMIN = () => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/f-i-n-a-l-m-e-n-u-admin");
  }, [router]);

  const onFrameContainer1Click = useCallback(() => {
    router.push("/f-i-n-a-l-m-e-n-u-staff");
  }, [router]);

  const [isIncorrectOpen, setIncorrectOpen] = useState(false);
  const openIncorrect = useCallback(() => {
    setIncorrectOpen(true);
  }, []);
  
  const closeIncorrect = useCallback(() => {
    setIncorrectOpen(false);
  }, []);

  // Assume you have defined the `onFrameContainerClick` and `onFrameContainer1Click` functions to handle the button clicks.

function handleAdminLogin() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === 'admin' && password === 'admin') {
    // Logic for admin login
    console.log('Admin login successful');
    onFrameContainerClick();
  } else {
    // Logic for incorrect credentials
    openIncorrect();
    console.log('Invalid username or password');
  }
}

function handleStaffLogin() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === 'staff' && password === 'staff') {
    // Logic for staff login
    console.log('Staff login successful');
    onFrameContainer1Click();
  } else {
    // Logic for incorrect credentials
    openIncorrect();
    console.log('Invalid username or password');
  }
}

  return (
    <>
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-base text-white font-poppins">
      <div className="absolute top-[119px] left-[992px] rounded-6xl bg-gray-300 w-[660px] h-[786px] overflow-hidden">
        <img
          className="absolute top-[93px] left-[170px] w-[150px] h-[103.35px] object-cover"
          alt=""
          src="/16@2x.png"
        />
        <div className="absolute top-[125px] left-[320px] text-13xl font-semibold text-lightgray">
          SHOT Café
        </div> 
        <form>
          <div className="absolute top-[327px] left-[130px] rounded-3xs bg-lightgray w-[400px] h-[60px] overflow-hidden">
            <input type="text" name="username" id="username" className="w-full h-full px-4 font-poppins" />
          </div>
          <div className="absolute top-[303px] left-[130px] font-poppins">User</div>
          <div className="absolute top-[464px] left-[130px] rounded-3xs bg-lightgray w-[400px] h-[60px] overflow-hidden">
            <input type="password" name="password" id="password" className="w-full h-full px-4 font-poppins" />
          </div>
          <div className="absolute top-[440px] left-[135px] font-poppins">Password</div>
        </form>
        <div
          className="absolute top-[656px] left-[130px] rounded-3xs bg-lightseagreen w-[187px] h-[45px] overflow-hidden cursor-pointer text-xl"
          onClick={handleAdminLogin}
        >
          <div className="absolute top-[8px] left-[60px] font-medium">
            Admin
          </div>
        </div>

        <div
          className="absolute top-[656px] left-[346px] rounded-3xs bg-lightseagreen w-[184px] h-[45px] overflow-hidden cursor-pointer text-xl"
          onClick={handleStaffLogin}
        >
          <div className="absolute top-[8px] left-[69px] font-medium">
            Staff
          </div>
        </div>
      </div>
      <div className="absolute top-[988px] left-[1237px] w-[198px] h-9 text-xl text-black">
        <div className="absolute top-[3px] left-[34px] font-medium">
          SHOT Cafe, 2023
        </div>
        <div className="absolute top-[0px] left-[0px] text-5xl font-semibold">
          ©
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-darkslategray-200 w-[877px] h-[1024px] overflow-hidden text-5xl text-lightgray">
        <img
          className="absolute top-[287px] left-[162px] w-[553px] h-[381px] object-cover"
          alt=""
          src="/15@2x.png"
        />
        <div className="absolute top-[729px] left-[231px] font-semibold">{`SHOT Café! : A Point of Sale System `}</div>
      </div>
    </div>
    {isIncorrectOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeIncorrect}
        >
          <Incorrect onClose={closeIncorrect} />
        </PortalPopup>
      )}
    </>
  );
};

export default ISADMIN;
