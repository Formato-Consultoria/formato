import { IconProps } from 'phosphor-react';
import { ReactElement } from 'react';
import style from './button.module.scss';
import cx from 'clsx';

type BtnProps = {
    text: string | ReactElement,
    icone?: ReactElement<IconProps>,
    isSecondary?: boolean,
    isCustommer?: boolean,
    isDowButton?: boolean,
    className?: string
}

export default function ButttonGlobal({
    text,
    icone, 
    isSecondary=false, 
    isCustommer=false,
    isDowButton=false,
    className,
}: BtnProps) {
    return (
        <button className={cx(style.primary_btn,
            isSecondary && style.secundary_btn,
            isCustommer && style.custommer_btn,
            isDowButton && style.arrowdow_btn,
            className
        )}>
            {text} {icone && <strong>{icone}</strong>}
        </button>
    )
}