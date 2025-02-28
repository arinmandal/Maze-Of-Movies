import AiSearchBar from "./AiSearchBar"
import AiSuggestions from "./AiSuggestions"

const AiSearch = () => {
  return (
    <div className='bg-main min-h-screen object-cover bg-cover bg-fixed'>
      <AiSearchBar />
      <AiSuggestions />
    </div>
  )
}

export default AiSearch