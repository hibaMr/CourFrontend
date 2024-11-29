import Section from "./Section";
import Footer from "./Footer";
import NavTop from "./NavTop";

function Article(){
    return(
        <>
            <div className="flex flex-col justify-between">
                <div className="text-black">
                    <NavTop/>
                </div>
                <div className="w-3/4 flex flex-row justify-center">
                    <Section/>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
            
        </>
    )
}
export default Article;