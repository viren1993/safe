import { Field } from "formik";
import { useState } from "react";
import DatePicker from "react-datepicker";

export default function Safedetails() {
    const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="step 1">
      <div className="flex input-border justify-between relative cursor-pointer mb-3 items-center rounded-lg border border-1 px-[20px] md:px-[28px] py-[13px]">
        <div className="flex items-center">
          <input name="money" type="radio" id="premoney" className="mr-[7px]" />
          <label
            htmlFor="premoney"
            className="font-medium pr-[30px] items-center text-white rounded-full text-sm md:text-base"
          >
            Pre-money
          </label>
        </div>
        <span className="text-sm">Before cash investment</span>
      </div>

      <div className="flex input-border justify-between relative cursor-pointer mb-3 items-center rounded-lg border border-1 px-[20px] md:px-[28px] py-[13px]">
        <div className="flex items-center">
          <input
            id="postmoney"
            name="money"
            type="radio"
            className="mr-[7px]"
          />

          <label
            htmlFor="postmoney"
            className="font-medium pr-[30px] items-center text-white rounded-full text-sm md:text-base"
          >
            Post-money
          </label>
        </div>

        <span className="text-sm">After cash investment</span>
      </div>

      <div className="from group mb-3">
        <label
          htmlFor="address"
          className="flex font-medium mb-[10px] items-center text-white text-xs"
        >
          Investor wallet address
        </label>
        <Field
          type="text"
          name="address"
          id="address"
          className="input-border shadow-sm inline-flex w-full cursor-pointer items-center align-middle rounded-lg border border-1 px-[20px] md:px-[28px] py-[13px]"
        />
        {/* {errors.address && touched.address ? (
          <p className="text-red-500 text-xs mt-2">{errors.address}</p>
        ) : null} */}
      </div>

      <div className="flex flex-nowrap mb-3">
        <div className="from-group mr-[18px] w-[50%]">
          <label
            htmlFor="investmentamount"
            className="flex font-medium mb-[10px] items-center text-white text-xs"
          >
            Investment Amount
          </label>
          <Field
            type="number"
            name="investmentamount"
            id="investmentamount"
            className="input-border shadow-sm inline-flex w-full cursor-pointer items-center align-middle rounded-lg border border-1 px-[20px] md:px-[28px] py-[13px]"
          />
          {/* {errors.insvestmentamount && touched.investmentamount ? (
            <p className="text-red-500 text-xs mt-2">
              {errors.investmentamount}
            </p>
          ) : null} */}
        </div>
        <div className="from-group w-[50%]">
          <label
            htmlFor="investmentdate"
            className="flex font-medium mb-[10px] items-center text-white text-xs"
          >
            Investment Date
          </label>
          <DatePicker
            className="w-full input-border shadow-sm inline-flex cursor-pointer items-center align-middle rounded-lg border border-1 px-[20px] md:px-[28px] py-[13px]"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MMMM d, yyyy"
            name="investmentdate"
          />
        </div>
      </div>
      <div className="flex flex-nowrap mb-3">
        <div className="from-group flex mr-[38px] h-[50px] w-[50%] items-center">
          <input type="checkbox" id="valuation" className="sr-only peer" />
          <div className="block relative bg-white w-12 h-[22px] p-[2px] rounded-full before:absolute before:bg-[#A9A9A9] before:w-[18px] before:h-[18px] before:p-[2px] before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-7 peer-checked:before:bg-[#8B2DC5]"></div>
          <label
            htmlFor="valuation"
            className="leading-5 pl-4 font-medium text-sm md:text-base"
          >
            Valuation cap
          </label>
        </div>
        <div className="from-group mr-[18px] h-[50px] w-[50%]">
          <div className="from group">
            <input
              type="number"
              name="valuationcap"
              className="input-border shadow-sm inline-flex w-full cursor-pointer items-center align-middle rounded-lg border border-1 px-[20px] md:px-[28px] py-[13px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-nowrap mb-[20px]">
        <div className="from-group flex mr-[38px] w-[50%] items-center">
          <input type="checkbox" id="Discount" className="sr-only peer" />
          <div className="block relative bg-white w-12 h-[22px] p-[2px] rounded-full before:absolute before:bg-[#A9A9A9] before:w-[18px] before:h-[18px] before:p-[2px] before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-7 peer-checked:before:bg-[#8B2DC5]"></div>
          <label
            htmlFor="Discount"
            className="leading-5 pl-4 font-medium text-sm md:text-base"
          >
            Discount
          </label>
        </div>
        <div className="from-group mr-[18px] w-[50%]">
          <div className="from group">
            <input
              type="number"
              name="discount"
              className="input-border shadow-sm inline-flex w-full cursor-pointer items-center align-middle rounded-lg border border-1 px-[20px] md:px-[28px] py-[13px]"
            />
          </div>
        </div>
      </div>
      <p className="flex items-center cursor-pointer text-xs mb-5">Addendums</p>
      <div className="from-group flex items-center mb-7">
        <input type="checkbox" id="prorate" className="sr-only peer" />
        <div className="block relative bg-white w-12 h-[22px] p-[2px] rounded-full before:absolute before:bg-[#A9A9A9] before:w-[18px] before:h-[18px] before:p-[2px] before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-7 peer-checked:before:bg-[#8B2DC5]"></div>
        <label
          htmlFor="prorate"
          className="leading-5 pl-4 font-medium text-sm md:text-base"
        >
          Pro-Rata Rights Letter
        </label>
      </div>
      <div className="from-group flex items-center mb-6">
        <input type="checkbox" id="mostfavoured" className="sr-only peer" />
        <div className="block relative bg-white w-12 h-[22px] p-[2px] rounded-full before:absolute before:bg-[#A9A9A9] before:w-[18px] before:h-[18px] before:p-[2px] before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-7 peer-checked:before:bg-[#8B2DC5]"></div>
        <label
          htmlFor="mostfavoured"
          className="leading-5 pl-4 font-medium text-sm md:text-base"
        >
          Most-Favoured Nation
        </label>
      </div>
    </div>
  );
}
