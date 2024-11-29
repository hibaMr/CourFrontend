import Article from "./Article";
import Header from "./Header";

function App(){
    return (
        <>
            <div className="flex flex-row text-white">
                <Header/>
                <Article/>
            </div>
        </>
    )
}
export default App;