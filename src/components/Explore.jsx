import { Link } from "react-router-dom";
import '../App.css'
import '../components/Carousel'
import axios from 'axios'
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/DataProvider";

function Explore() {
    const { user, setUser } = useContext(DataContext);
    const get_Exp = async () => {
        const url = 'http://127.0.0.1:5000/api/API'
        const response = await axios.get(url) 
        return response.status === 200 ? response.data : null
    }
    const load_Anime = async () => {
        const data = await get_Exp()
        console.log(data)
        setAnime(data)
    }
    const [anime, setAnime] = useState(() => load_Anime())
    const {addAnime, setAddAnime} = useContext(DataContext);
    
    const addCard = (anime) => {
// make copy
        let copyAnime = {...anime}
        // change copy
        copyAnime[anime.id] 
        console.log(copyAnime);
        // set State
        setAnime(copyAnime)
    }

    const addWatch = async (user_id, a_id) => {
        let data = {'user_id' : user_id, 'a_id' : a_id}
        const response = await axios.post('http://localhost:5000/addToWatchList', JSON.stringify(data), {
            headers : {'Content-Type' : 'application/json'}
        })
    }
    
    
    return (
        <> 
            <div className="flx-r wrapper cent">

            {anime.posts && anime.posts.length > 0 ? Object.values(anime.posts).map((a, i) => {
                return <div key={i} className="cardEx  flx-c mx">
                    <div className='cardB white flx-c p8 tog '>
                        <div className="flx1 lnk">{a.rating}</div>
                        <hr className="h" />
                        <div className="flx1 lnk"><Link className="lnk" target='_blank' to={a.trail}>Watch Trailer</Link></div>
                        <hr className="h" />
                        <div className="flx1 lnk"><Link className="lnk" target='_blank' to={a.new_url}>Anime Info</Link></div>
                        <hr className="h" />
                        <div className="flx8 scrol">{a.syn}</div>
                        <div className="space"></div>
                        <div className="flx1 lnk"><button className="addWL" onClick={() => addWatch(a.id, user.id)}>Add to Watch List</button></div>
                    </div>
                    <div className="flx5  p8 "><img className="img" src={a.img} alt="" /></div>
                    <div className="flx1 title p8"><p className='title'>{a.engT}</p> </div>
                    <div className="flx1  p8"><p className='title'>{a.japT}</p></div>
                </div> }): null}
                    
            </div>

        </>
    )
}

export default Explore;