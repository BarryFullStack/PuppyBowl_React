import { useState, useEffect } from 'react'

const cohortName = "2309-FTB-ET-WEB-PT";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export default function NewPlayersForm (setRefresh) {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [status, setStatus] = useState('bench');
    const [teamId, setTeamId] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    
    async function handleSubmit (event) {
        event.preventDefault ();

        try {
            const response = await fetch (`${APIURL}players`, {
                method: 'post',
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({ 
                    name, 
                    breed,
                    status,
                    teamId,
                    imageUrl,
                }),
            });
            const result = await response.json();
            console.log ('handleSubmit', result);
            window.location.reload();
        } catch (error) {
            console.error('Could not add player.');
        }
        //setRefresh(true);
    }
    return (
        <div>
            {/* <h3>The NewPlayersForm Component</h3> */}
            <form id="new-player">
            <label>
                Name:
                <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                Breed:
                <input type="text" name="breed" onChange={(e) => setBreed(e.target.value)}/>
            </label>
            <label>
                Status:
                <select type="enum" name="status" onChange={(e) => setStatus(e.target.value)}>
                    <option value="bench">Bench</option>
                    <option value="field">Field</option>
                </select>
            </label>
            <label>
                Team Number:
                <input type="number" min="0" max ="2" name="teamId" onChange={(e) => setTeamId(e.target.value)}/>
            </label>
            <label>
                Picture:
                <input type="text" name="imageUrl" onChange={(e) => setImageUrl(e.target.value)}/>
            </label>
            <button type="submit" onClick={handleSubmit}>Add Player</button>
        </form>
        </div>
    )
}