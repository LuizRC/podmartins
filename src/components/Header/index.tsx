import style from './styles.module.scss';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM ', {
        locale: ptBR,
    });
    return (
        <header className={style.headerContainer}>
            <img src="/logo.svg" alt="Logo podmartins" />

            <p>Sempre o  melhor conteúdo pra você ouvir.</p>

            <span> {currentDate} </span>

        </header>
    );
}