function Close() {
    return (
      <div className="relative z-10 flex h-[1.8rem] w-[1.8rem] rounded-full border border-[#7A70B3] bg-[#DCFDFF] p-1 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none">
        <Cross className="absolute left-[0.01rem] top-[0.01rem]" />
      </div>
    );
  }
  
  export default Close;
  
  export function Cross(props: React.ComponentProps<"svg">) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        {...props}
      >
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m13.5 4.5-9 9m0-9 9 9"
        />
      </svg>
    );
  }
  