type AppIconLargeProps = {
  width?: number;
  color?: string;
  height?: number | null;
  withShadow?: boolean;
};
const AppIconLarge: React.FC<AppIconLargeProps> = ({
  width = 50,
  height = null,
  color = "#d5d5d5",
  withShadow = false,
}) => {
  if (height === null) height = width;
  const customStyles = {
    filter: withShadow ? `drop-shadow(1px 1px 1px color70` : undefined,
  };
  return (
    <div className="AppIconLarge">
      <svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 203.2 49.2"
      >
        <path fill="none" d="M55.54 6.32h141.31v36.55H55.54z" />
        <path fill="none" d="M49.2 0h154v49.2h-154z" />
        <path
          d="M142.65 23.84a10.21 10.21 0 012.69-7.39 10.49 10.49 0 0114.29 0 10.2 10.2 0 012.71 7.39 10.16 10.16 0 01-2.71 7.38 10.48 10.48 0 01-14.29 0 10.21 10.21 0 01-2.69-7.38zm5.4 5.25a6.53 6.53 0 008.89 0 6.81 6.81 0 001.9-5.27 6.73 6.73 0 00-1.9-5.25 6.57 6.57 0 00-8.89 0 6.73 6.73 0 00-1.9 5.25 6.83 6.83 0 001.9 5.28zM100.64 23.84a10.21 10.21 0 012.69-7.39 10.49 10.49 0 0114.29 0c2.27 2.35 2.66 5 2.66 8.51v9.9h-3.07c-.19-1.11-.31-2-.4-2.88a9.74 9.74 0 01-6.34 2.02 9.42 9.42 0 01-7.14-2.81 10.2 10.2 0 01-2.69-7.35zm5.4 5.25a6.53 6.53 0 008.89 0 6.81 6.81 0 001.9-5.27 6.71 6.71 0 00-1.9-5.24 6.57 6.57 0 00-8.89 0 6.73 6.73 0 00-1.9 5.25A6.82 6.82 0 00106 29.1z"
          fill="#EB581E"
          fillRule="evenodd"
        />
        <path
          d="M97.86 23.85a10.24 10.24 0 00-2.7-7.39 10.49 10.49 0 00-14.29 0c-2.24 2.33-2.67 5.37-2.67 8.54v17.88h3.08c.15-.9.32-2.16.43-2.87 0-2.93-.09-7.34 0-8A9.7 9.7 0 0088 34a9.42 9.42 0 007.14-2.8 10.26 10.26 0 002.69-7.39zm-5.41 5.25a6.53 6.53 0 01-8.89 0 6.81 6.81 0 01-1.9-5.27 6.73 6.73 0 011.9-5.25 6.57 6.57 0 018.89 0 6.73 6.73 0 011.9 5.25 6.79 6.79 0 01-1.9 5.27zM59 14a2.92 2.92 0 001.24 2.44 9.17 9.17 0 003 1.49L67.18 19l4 1.18a5.71 5.71 0 013 2.2 6.23 6.23 0 011.19 4.09 7 7 0 01-2.72 5.43c-1.82 1.4-4.34 2.1-7.59 2.1a21.45 21.45 0 01-9.21-2v-3.48h.2a18.45 18.45 0 009.14 2.24q6.77 0 6.76-4.48 0-2.19-3.29-3.22l-3.14-.93-3.5-1a16.11 16.11 0 01-3.22-1.31 6.42 6.42 0 01-2.37-2.2 5.21 5.21 0 01-.89-3.34 7.91 7.91 0 012.64-5.68 10.65 10.65 0 017.15-2.28 22.71 22.71 0 018.12 1.39V11h-.27a18.53 18.53 0 00-7-1.47 10.06 10.06 0 00-5.27 1.18A3.64 3.64 0 0059 14zM139.72 18.83a11.46 11.46 0 00-6.44-1.93c-2.35 0-4.26.77-5.25 2.15a8 8 0 00-1.46 4.79c.1 1.59.53 3.75 1.45 4.79a6.45 6.45 0 005.25 2.15 11.43 11.43 0 006.44-1.93h.15l-.12 3.33A12.78 12.78 0 01133 34a9.69 9.69 0 01-7.14-2.77 9.9 9.9 0 01-2.79-7.42 10 10 0 012.79-7.43 9.73 9.73 0 017.14-2.74 12.78 12.78 0 016.73 1.85l.12 3.33z"
          fill="#3747d6"
          fillRule="evenodd"
        />
        <path
          d="M195.5 23.52a12.25 12.25 0 00-1.11-5.19l-.05-.1a8.31 8.31 0 00-1.1-1.71 7 7 0 00-.64-.69l-.3-.28a13.65 13.65 0 00-1.64-1.08l-.17-.08a8.45 8.45 0 00-.64-.25 6.29 6.29 0 00-.74-.22 8.53 8.53 0 00-2-.21 7.81 7.81 0 00-1.67.15H185.09l-.39.1c-.26.08-.52.17-.79.28l-.22.09-.38.19a7.74 7.74 0 00-2.33 1.93l-.1.13c-.18.23-.35.47-.51.71a8.3 8.3 0 00-.5-.71l-.12-.14a7.78 7.78 0 00-1.89-1.68l-.3-.17a5.43 5.43 0 00-.59-.3l-.45-.18a7.54 7.54 0 00-.89-.27l-.34-.07a9.4 9.4 0 00-3.7.07 6.55 6.55 0 00-.89.27l-.19.07a7.32 7.32 0 00-2.51 1.61 7.83 7.83 0 00-.61.67 8.89 8.89 0 00-1.2 1.89 12.57 12.57 0 00-1.07 5.4V34h3.4V22.62a6.7 6.7 0 011.12-3.37 3.84 3.84 0 01.37-.45 5.59 5.59 0 011-.83 4.35 4.35 0 012-.75h.8a4.41 4.41 0 011.47.32 5.21 5.21 0 011.83 1.29 7.08 7.08 0 011.57 5V34H182V23.78a7.07 7.07 0 011.54-5 5.26 5.26 0 011.84-1.28 4.49 4.49 0 011.49-.34h.63a4.54 4.54 0 012.16.77 5.65 5.65 0 011 .84 4 4 0 01.37.45 6.78 6.78 0 011.11 3.34V34h3.4V23.52zM35.75 9.75h7a.31.31 0 01.29.42 4 4 0 01-3.71 2.55H19.52a6.68 6.68 0 00-6.78 7.13 6.6 6.6 0 006.58 6.06h7.09a4 4 0 013.71 2.55.31.31 0 01-.29.42h-7v2h7a.31.31 0 01.29.42 3.85 3.85 0 01-.91 1.4 3.92 3.92 0 01-2.6 1.16h-7.15a14.55 14.55 0 11-.14-29.1h20A4 4 0 0143 7.33a.32.32 0 01-.29.43h-7z"
          fill="#3747d6"
        />
        <path
          d="M44.43 30.21a14.65 14.65 0 01-14.69 14.22H10a4 4 0 01-3.86-2.57.31.31 0 01.3-.41h7v-2h-7a.31.31 0 01-.3-.42 3.92 3.92 0 01.9-1.39 4 4 0 012.82-1.17h19.81a6.67 6.67 0 006.78-7.12 6.59 6.59 0 00-6.13-6.05H22.79a4 4 0 01-3.72-2.54.32.32 0 01.3-.43h7v-2h-7a.32.32 0 01-.3-.42 4.17 4.17 0 01.93-1.42 4 4 0 012.82-1.16h7.53a14.57 14.57 0 0114.08 14.88z"
          fill="#EB581E"
        />
        <path fill="none" d="M4.77 4.77h39.66v39.66H4.77z" />
        <path fill="none" d="M0 0h49.2v49.2H0z" />
      </svg>
    </div>
  );
};
export default AppIconLarge;