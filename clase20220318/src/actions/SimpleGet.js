export async function simpleGet(url){
    try{
        const apiResponse = await fetch(url).then((response)=>response.json());
        return apiResponse;
    }catch(error){
        return {error:"Se ha producido un error"+error}
    }
}