import "./Card.css"

const Card2 = () => {

    const hallo = () =>{
        console.log("ik ben kaartje twee")
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>tweede Kaart</h2>
            </header>
            <section>
            loremmmmmmmmmmmmmmmmmmmmmmm
            </section>
        </article>
    );
}


export default Card2