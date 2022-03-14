export default function Sugestoes(props) {
    const { suggestionsList } = props;
    
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestionsList.map((sugg) => <Sugestao imagem={sugg.imagem} nome={sugg.nome} razao={sugg.razao} />)}            
        </div>
    );
}

function Sugestao(props) {
    const { imagem, nome, razao } = props;

    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={imagem} />
            <div class="texto">
                <div class="nome">{nome}</div>
                <div class="razao">{razao}</div>
            </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}