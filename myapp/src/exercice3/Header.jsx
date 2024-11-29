import Nav from "./Nav";
import Logo from "./Logo";

function Header(){
    return(
        <>
            <header className="p-6 bg-gradient-to-r from-cyan-500 to-blue-500 w-1/4 h-screen">
                <Logo/>
                <Nav/>
            </header>
        </>
    )
}
export default Header;