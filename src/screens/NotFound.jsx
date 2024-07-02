import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section style={{textAlign: "center"}}>
      <div id="paper-overlay"></div>
      <h2>Sorry I could't find the page you were looking for</h2>
      <Link to="/"><button>Go back home</button></Link>
    </section>
  )
}
