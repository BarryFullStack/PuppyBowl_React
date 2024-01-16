import { Link } from 'react-router-dom'

export default function NavBar () {
    return (
        <div id='navbar'>
            <h3>This is NavBar</h3>
            <div>
                <Link to='/' id="home">To Home</Link>
                <Link to='/singleplayer' id="singleplayer">Player Info</Link>
            </div>
        </div>
    )
}