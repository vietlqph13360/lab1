import instance from "./config";

export const getAll = ()=>{
    return instance.get('/pokemons')
}
export const get = (id:Number)=>{
    return instance.get(`/pokemons/${id}`)
}