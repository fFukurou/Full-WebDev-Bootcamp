import './App.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';
import Navbar from "./Navbar";

function App() {
  return (
    <div>
          {/* <Button size="small" variant="contained">Contained</Button>
          <Button variant="text">Contained</Button>
          <Button size="large" color="success" variant="outlined">Contained</Button>
          <br />
          <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
          </IconButton> */}
          {/* <RatingDemo/> */}
          <Navbar/>
          <FormDemo/>

    </div>
  )
}

export default App;
