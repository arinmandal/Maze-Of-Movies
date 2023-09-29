const AiSearchBar = () => {
  return (
    <div className="flex justify-center pt-32">
      <form action="" className="w-1/2 bg-black grid grid-cols-12">
        <input className="col-span-9 p-3 m-3" type="text" placeholder="What would you like to watch today?" />
        <button className="bg-yellow-500 p-3 m-3 col-span-3 font-sans font-semibold">
          Search
        </button>
      </form>
    </div>
  )
}

export default AiSearchBar