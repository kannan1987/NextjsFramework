const FloatingTextFieldWithBorder = ({
  label,
  placeholder,
  type,
  onChange,
}) => {
  return (
    <div className="outline relative border-2 focus-within:border-blue-500 h-16">
      <input
        type={type}
        name={label}
        placeholder={placeholder}
        onChange={onChange}
        class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent text-black"
      />
      <label
        for={label}
        class="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0 text-black"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingTextFieldWithBorder;
