export default function Input({ id, label, type, error }) {
  return (
    <>
      <label
        htmlFor={id}
        className="flex font-medium mb-[10px] items-center text-[#C0C0C0] text-xs"
      >
       {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className="input-border shadow-sm inline-flex w-full focus:ring-2 focus:ring-inset focus:ring-[#f0e9e9] cursor-pointer items-center align-middle rounded-lg border border-1 pl-6 pr-6 pt-[13px] pb-[13px]"
      />
    </>
  );
}
