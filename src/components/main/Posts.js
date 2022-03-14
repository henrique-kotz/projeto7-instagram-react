import Post from './Post';

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