type AppIconSlimProps = {
  width?: number;
  color?: string;
  height?: number | null;
  withShadow?: boolean;
};
const AppIconSlim: React.FC<AppIconSlimProps> = ({
  width = 50,
  height = null,
  color = "#d5d5d5",
  withShadow = false,
}) => {
  if (height === null) height = width;
  const customStyles = {
    filter: withShadow ? `drop-shadow(1px 1px 1px color70` : "",
  };
  return (
    <div className="AppIconSlim">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width={width}
        height={height}
      >
        <path
          d="M72.68 19.83h14.17a.63.63 0 01.6.85 8.1 8.1 0 01-7.55 5.18H39.68a13.56 13.56 0 00-13.77 14.48 13.41 13.41 0 0013.36 12.33h14.42a8.09 8.09 0 017.54 5.18.64.64 0 01-.59.86h-14.2v4.06h14.21a.63.63 0 01.6.85 8.08 8.08 0 01-7.15 5.21H39.55a29.58 29.58 0 11-.28-59.16H79.9a8.1 8.1 0 017.57 5.22.64.64 0 01-.6.85H72.68z"
          fill="#3747d6"
        />
        <path
          d="M90.3 61.41a29.75 29.75 0 01-29.85 28.9H20.28a8 8 0 01-7.84-5.22.64.64 0 01.6-.84h14.28v-4.07H13.14a.64.64 0 01-.6-.85 8.12 8.12 0 017.56-5.19h40.22A13.57 13.57 0 0074.1 59.66a13.43 13.43 0 00-12.47-12.3H46.31a8.08 8.08 0 01-7.54-5.18.64.64 0 01.6-.86H53.5v-4H39.35a.63.63 0 01-.6-.85 8.25 8.25 0 011.85-2.86 8.06 8.06 0 015.71-2.37h15.32A29.6 29.6 0 0190.3 61.41z"
          fill="#eb581e"
        />
        <path fill="none" d="M9.69 9.69H90.31V90.31H9.69z" />
        <path fill="none" d="M0 0H100V100H0z" />
      </svg>
    </div>
  );
};
export default AppIconSlim;
