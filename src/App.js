import './App.css';
import { data } from './data';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const backpic = new URL("./coolback.jpg", import.meta.url)

function App() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
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
      <Slider {...settings} className='cards'>
{data.map((item) => (
  <div className='card'>
  <div className='card-top'>
    <h1>{item.title}</h1>
  </div>
  <div className='card-bottom'>
    <h3>
      Hello
    </h3>
  </div>
  </div>
))}
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
