import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMicrophoneOff = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none">
      <path
        fill="currentColor"
        d="M9 11a3 3 0 0 0 4.562 2.562L9 9z"
        opacity={0.16}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 11c0 .71-.106 1.395-.302 2.04M12 18a7 7 0 0 1-7-7m7 7v3m0-3a6.97 6.97 0 0 0 4.425-1.576M9.714 4.057A3 3 0 0 1 15 6v3.343M9 9v2a3 3 0 0 0 4.562 2.562"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="m4 4 16 16"
      />
    </g>
  </svg>
);
export default SvgMicrophoneOff;
