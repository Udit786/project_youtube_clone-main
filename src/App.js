import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import Uploader from "./components/Uploader";
import Login from "./components/Login";
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route exact path='/' element={<div><Navbar /><Feed /></div>} />
        <Route path='/video/:id' element={<div><Navbar /><VideoDetail /></div>} />
        <Route path='/channel/:id' element={<div><Navbar /><ChannelDetail /></div>} />
        <Route path='/search/:searchTerm' element={<div><Navbar /><SearchFeed /></div>} />
        <Route path='/upload' element={<div><Navbar /><Uploader /></div>} />

      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
