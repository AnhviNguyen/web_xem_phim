import React,{ useContext, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {fetchDataFromApi} from "./utils/api";
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration, getGenres } from './store/homeSlice';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Register from "./pages/login/form/register";
import Details from "./pages/details/Details";
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';
import { UserContext, UserProvider } from './auth/userContext';
import { getUserInfo } from './auth/getUserInfo';

function App() {
  const { setUser } = useContext(UserContext);

    useEffect(() => {
        // Fetch user info on load
        getUserInfo().then((data) => {
            if (data!= null) {
              console.log(data);
              setUser(data);
            }
        });
    }, []);

  //la 1 ham cua redux dung de gui action tu EVENT HANDLER sang Store cua redux
  const dispatch = useDispatch();
  //lay du lieu tu store cua redux va cap nhat vao UI
  const {url} = useSelector((state)=>state.home);

  useEffect(()=>{
    fetchApiConfig();//invoke method
    genresCall();
  },[])//[]-dependency

const fetchApiConfig = () =>{
  fetchDataFromApi('/configuration')
    .then((res)=>{
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }

      dispatch(getApiConfiguration(url))
    });
};

//use promises because 2 request should send to server to get 2 responses at the same time.
const genresCall = async ()=>{
  let promises = [];
  let endPoints = ["tv","movie"];
  let allGenres = {};

  endPoints.forEach((url) =>{
    promises.push(fetchDataFromApi(`/genre/${url}/list`));
  });

  const data = await Promise.all(promises);
  console.log(data);
  data.map(({genres}) =>{
    return genres.map((item)=>(allGenres[item.id] = item));
  });

  //store genres in redux store
  dispatch(getGenres(allGenres));
};


  return (
   
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:mediaType/:id' element={<Details />} />
          <Route path='/search/:query' element={<SearchResult />} />
          <Route path='/explore/:mediaType' element={<Explore />} />
          <Route path="/login" element={<Login initialForm="login" />} />
          <Route path="/register" element={<Login initialForm="register" />} />
          <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
  </BrowserRouter>

  )
}

export default () => (
  <UserProvider>
      <App />
  </UserProvider>
);
