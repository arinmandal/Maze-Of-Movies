import { BG_URL } from "../Utils/constant"
import AiSearchBar from "./AiSearchBar"
import AiSuggestions from "./AiSuggestions"

const AiSearch = () => {
  return (
    <div className='bg-main min-h-screen object-cover bg-cover bg-fixed'>
      {/* <img className="h-screen object-cover" src={BG_URL} alt="" /> */}
      <AiSearchBar />
      <AiSuggestions />
    </div>
  )
}

export default AiSearch