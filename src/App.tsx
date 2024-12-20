import { HeaderApp } from "./components/HeaderApp"
import { Results } from "./components/Results"

export function App() {
  return (
    <>
      <HeaderApp/> 
      <main className="flex items-center justify-center">
        <Results/>
      </main>
    </>
  )
}