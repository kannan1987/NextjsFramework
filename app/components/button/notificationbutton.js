const ButtonWithNotification = ({ bgColor, textColor }) => {
  return (
    <button
      type="button"
      className="mb-2 flex rounded  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
      style={{
        backgroundColor: `${bgColor}`,
        color: `${textColor}`,
        textAlign: "center",
      }}
    >
      Notifications
      <span class="ml-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-pink px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-danger-700">
        7777
      </span>
    </button>
  );
};
export default ButtonWithNotification;
