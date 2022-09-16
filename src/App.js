import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/main/Main";
export default function App() {
  return (
    <>
      <Header/>
      <main>
        <Aside/>
        <Main/>
      </main>
    </>
  )
}