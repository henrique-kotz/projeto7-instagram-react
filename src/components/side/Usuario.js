export default function Usuario(props) {
    const { imagem, username, nome } = props;

    return (
        <div class="usuario">
            <img src={imagem} />
            <div class="texto">
                <strong>{username}</strong>
                {nome}
            </div>
        </div>
    );
}