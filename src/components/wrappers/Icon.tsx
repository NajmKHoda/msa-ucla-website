import { MaterialSymbol } from 'material-symbols';
import { CSSProperties } from 'react';

interface IconProps {
    name: MaterialSymbol;
    className?: string;
    style?: CSSProperties;
    fill?: boolean;
    weight?: number;
    gradient?: number;
    size?: number;
}

export default function Icon({ name, className, style, fill, weight, gradient, size }: IconProps) {
    const variableStyle: CSSProperties = {
        fontSize: `${size}px`,
        fontVariationSettings:
            `'FILL' ${fill ? 1 : 0},
            'wght' ${weight || 400},
            'GRAD' ${gradient || 0},
            'opsz' ${size || 48}`
    };
    
    return (
        <span className={`material-symbols-outlined ${className}`} style={{ ...variableStyle, ...style }}>
            {name}
        </span>
    );
};