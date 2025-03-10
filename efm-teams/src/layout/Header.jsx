import { Link } from "react-router-dom";
import Menu from "./Menu";

function Header(){
    return(
        <header class="flex mx-auto justify-between items-center max-w-[1300px] py-4 ">
        <div class="flex items-center gap-3"><svg class="w-10 md:w-16 lg:w-24 h-10 md:h-16 lg:h-24 "
                viewBox="0 0 102 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100.772 41.2578C102.108 48.9756 93.9123 46.9199 93.9123 46.9199C90.4822 37.2546 84.9941 38.1563 84.9941 38.1563C89.2907 41.2939 89.6157 43.9626 89.6157 43.9626C78.17 35.8481 62.6082 42.3758 56.6868 45.4413C53.365 40.7529 46.6493 30.2581 49.0323 25.4976C52.1735 19.2585 58.5643 22.8289 58.5643 22.8289C71.4904 22.6125 70.7682 17.9962 70.7682 17.9962C67.3382 20.665 57.2284 17.9962 57.2284 17.9962C66.0022 17.9962 69.7212 14.4259 69.7212 14.4259C63.1859 16.0488 55.8925 9.08833 55.8925 9.08833C53.2206 -4.58009 40.8723 1.22629 40.8723 1.22629C48.599 -0.108098 46.541 8.07853 46.541 8.07853C36.8645 11.5046 37.7672 16.9864 37.7672 16.9864C40.9084 12.6948 43.5803 12.3702 43.5803 12.3702C34.7343 24.8124 43.2553 42.1233 45.7828 46.6314C41.1612 49.8411 30.3293 56.9098 25.455 54.4574C19.2086 51.3198 22.7831 44.9364 22.7831 44.9364C22.6387 32.0253 18.0171 32.7466 18.0171 32.7466C20.6889 36.1727 18.0171 46.2708 18.0171 46.2708C18.0171 37.5071 14.4426 33.7925 14.4426 33.7925C16.0674 40.3201 9.09886 47.6051 9.09886 47.6051C-4.58539 50.2739 1.2277 62.6079 1.2277 62.6079C-0.108225 54.8901 8.08788 56.9458 8.08788 56.9458C11.518 66.6111 17.0061 65.7095 17.0061 65.7095C12.7095 62.5719 12.3845 59.9031 12.3845 59.9031C24.4801 68.4864 41.1973 60.6965 46.2521 57.9556C49.6461 62.8243 55.9647 72.8502 53.6178 77.5025C50.4766 83.7417 44.0858 80.1713 44.0858 80.1713C31.1597 80.3156 31.8819 84.9318 31.8819 84.9318C35.312 82.263 45.4217 84.9318 45.4217 84.9318C36.6479 84.9318 32.9289 88.5022 32.9289 88.5022C39.4642 86.8793 46.7576 93.8397 46.7576 93.8397C49.4295 107.508 61.7778 101.702 61.7778 101.702C54.0511 103.036 56.1091 94.8495 56.1091 94.8495C65.7856 91.4234 64.8829 85.9416 64.8829 85.9416C61.7417 90.2333 59.0698 90.5579 59.0698 90.5579C67.7353 78.4042 59.7558 61.5621 57.0479 56.6212C61.9583 53.1951 71.8875 47.0642 76.473 49.3723C82.7194 52.5099 79.1449 58.8933 79.1449 58.8933C79.2893 71.8044 83.9109 71.0831 83.9109 71.0831C81.239 67.657 83.9109 57.5589 83.9109 57.5589C83.9109 66.3226 87.4854 70.0372 87.4854 70.0372C85.8606 63.5095 92.8291 56.2245 92.8291 56.2245C106.586 53.5918 100.772 41.2578 100.772 41.2578Z"
                    fill="url(#paint0_linear_1_6)"></path>
                <defs>
                    <linearGradient id="paint0_linear_1_6" x1="50.9966" y1="0.00115967" x2="50.9966" y2="102.927"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C0B7E8"></stop>
                        <stop offset="1" stop-color="#8176AF"></stop>
                    </linearGradient>
                </defs>
            </svg><svg class="w-8 md:w-12 lg:w-20 leading-5 md:h-7 lg:h-12 " viewBox="0 0 76 46" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H2.32086V27.4049H9.25075V0H11.5716V46H9.25075V29.7131H2.32086V46H0V0Z"
                    fill="url(#paint0_linear_1_10)"></path>
                <path
                    d="M28.7329 0L22.9798 29.7131V46H20.6589V29.7131L14.8731 0H16.9978L21.8357 24.7717L26.6408 0H28.7329Z"
                    fill="url(#paint1_linear_1_10)"></path>
                <path
                    d="M38.997 46H32.0344V0H38.9643C41.5467 0 43.5733 2.04806 43.5733 4.58375V41.3837C43.606 43.8869 41.5467 46 38.997 46ZM34.3553 2.30813V43.6919H38.9643C40.2065 43.6919 41.2852 42.6516 41.2852 41.3837V4.58375C41.2852 3.34841 40.2392 2.27562 38.9643 2.27562H34.3553V2.30813Z"
                    fill="url(#paint2_linear_1_10)"></path>
                <path
                    d="M58.806 46H56.4198L52.3338 29.7131H49.5553V46H47.2344V0H54.1643C56.7467 0 58.7733 2.04806 58.7733 4.58375V25.0968C58.7733 27.4049 56.9755 29.3555 54.6873 29.6155L58.806 46ZM49.5553 27.4049H54.1643C55.4064 27.4049 56.4852 26.3647 56.4852 25.0968V4.58375C56.4852 3.34841 55.4391 2.27562 54.1643 2.27562H49.5553V27.4049Z"
                    fill="url(#paint3_linear_1_10)"></path>
                <path
                    d="M65.8013 29.7131L64.1996 46H62.1075L66.7492 0H71.3583L75.9673 46H73.8753L72.2735 29.7131H65.8013ZM69.495 2.30813H68.5798L66.0628 27.4049H72.012L69.495 2.30813Z"
                    fill="url(#paint4_linear_1_10)"></path>
                <defs>
                    <linearGradient id="paint0_linear_1_10" x1="5.78581" y1="0" x2="5.78581" y2="46"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C0B7E8"></stop>
                        <stop offset="1" stop-color="#8176AF"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_1_10" x1="21.803" y1="0" x2="21.803" y2="46"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C0B7E8"></stop>
                        <stop offset="1" stop-color="#8176AF"></stop>
                    </linearGradient>
                    <linearGradient id="paint2_linear_1_10" x1="37.8041" y1="0" x2="37.8041" y2="46"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C0B7E8"></stop>
                        <stop offset="1" stop-color="#8176AF"></stop>
                    </linearGradient>
                    <linearGradient id="paint3_linear_1_10" x1="53.0202" y1="0" x2="53.0202" y2="46"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C0B7E8"></stop>
                        <stop offset="1" stop-color="#8176AF"></stop>
                    </linearGradient>
                    <linearGradient id="paint4_linear_1_10" x1="69.0374" y1="0" x2="69.0374" y2="46"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C0B7E8"></stop>
                        <stop offset="1" stop-color="#8176AF"></stop>
                    </linearGradient>
                </defs>
            </svg></div>
        
        <Menu/>
        <div >
            <Link to="/login">
            <button >CONTACT</button>
            </Link>
            
            
        </div>
        <button class="sm:hidden inline-block"><svg width="33" height="26" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="33" height="3.71429" rx="1.85714" fill="url(#paint0_linear_13_83)"></rect><rect y="22.2857" width="33" height="3.71429" rx="1.85714" fill="url(#paint1_linear_13_83)"></rect><rect x="9" y="11.1429" width="24" height="3.71429" rx="1.85714" fill="url(#paint2_linear_13_83)"></rect><defs><linearGradient id="paint0_linear_13_83" x1="-8.62252e-09" y1="3.46667" x2="36.0395" y2="3.46666" gradientUnits="userSpaceOnUse"><stop stop-color="#C0B7E8"></stop><stop offset="1" stop-color="#8176AF"></stop></linearGradient><linearGradient id="paint1_linear_13_83" x1="-3.90789" y1="26" x2="33" y2="26" gradientUnits="userSpaceOnUse"><stop stop-color="#C0B7E8"></stop><stop offset="1" stop-color="#8176AF"></stop></linearGradient><linearGradient id="paint2_linear_13_83" x1="5.21062" y1="13" x2="33.0001" y2="13" gradientUnits="userSpaceOnUse"><stop stop-color="#C0B7E8"></stop><stop offset="1" stop-color="#8176AF"></stop></linearGradient></defs></svg></button>
    </header>
    )
}
export default Header;