export default function Posts() {
    const postsList = [
        {
            usuario: {
                imagem: "assets/img/meowed.svg",
                nome: "meowed"
            },
            postURL: "assets/img/gato-telefone.svg",
            curtidas: {
                imagem: "assets/img/respondeai.svg",
                nome: "respondeai",
                qtd: "101.523"
            }
        },
        {
            usuario: {
                imagem: "assets/img/barked.svg",
                nome: "barked"
            },
            postURL: "assets/img/dog.svg",
            curtidas: {
                imagem: "assets/img/adorable_animals.svg",
                nome: "adorableanimals",
                qtd: "99.159"
            }
        }
    ]

    return (
    <div class="posts">
        {postsList.map((post) => <Post usuario={post.usuario} postURL={post.postURL} curtidas={post.curtidas} />)}
    </div>
    );
}

function Post(props) {
    const { usuario, postURL, curtidas } = props;

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={usuario.imagem} />
                    {usuario.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={postURL} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={curtidas.imagem} />
                    <div class="texto">
                    Curtido por <strong>{curtidas.nome}</strong> e <strong>outras {curtidas.qtd} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}