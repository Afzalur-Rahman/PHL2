import React from "react";

type LogoProps = React.SVGProps<SVGSVGElement> & {
    className?: string;
};

const Logo: React.FC<LogoProps> = ({ className, ...props }) => (
    <svg
        className={className}
        viewBox="0 0 32 32"
        fill="currentColor"
        {...props}
    >
        <circle cx="16" cy="16" r="16" />
        <text
            x="16"
            y="21"
            textAnchor="middle"
            foSize="14"
            fill="#fff"
            fontFamily="Arial, sans-serif"
        >
            
        </text>
    </svg>
);

export default Logo;