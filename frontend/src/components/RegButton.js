import { useRecoilValue } from "recoil";
import { isMobileState } from "../atoms/index";

const RegButton = ({ name, onClick }) => {
  const isMobile = useRecoilValue(isMobileState);

  return (
    <div
      className={`font-inter reg-btn w-fit h-fit px-4 p-2 text-white text-[17px] rounded-3xl bg-[#42e895] bg-opacity-80 ${
        !isMobile && "hover:bg-[#51e5a0]"
      } cursor-pointer `}
      onClick={onClick}
    >
      <button className="unselectable text-sm flex items-center">{name}</button>
    </div>
  );
};

export default RegButton;
