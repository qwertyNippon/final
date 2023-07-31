import { Link } from "react-router-dom";
import React from "react";
import '../App.css';
import { Button } from "bootstrap";

// const imagebg = new URL('../assets/pics/home_pic.png',import.meta.url)

function Home() {
    return (
        <> 
            <section className="bg">

                <div className="homeT redL">
                    <h1>The World's Smallest <br />
                     Anime Collection</h1>
                    <div className="freeT"> Start 14-Day Free Trial</div>
                </div>
            </section>
        </>
)}
{/* <img src={imagebg} alt="background-pic" /> */}

export default Home;