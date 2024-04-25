interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  isActive?: boolean;
}
const ButtonNavtab = ({ children, isActive, ...props }: IButton) => {
  return (
    <button
      {...props}
      className={`${
        isActive ? 'bg-[#3E30FA] text-white' : 'bg-slate-100 text-slate-800'
      }  py-3 px-14 rounded-full font-semibold`}
    >
      {children}
    </button>
  );
};

export default ButtonNavtab;
