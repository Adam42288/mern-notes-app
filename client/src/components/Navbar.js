import { Link } from 'react-router-dom';

const Navbar = () => {
    const style = {
        position: "absolute",
        top: "0"
        
    }

    return (
        <header style={style}>
            <div className='container'>
                <Link to="/">
                    <h1>Secret Keeper</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar;