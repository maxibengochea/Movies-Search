import { useSearch } from "../hooks/useSearch"

export function HeaderApp(){
  const { handleChange, handleSubmit } = useSearch()

  return (
    <header className="flex flex-col items-center justify-center min-h-[150px] gap-[10px]">
      <h1 className="text-[40px] text-white [text-shadow:_2px_2px_15px_white] font-bold">Movies Search</h1>
      <form
        className="flex items-center justify-center gap-[10px] w-[50%]" 
        onSubmit={handleSubmit}>
        <input
          className="w-[60%] rounded-[15px] p-[5px] border-none bg-slate-100"
          placeholder="Movie..."
          type="text"
          onChange={handleChange}
        />
        <button className="bg-white px-[5px] py-[3px] rounded-[10px] hover:cursor-pointer hover:bg-red-100 text-center">search</button>
      </form>
    </header>
  )
}