export default function Companydetails() {
  return (
    <div className="step 1">
      <div className="from group mb-3">
        <label className="flex font-medium mb-[10px] items-center text-white text-xs">
          Company legal name
        </label>
        <input
          type="text"
          name="companylegalname"
          className="input-border shadow-sm inline-flex w-full cursor-pointer items-center align-middle rounded-lg border border-1 px-[20px] md:px-[28px] py-[13px]"
        />
      </div>
      <div className="from group mb-3">
        <label className="flex font-medium mb-[10px] items-center text-white text-xs">
          Company address
        </label>
        <input
          type="text"
          name="companyaddress"
          className="input-border shadow-sm inline-flex w-full cursor-pointer items-center align-middle rounded-lg border border-1 px-[20px] md:px-[28px] py-[13px]"
        />
      </div>
      <div className="mb-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-12 md:col-span-3">
          <label
            htmlFor="country"
            className="flex font-medium mb-[10px] items-center text-white text-xs"
          >
            State of incorporation
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              className="block bg-[#3d246617] border-[#363637] fouce:border-[#363637] w-full rounded-md border-0 shadow-sm ring-1 ring-inset px-[20px] md:px-[28px] py-[13px] focus:ring-2 ring-[#363637] focus:ring-inset focus:ring-[#363637] sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option className="text-[#363637]">USA</option>
              <option className="text-[#363637]">Canada</option>
              <option className="text-[#363637]">Mexico</option>
            </select>
          </div>
        </div>
        <div className="sm:col-span-12 md:col-span-3">
          <label
            htmlFor="State"
            className="flex font-medium mb-[10px] items-center text-white text-xs"
          >
            State of governance
          </label>
          <div className="mt-2">
            <select
              id="State"
              name="State"
              className="block bg-[#3d246617] border-[#363637] fouce:border-[#363637] w-full rounded-md border-0 shadow-sm ring-1 ring-inset px-[20px] md:px-[28px] py-[13px] focus:ring-2 ring-[#363637] focus:ring-inset focus:ring-[#363637] sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option className="text-[#363637]">USA</option>
              <option className="text-[#363637]">Canada</option>
              <option className="text-[#363637]">Mexico</option>
            </select>
          </div>
        </div>
      </div>
      <hr className="bg-[#1D1D1D] mb-4 border-1 border-[#1D1D1D]" />
      <p className="text-base	text-white font-medium mb-3">
        Benificial owner details
      </p>
      <div className="from group mb-3">
        <label
          htmlFor="benificial"
          className="flex font-medium mb-[10px] items-center text-white text-xs"
        >
          Benificial owner name ( As a signatory )
        </label>
        <input
          type="text"
          name="benificial"
          className="input-border shadow-sm inline-flex w-full cursor-pointer items-center align-middle rounded-lg border border-1 px-[20px] md:px-[28px] py-[13px]"
        />
      </div>
      <div className="col-span-full w-full mb-3">
        <label
          htmlFor="benificial"
          className="flex font-medium mb-[10px] items-center text-white text-xs"
        >
          Benificial owner title
        </label>
        <select
          id="country"
          name="country"
          className="block bg-[#3d246617] border-[#363637] fouce:border-[#363637] w-full rounded-md border-0 shadow-sm ring-1 ring-inset px-[20px] md:px-[28px] py-[13px] focus:ring-2 ring-[#363637] focus:ring-inset focus:ring-[#363637] sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option className="text-[#363637]">
            CEO ( Chief executive Officer )
          </option>
          <option className="text-[#363637]">
            CEO ( Chief executive Officer )
          </option>
          <option className="text-[#363637]">
            CEO ( Chief executive Officer )
          </option>
        </select>
      </div>
    </div>
  );
}
