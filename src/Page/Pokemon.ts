import { get } from "../api/PokemonApi"
import Poke from "./poke"
const Pokemon = {
   async render(id:Number){
        const {data} = await get(id)
        const reponsive:Poke= data 
        return /*html*/`
        <div class="container tw-justify-center tw-flex tw-flex-wrap tw-w-3/4 ">
                <div class="row tw-m-1" style="width:230px">
                <div class="col">
                    <div class="card" >
                        <img src="${reponsive.image}" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h2 class="card-title tw-font-bold">
                            ${reponsive.name}
                        </h2>
                        <p class="card-text">
                            <span class ="tw-underline tw-decoration-pink-500">Abilities</span> : ${reponsive.abilities.map((items)=>{
                                return /*html*/`
                                    ${items.ability.name}
                                `
                            }).join('')}
                        </p>
                        <p class="card-text">
                        <span class ="tw-underline  tw-decoration-sky-500">Type</span> : ${reponsive.type.map((items)=>{                            
                                return /*html*/`
                                    ${items.type.name}
                                `
                            }).join('')}
                        </p>
                    </div>
                    </div>
                </div>
                </div>  
        </div>
        `
    }
}
export default Pokemon