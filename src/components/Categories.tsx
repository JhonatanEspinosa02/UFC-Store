
function Categories() {
  return (
    <>
    <div className='bg-[#3A3A3A] flex justify-evenly items-center p-10'>

        <div className="flex flex-col items-center justify-center">
            <div className="">
                <img src="/img/icons8-boxing-helmet-64.png" alt="helmet" />
            </div>
            <div>
                <a href="#"><p className="text-3xl text-zinc-500 hover:text-white uppercase font-semibold text-center">Helmets</p></a>
            </div>
        </div>

        

        <div className="flex flex-col items-center justify-center"> 
            <div className="mb-3">
                <img src="/img/icons8-boxing-glove-50.png" alt="glove" />
            </div>
            <div>
            <a href="#"><p className="text-3xl text-zinc-500 hover:text-white uppercase font-semibold text-center">Shorts</p></a>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center">
            <div className="mb-3">
                <img src="/img/icons8-shorts-50.png" alt="shorts" />
            </div>
            <div>
            <a href="#"><p className="text-3xl text-zinc-500 hover:text-white  uppercase font-semibold">Gloves</p></a>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center">
            <div className="mb-2">
                <img src="/img/icons8-boxing-60.png" alt="accessories" />
            </div>
            <div>
            <a href="#"><p className="text-3xl text-zinc-500 hover:text-white  uppercase font-semibold">Accesories</p></a>
            </div>
        </div>

    </div>
    </>
  )
}

export default Categories