import "./Card.css"

const Card3 = () => {
    const hallo = () =>{
        console.log("ik ben kaartje drie")
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>derde Kaart</h2>
            </header>
            <section>
                loremmmmmmmmmmmmmmmmmmmmmmm
            </section>
        </article>
    );
}


export default Card3