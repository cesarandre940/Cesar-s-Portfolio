export const Badge = ({ children }) => {
    return (
      <div className="flex items-center">
        <span className="relative inline-flex overflow-hidden p-[2px] rounded-md transition duration-200 hover:-translate-y-0.5 ">
          <span className="absolute inset-[-1000%] animate-[spin_1.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51c7e4_0%,#2b7fff_50%,#51E4B8_100%)]"></span>
          <div className="inline-flex items-center justify-center w-full  text-sm text-white bg-black cursor-pointer backdrop-blur-3xl whitespace-nowrap rounded-md font-medium relative z-10">
            {children}
          </div>
        </span>
      </div>
    );
  };

export default Badge
  