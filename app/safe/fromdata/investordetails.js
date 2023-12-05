export default function Investordetails() {
  return (
    <div className="col-span-full">
      <div className="col-span-full w-full mb-3">
        <label
          htmlFor="investortype"
          className="flex font-medium mb-[10px] items-center text-white text-xs"
        >
          Investor type
        </label>
        <select
          id="investortype"
          name="investortype"
          className="block bg-[#3d246617] border-[#363637] fouce:border-[#363637] w-full rounded-md border-0 shadow-sm ring-1 ring-inset px-[20px] md:px-[28px] py-[13px] focus:ring-2 ring-[#363637] focus:ring-inset focus:ring-[#363637] sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option className="text-[#363637]">Investor type</option>
          <option className="text-[#363637]">Investor type</option>
          <option className="text-[#363637]">Investor type</option>
        </select>
      </div>
      <div className="col-span-full mb-3">
        <label
          htmlFor="legal"
          className="flex font-medium mb-[10px] items-center text-[#C0C0C0] text-xs"
        >
          Investor (Legal entity name)
        </label>
        <input
          type="text"
          name="legal"
          id="legal"
          className="input-border shadow-sm inline-flex w-full focus:ring-2 focus:ring-inset focus:ring-[#f0e9e9] cursor-pointer items-center align-middle rounded-lg border border-1 px-[20px] md:px-[28px] py-[13px]"
        />
      </div>
      <div className="col-span-full mb-3">
        <label
          htmlFor="authorized"
          className="flex font-medium mb-[10px] items-center text-[#C0C0C0] text-xs"
        >
          Name of authorized signatory
        </label>
        <input
          type="text"
          name="authorized"
          id="authorized"
          className="input-border shadow-sm inline-flex w-full focus:ring-2 focus:ring-inset focus:ring-[#f0e9e9] cursor-pointer items-center align-middle rounded-lg border border-1 px-[20px] md:px-[28px] py-[13px]"
        />
      </div>
      <div className="col-span-full mb-3">
        <label
          htmlFor="signatory"
          className="flex font-medium mb-[10px] items-center text-[#C0C0C0] text-xs"
        >
          Signatory title (optional){" "}
        </label>
        <input
          type="text"
          name="signatory"
          id="signatory"
          className="input-border shadow-sm inline-flex w-full focus:ring-2 focus:ring-inset focus:ring-[#f0e9e9] cursor-pointer items-center align-middle rounded-lg border border-1 px-[20px] md:px-[28px] py-[13px]"
        />
      </div>
      <div className="col-span-full mb-3">
        <label
          htmlFor="address"
          className="flex font-medium mb-[10px] items-center text-[#C0C0C0] text-xs"
        >
          Address (optional)
        </label>
        <textarea
          type="text"
          name="address"
          id="address"
          className="input-border shadow-sm inline-flex w-full focus:ring-2 focus:ring-inset focus:ring-[#f0e9e9] cursor-pointer items-center align-middle rounded-lg border border-1 px-[20px] md:px-[28px] py-[13px]"
        />
      </div>
      <div className="col-span-full mb-3">
        <label
          htmlFor="bylines"
          className="flex font-medium mb-[10px] items-center text-[#C0C0C0] text-xs"
        >
          Additional bylines (optional)
        </label>
        <textarea
          type="text"
          name="bylines"
          id="bylines"
          className="input-border shadow-sm inline-flex w-full focus:ring-2 focus:ring-inset focus:ring-[#f0e9e9] cursor-pointer items-center align-middle rounded-lg border border-1 px-[20px] md:px-[28px] py-[13px]"
        />
      </div>
    </div>
  );
}
