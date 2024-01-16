import { getAllPlayers } from "../API/API"
import NewPlayersForm from './NewPlayerForm'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const cohortName = "2309-FTB-ET-WEB-PT";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export default function AllPLayers () {
    const [players, setPlayers] = useState([])
    const navigate =useNavigate()

    useEffect(()=>{
        async function fetchAllPlayers() {
            try {
                // const response = await fetch (APIURL + "players");
                // const json = await response.json();
                // console.log(json);
                //return json.data.players;
                const playerList = await getAllPlayers()
                //console.log(playerList);
                setPlayers(playerList.data.players);
            } catch (err) {
                console.error('Ruh roh, trouble fetching players');
            }
        } fetchAllPlayers();
    }, [])

    useEffect (()=>{
        console.log(players)
    },[players])

    async function deletePlayer(playerId) {
        try {
            const response = await fetch(`${APIURL}players/${playerId}`, {
                method: "DELETE",
            });
            console.log("Player Removed");
            //location.reload()    
        } catch (err) {
            console.error(
                `Whoops, trouble removing player #${playerId} from the roster!`,
                err
            );
        }
    }

    if (players == null){
        return(
        <li>Looks like we don't currently have any players.</li>
    )}
    return (
        <div id="all-players-container">
            <NewPlayersForm />
            {players.map((player) => {
                return(
                    <section key={player.id}>
                        <h3 className="box1">Name: {player.name}</h3>
                        <h3 className="box2"># {player.id}</h3>
                        <img src={player.imageUrl} alt={`${player.name} a ${player.breed} puppy`} className="box3"/>
                        <h4 className="box4">Breed: {player.breed}</h4>
                        <h4 className="box5">Status: {player.status}</h4>
                        <button className="box6" onClick={() => {
                            const playerId = player.id
                            navigate(`/players/${playerId}`)
                            console.log(playerId)
                        }}>See Details</button>
                        <button className="box7" onClick={() =>{
                            const playerId = player.id
                            deletePlayer(playerId)
                        }}>Remove Player</button>
                    </section>
                )
            })}
            
        </div>
    )
}