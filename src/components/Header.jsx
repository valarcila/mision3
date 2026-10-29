export default function Header({ titulo, subtitulo, autora }) {
    return (
        <header>
            <h1>{titulo}</h1>
            <p><b>{subtitulo}</b></p>
            <p>{autora}</p>
        </header>
    )
}
