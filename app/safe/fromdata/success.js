export default function Success() {
  return (
    <div className="col-span-full">
      <div className="border rounded-md mb-5 border-[#363637] items-center flex px-[28px] py-[18px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
            fill="url(#paint0_linear_1_196)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_196"
              x1="10"
              y1="0"
              x2="10"
              y2="20"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#34D4AE" />
              <stop offset="1" stopColor="#095F4B" stopOpacity="0.59" />
            </linearGradient>
          </defs>
        </svg>
        <p className="pl-4">SAFE Document created successfully</p>
      </div>
      <div className="border rounded-md mb-5 border-[#363637] justify-between items-center flex px-[28px] py-[18px]">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
              fill="#3E3E3E"
            />
          </svg>
          <p className="pl-4">Download SAFE document as PDF</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="17"
          viewBox="0 0 14 17"
          fill="none"
        >
          <path d="M0 17H14V15H0M14 6H10V0H4V6H0L7 13L14 6Z" fill="#178CF9" />
        </svg>
      </div>
      <hr className="bg-[#1D1D1D] mb-4 border-1 border-[#1D1D1D]" />
      <button
        type="submit"
        className="inline-flex items-center wallet-button justify-center transition border border-1 text-base font-semibold leading-10 duration-200 capitalize text-white rounded-lg px-10 py-3 md:text-base 4xl:px-8 4xl:py-2.5"
      >
        <span className="pr-5">Create more SAFE</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="12"
          viewBox="0 0 15 12"
          fill="none"
        >
          <path
            d="M0.806474 6.62535L0.819926 5.20109L11.517 5.30212L8.22009 1.94238L9.23974 0.941815L14.2426 6.04005L9.14434 11.0429L8.14377 10.0232L11.5035 6.72637L0.806474 6.62535Z"
            fill="#825EAE"
          />
        </svg>
      </button>
    </div>
  );
}
