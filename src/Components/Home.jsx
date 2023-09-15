import React, { useEffect } from 'react';
import HomeTop from './HomeTop';
import './SCSS/Home.scss';
import HomeMiddle1 from './HomeMiddle1';
import HomeMiddle2 from './HomeMiddle2';
import HomeMiddle3 from './HomeMiddle3';
import HomeMiddle4 from './HomeMiddle4';
import ProductsForYou from './ProductsForYou';
import Header from './Header';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { userIsLogginnedStart, verifyUserStart } from '../Redux/action';

export default function Home() {
  const dispatch = useDispatch();
  const verifiedUser = useSelector((state)=>state.verifiedUser);
  //jw token
  const jwtoken = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    if (jwtoken) {
      dispatch(verifyUserStart(jwtoken.token));
    } 
  }, []);
  useEffect(() => {
    if (verifiedUser) {
      if (verifiedUser.authorise) {
        dispatch(userIsLogginnedStart(true));
      }
    }
  }, [verifiedUser]);
  return (
    <>
    <Header />
    <HomeTop />

    <h1 id='homeH1'>
    <span>---------</span>     Top Categories to choose from     <span>---------</span>
    </h1>
    <HomeMiddle1 />
    <HomeMiddle2 />
    <HomeMiddle3 />
    <HomeMiddle4 />
    <ProductsForYou />

    <Footer />
    </>
  )
}
