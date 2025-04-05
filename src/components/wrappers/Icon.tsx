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
    inline?: boolean;
}

export default function Icon({ name, className = '', style, fill, weight, gradient, size, inline=false }: IconProps) {
    const variableStyle: CSSProperties = {
        fontSize: `${size || 24}px`,
        fontVariationSettings:
            `'FILL' ${fill ? 1 : 0},
            'wght' ${weight || 400},
            'GRAD' ${gradient || 0},
            'opsz' ${size || 24}`
    };
    
    return (
        <span className={`material-symbols-outlined ${inline ? 'align-middle' : 'flex'} items-center justify-center ${className}`} style={{ ...variableStyle, ...style }}>
            {name}
        </span>
    );
};