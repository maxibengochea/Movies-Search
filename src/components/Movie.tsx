interface Props{
  title: string,
  year: string, 
  poster: string
}

export function Movie({ title, year, poster }: Props){
  return (
    <div>
      <h3 className="text-white text-[20px] font-bold">{title}</h3>
      <p className="text-white text-[15px] font-medium">{year}</p>
      <img 
        className="rounded-[15px] max-h-[300px] w-[100%] text-white mb-[10px] aspect-[9/14] object-cover"
        src={poster}
        alt={`${title}'s picture`}
      />
    </div>
  )
}