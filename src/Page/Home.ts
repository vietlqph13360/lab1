import { getAll } from "../api/PokemonApi"
import Poke from "./poke"
const HomePage = {
   async render(){
        const {data} = await getAll()
        console.log(data);
        
        const reponsive:Poke[] = data 
        return /*html*/`
        <div class="container tw-flex tw-flex-wrap tw-w-3/4 ">
            ${reponsive.map((item)=>{
                return /*html*/`
                <div class="row tw-m-1" style="width:190px">
                <div class="col">
                    <div class="card" >
                  <a href ="/Pokemon/${item.id}" data-navigo>  <img src="${item.image}" class="card-img-top" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="card-title">
                        ${item.name}
                        </h5>
                        <p class="card-text"></p>
                    </div>
                    </div>
                </div>
                </div>  
                `
            }).join("")}
        </div>
        `
    }
}
export default HomePage