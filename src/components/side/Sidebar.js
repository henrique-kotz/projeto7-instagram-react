import Usuario from './Usuario';
import Sugestoes from './Sugestoes';

export default function Sidebar() {
    const suggestionsList = [
        {
            imagem: "assets/img/bad.vibes.memes.svg",
            nome: "bad.vibes.memes",
            razao: "Segue você"
        },
        {
            imagem: "assets/img/chibirdart.svg",
            nome: "chibirdart",
            razao: "Segue você"
        },
        {
            imagem: "assets/img/razoesparaacreditar.svg",
            nome: "razoesparaacreditar",
            razao: "Novo no Instagram"
        },
        {
            imagem: "assets/img/adorable_animals.svg",
            nome: "adorable_animals",
            razao: "Segue você"
        },
        {
            imagem: "assets/img/smallcutecats.svg",
            nome: "smallcutecats",
            razao: "Segue você"
        }
    ]

    return (
    <div class="sidebar">
        <Usuario imagem="assets/img/catanacomics.svg" username="cataacomics" nome="Catana" />
        <Sugestoes suggestionsList={suggestionsList}/>
        
        <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
    );
}