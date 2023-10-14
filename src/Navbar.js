import { Button } from 'react-bootstrap';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link ,NavLink} from 'react-router-dom';

function Navbarr ()
{
    return <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink style={{color:'purple',fontSize:'20px',fontWeight:'bolder',textDecoration:'none'}}  to="/">React Learn</NavLink>
                <Nav className="m-auto ">
                    <Button variant='warning' className='m-2'><NavLink style={{color:'purple',fontSize:'20px',textDecoration:'none'}} to='/home'>Home</NavLink></Button>
                    <Button variant='warning' className='m-2'><NavLink style={{color:'purple',fontSize:'20px',textDecoration:'none'}} to ='/about'>About</NavLink></Button>
                     <Button variant='warning' className='m-2'><NavLink style={ { color: 'purple', fontSize: '20px', textDecoration: 'none' } } to="/contact">Contact</NavLink></Button>
                    <Button variant='warning' className='m-2'><NavLink style={ { color: 'purple', fontSize: '20px', textDecoration: 'none' } } to="/reactLearningTopics">React Learning Topics</NavLink></Button>
                    <Button variant='warning' className='m-2'><NavLink style={ { color: 'purple', fontSize: '20px', textDecoration: 'none' } } to="/login">Login</NavLink></Button>
                    <Button variant='warning' className='m-2'><NavLink style={ { color: 'purple', fontSize: '20px', textDecoration: 'none' } } to="/api">API</NavLink></Button>

                    
                </Nav>
            </Container>
        </Navbar>
    </>;
}
export default Navbarr;