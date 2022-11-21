import { IconProps } from 'phosphor-react'
import { ReactElement } from 'react'
import style from './primary-btn.module.scss'

interface Props {
    text: string,
    icone?: ReactElement<IconProps>
    
}

export default function PrimaryButton({text, icone}: Props) {
    return (
        <button className={style.primary_btn}>
            {text} { icone && <strong>{icone}</strong>}
        </button>
    )
}