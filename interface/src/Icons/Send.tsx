import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSend = ({
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
        <path
            fill="currentColor"
            d="m21.727 2.957-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37c-.51-.205-.503-.51.034-.689L21.043 2.32c.529-.176.832.12.684.638m-2.692 2.14L6.812 9.17l5.637 2.255 3.04 6.08z"
        />
    </svg>
);
export default SvgSend;
