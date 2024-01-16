import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { getSinglePlayer } from "../API/API"

const cohortName = "2309-FTB-ET-WEB-PT";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;
//{setSinglePlayerId, player})
export default function SinglePlayer () {
    const [player, setPlayer] = useState({})
    const {playerId} = useParams()
    // const [id, setId] = useState()
    
    useEffect(()=>{
        async function getPlayer() {
            try {
                const response = await fetch (APIURL + `players/${playerId}`);
                const playerData = await response.json();
                //console.log(playerData.data.player);
                //return playerData.data.player;
                // const playerData = await getSinglePlayer(id)
                // console.log(playerData);
                setPlayer(playerData.data.player);
            } catch (err) {
                console.error(`Oh no, trouble fetching player #${playerId}!`, err);
            }
        } getPlayer();
    }, [playerId])

    // useEffect (()=>{
    //     console.log(player)
    // },[player])

    if (player.team == null){
        return (
            <div className="singlepage">
                {/* <h3>The SinglePlayer Component</h3> */}
                {/* <input type='number' onChange={(event)=> setId(event.target.value)}/> */}
                <div className="singleplayer">
                    <h3>Name: {player.name}</h3><h3>#{player.id}</h3>
                    <img src={player.imageUrl} alt={`${player.name} a ${player.breed} puppy`}/>
                    <h4>Breed: {player.breed}</h4>
                    <h4>Team: {player.team}</h4>
                    <h4>Status: {player.status}</h4>
                </div>
            </div>
        )
    } else{
        return (
            <div className="singlepage">
                {/* <h3>The SinglePlayer Component</h3> */}
                {/* <input type='number' onChange={(event)=> setId(event.target.value)}/> */}
                <div className="singleplayer">
                    <h3>Name: {player.name}</h3><h3>#{player.id}</h3>
                    <img src={player.imageUrl} alt={`${player.name} a ${player.breed} puppy`}/>
                    <h4>Breed: {player.breed}</h4>
                    <h4>Team: {player.team.name}</h4>
                    <h4>Status: {player.status}</h4>
                </div>
            </div>
        )
    }
    
}    