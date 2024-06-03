import { categorieTitles } from "../data/db"

function TitlesAndParagrph() {

  return (
    <>
    <div className="p-14">
        {categorieTitles.map(content => (
            <>
            <h1 className="font-bold uppercase text-center text-3xl">Hola mundo</h1>
            <p className="font-bold text-center text-zinc-400">Contenido de prueba</p>
            </>

        ))}
    </div>
    </>
  )
}

export default TitlesAndParagrph