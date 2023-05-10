import "./Card.css"


const Card = () => {
    const hallo = () =>{
        console.log("ik ben kaartje een")
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>Eerste Kaart</h2>
            </header>
            <section>
                loremmmmmmmmmmmmmmmmmmmmmmm
            </section>
        </article>
    );
}


export default Card