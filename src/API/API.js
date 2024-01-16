const cohortName = "2309-FTB-ET-WEB-PT";
// Use the APIURL variable for fetch requests
export const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export async function getAllPlayers () {
    try {
        const response = await fetch(`${APIURL}players`)
        const data = await response.json()
        console.log(data)
        return data
    } catch (error){
        console.log(error)
    }
}

export async function getSinglePlayer (playerId) {
    try {
        const response = await fetch(`${APIURL}players/${playerId}`)
        const data = await response.json()
        console.log(data.data.player)
        return data.data.player
    } catch (error){
        console.log(error)
    }
}