import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


export default function Footer(){
    return <footer>
        <Box bgcolor="text.secondary" color="white">
            <Container>
                <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs: 5, sm: 0}}>
                    Daniel Diaz y Juan Ortega <br/>
                    Presentan:<br/>
                    Proyecto CamelShop <br/>
                    Material UI <br/>
                    {new Date().getFullYear()}&reg;                    
                </Box>       
            </Container>
        </Box>
    </footer>;
}