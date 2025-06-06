const Badge =()=> (
<div className="flex items-center ">
  <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
    <span
      className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51c7e4_0%,#2b7fff_50%,#51E4B8_100%)]"
    ></span>
    <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
      <slot />
    </div>
  </span>
  </div>

  )

  export default Badge