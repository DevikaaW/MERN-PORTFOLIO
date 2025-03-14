
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Loader from './components/Loader';
import { useEffect, useCallback } from 'react';
import { SetPortfolioData } from './redux/rootSlice';
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";


function App() {
  const {loading, portfolioData} = useSelector((state)=> state.root);
  const dispatch = useDispatch();
  const getPortfolioData = useCallback(async () => {
    try {
        const response = await axios.get('http://localhost:5001/api/portfolio/get-portfolio-data');
        dispatch(SetPortfolioData(response.data));
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}, [dispatch]);
  useEffect(()=>{
    getPortfolioData();
  }, [getPortfolioData]);
  useEffect(()=>{
    console.log(portfolioData);
  }, [portfolioData]);

  return (
    <BrowserRouter>
    {loading? <Loader/> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
