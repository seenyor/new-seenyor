
const CloseSVG = ({ fillColor = "#000000", className = "", ...props }) => {
  const size = props?.width || 20;

  return (
    <svg
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      height={size}
      width={size}
      viewBox={`0 0 ${size} ${size}`}
      {...props}
    >
      <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
    </svg>
  );
};

export { CloseSVG };

