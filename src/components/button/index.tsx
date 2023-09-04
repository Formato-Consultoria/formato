'use client'
import { IconProps } from 'phosphor-react';
import { ReactElement } from 'react';
import style from './button.module.scss';
import cx from 'clsx';

type BtnProps = {
    value: string | ReactElement,
    icone?: ReactElement<IconProps>,
    onClick?: () => Promise<void> | void,
    isSecondary?: boolean,
    isCustommer?: boolean,
    isDowButton?: boolean,
    isLoading?: boolean,
    disabled?: boolean,
    className?: string
}

export default function ButttonGlobal({
    value,
    icone, 
    isSecondary=false, 
    isCustommer=false,
    isDowButton=false,
    isLoading=false,
    disabled=false,
    onClick,
    className,
}: BtnProps) {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={cx(style.primary_btn,
                isSecondary && style.secundary_btn,
                isCustommer && style.custommer_btn,
                isDowButton && style.arrowdow_btn,
                isLoading && style.loading_btn,
                disabled && style.disabled_btn,
                className
        )}>
            {value} {icone && <strong>{icone}</strong>}
        </button>
    )
}