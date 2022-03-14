import Esquerda from './Esquerda';
import Sidebar from './components/Sidebar';

export default function Corpo() {
    return (
    <div class="corpo">
        <Esquerda />    
        <Sidebar />
    </div> 
    );
}