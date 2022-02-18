import React, { useEffect } from 'react'
import Header from '../../components/Header/Header';
import MainScreen from '../../components/MainScreen'
import axios from 'axios';
const Registeration = () => {
    
    const fetchNotes = async() =>
    {   
        const {data} = await axios.get("/api/notes");
        console.log(data);
    }
    
    useEffect(() => {
        fetchNotes();
    }, []);

    return (
      <div>
        <Header title="Registeration"  />
        <MainScreen title="Registeration">My Registeration</MainScreen>
      </div>
    );
}

export default Registeration