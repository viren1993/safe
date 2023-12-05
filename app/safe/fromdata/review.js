export default function Review() {
  return (
    <div className="col-span-full">
      <div className="card rounded-lg px-[28px] mb-[36px] py-[18px]	border-1 border-[#363637]">
        <h4 className="mb-1">Pre-money SAFE to Arthur rock</h4>
        <h2 className="mb-4 text-[32px] font-semibold">$ 10,000.00</h2>
        <hr className="bg-[#1D1D1D] mb-4 border-1 border-[#1D1D1D]" />
        <div className="flex">
          <div className="basis-[30%] flex flex-col">
            <p className="text-xs leading-7 text-gray-300">Valuation cap</p>
            <p className="text-sm text-white font-extrabold inline-flex">
              $ 1,00,000.00
            </p>
          </div>
          <div className="basis-[25%] flex flex-col">
            <p className="text-xs leading-7 text-gray-300">Discount </p>
            <p className="text-sm text-white font-extrabold inline-flex">3 %</p>
          </div>
          <div className="basis-[25%] flex flex-col">
            <p className="text-xs leading-7 text-gray-300">Pro-Rata </p>
            <p className="text-sm text-white font-extrabold inline-flex">
              Yes{" "}
            </p>
          </div>
          <div className="basis-[20%] flex flex-col">
            <p className="text-xs leading-7 text-gray-300">MFN </p>
            <p className="text-sm text-white font-extrabold inline-flex">No </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 grid-rows-1 gap-4 mb-5">
        <div className="col-span-4">
          <p className="font-medium text-base">Recipient</p>
        </div>
        <div className="col-span-8 col-start-6">
          <p className="text-[#8D8989]">Investment Date</p>
        </div>
        <div className="col-span-4">
          <p className="font-medium text-base">Arthur Rock</p>
        </div>
        <div className="col-span-8 col-start-6">
          <p className="text-[#8D8989]">Dec 1, 2023</p>
        </div>
      </div>
      <hr className="bg-[#1D1D1D] mb-4 border-1 border-[#1D1D1D]" />
      <p className="text-[#8D8989] font-medium text-base mb-7">
        SAFEs work best when you have discussed with the investor and agreed to
        general terms. We recommend you do so before sending this document for
        signature.
      </p>
    </div>
  );
}
