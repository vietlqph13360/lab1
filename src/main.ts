import './style.css'
import '../index.css'
import Navigo from 'navigo'
import HomePage from './Page/Home'
import Pokemon from './Page/Pokemon'
// import { getAll } from './api/PokemonApi';
const router = new Navigo("/", { linksSelector: "a" })
async function print(content:any,id?:any) {
  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = await content.render(id); 
  }
}

router.on({
  "/":()=>print(HomePage),
  "/Pokemon/:id":(data:any)=>print(Pokemon,data.data.id)
  

})
router.resolve()