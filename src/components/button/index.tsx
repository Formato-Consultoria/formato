import { IconProps } from 'phosphor-react';
import { ReactElement } from 'react';
import style from './button.module.scss';

interface Props {
    text: string | ReactElement,
    icone?: ReactElement<IconProps>
    isSecondary?: boolean
    isCustommer?: boolean
    isDowButton?: boolean
}

export default function ButttonGlobal({
    text,
    icone, 
    isSecondary=false, 
    isCustommer=false,
    isDowButton=false
}: Props) {
    return (
        <button className={`
            ${style.primary_btn}
            ${isSecondary && style.secundary_btn}
            ${isCustommer && style.custommer_btn}
            ${isDowButton && style.arrowdow_btn}
        `}>
            {text} {icone && <strong>{icone}</strong>}
        </button>
    )
}