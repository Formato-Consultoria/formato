import { IconProps } from 'phosphor-react';
import { ReactElement } from 'react';
import style from './button.module.scss';

interface Props {
    text: string | ReactElement,
    icone?: ReactElement<IconProps>
    isSecondary?: boolean
    isCustommer?: boolean
}

export default function ButttonGlobal({text, icone, isSecondary=false, isCustommer=false}: Props) {
    return (
        <button className={`
            ${style.primary_btn}
            ${isSecondary && style.secundary_btn}
            ${isCustommer && style.custommer_btn}
        `}>
            {text} {icone && <strong>{icone}</strong>}
        </button>
    )
}