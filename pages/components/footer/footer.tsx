import style from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <p>
                <span>Formato consultoria</span> &copy; 2022
            </p>
        </footer>
    );
}