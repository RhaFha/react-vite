import CrossIcon from "./componentes/icoms/CrossIcon"

const App = () => {

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen" >
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">TODO</h1>
          <button>luna</button>
        </div>
        <form className="flex gap-4 items-center bg-white rounded-md overflow-hidden py-4 px-4 mt-8">
          <spam className="rounded-full border-2 w-5 h-5 inline-block"></spam>
          <input type='text' placeholder="Create a new todo..." className="w-full text-gray-400 outline-none"/>
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4 ">
        <div className="bg-white rounded-md">

          <article className="flex gap-4 py-4 items-center border-b border-b-gray-400 px-4">
            <button className="flex-none rounded-full border-2 w-5 h-5 inline-block"></button>
            <p className="grow text-gray-600">Curso completado</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          
          <article className="flex gap-4 py-4 items-center border-b border-b-gray-400 px-4">
            <button className="flex-none rounded-full border-2 w-5 h-5 inline-block"></button>
            <p className="grow text-gray-600">Curso completado</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          
          <article className="flex gap-4 py-4 items-center border-b border-b-gray-400 px-4">
            <button className="flex-none rounded-full border-2 w-5 h-5 inline-block"></button>
            <p className="grow text-gray-600">Curso completado</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          
        </div>

        <section>
          <span>5 item left</span>
          <button>Clear complete</button>
        </section>
      </main>

      <section className="container mx-auto px-4">
        <button>All</button>
        <button>Activate</button>
        <button>Complete</button>
      </section>

      <section>Drag and Drog react order</section>
    </div>
  )
}

export default App
