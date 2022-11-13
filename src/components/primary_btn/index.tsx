import style from './primary-btn.module.scss'

interface Props {
    text: string
}

export default function PrimaryButton(props: Props) {
    return (
        <button className={style.primary_btn}>
            {props.text}
        </button>
    )
}