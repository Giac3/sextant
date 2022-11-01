import './App.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import axios from "axios"; 
import { useState, useEffect } from 'react'

const backpic = new URL("./coolback.jpg", import.meta.url)




function App() {


  const [ipv4, setipv4] = useState([])

  useEffect( () => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const {data} = await axios.get('https://api.ipify.org?format=json')

    setipv4(data.ip)
  }

  const [ipv6, setipv6] = useState([])

  useEffect( () => {
    fetchData2()
  }, [])

  const fetchData2 = async () => {
    const {data} = await axios.get('https://api64.ipify.org?format=json')

    setipv6(data.ip)
  }

  const [stamp, setstamp] = useState([])

  const socket = new WebSocket("ws://localhost:55455" );
socket.onmessage = ({ data }) => {
  setstamp(data)
  
};

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  


  return (
 
    
    <section >

      
            <div className='sliderview'>
            <Slider {...settings}>
          <div className='card'>
            <h3 className='card-top'>ipv4</h3>
            <p className='card-bottom'>{ipv4}</p>
          </div>
          <div className='card'>
            <h3 className='card-top'>ipv6</h3>
            <p className='card-bottom'>{ipv6}</p>
          </div>
          <div className='card'>
            <h3 className='card-top'>Latency</h3>
            <p className='card-bottom'>{(new Date().getTime())- stamp}</p>
          </div>
          
        </Slider>

      </div>
      <div>
        <div class="header">
  <h1>Cisco App</h1>
</div>

      <img src={backpic} alt="cool" />


      </div>

      
</section>


  );
}

export default App;
