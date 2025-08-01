import { background } from "../../assets";

export const Rings = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/20 rounded-full -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-5 w-0.5 h-full bg-n-6/80"></div>
      <div className="absolute top-0 right-5 w-0.5 h-full bg-n-6/80"></div>
    </>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      <div className="absolute top-[4.4rem] left-16 w-4 h-4 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full shadow-lg shadow-[#DD734F]/20"></div>
      <div className="absolute top-[12.6rem] right-16 w-4 h-4 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full shadow-lg shadow-[#B9AEDF]/20"></div>
      <div className="absolute top-[26.8rem] left-12 w-7 h-7 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full shadow-lg shadow-[#88E5BE]/20"></div>
    </>
  );
};

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.08]">
        <img
          className="w-full h-full object-cover"
          src={background}
          width={688}
          height={953}
          alt="Background"
        />
      </div>

      <Rings />

      <SideLines />

      <BackgroundCircles />
    </div>
  );
};
