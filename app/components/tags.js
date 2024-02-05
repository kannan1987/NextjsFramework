const CustomTag = ({ value, bgColor, textColor }) => {
  return (
    <div>
      <span
        className="inline-block whitespace-nowrap rounded-[0.27rem] px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700"
        style={{
          backgroundColor: `${bgColor}`,
          color: `${textColor}`,
        }}
      >
        {value}
      </span>
    </div>
  );
};
export default CustomTag;
