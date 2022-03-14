import Navbar from './components/Navbar';
import Stories from './components/main/Stories';
import Posts from './components/main/Posts';
import Sidebar from './components/side/Sidebar';
import FundoMobile from './components/FundoMobile';

export default function App() {
    return (
    <>
        <Navbar />
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts /> 
            </div>  
            <Sidebar />
        </div> 
        <FundoMobile />
    </>
    );
}