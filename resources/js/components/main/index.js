import React from 'react';
import { Link } from 'react-router-dom';


export default class Main extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column">
      
      <div className="d-flex home-screen flex-column justify-content-center text-center">
        <div className="home-screen__content">
          <p className="home-screen__descriptions">Ініціативна група творчих людей, яких манить небо у всьому  своєму проявленні. Моделювання авіатехніки, ракетно-космічної техніки,  оптичних приладів, електронних систем – це ще неповний перелік інтересів  групи.</p>
        </div>
      </div>

      <div id="about" className="d-flex w-100 page-section">
        <div className="container flex-column ">
          <div className="row justify-content-between">
            <div className="col">
              <h2 className="">Команда</h2>
            </div>

            <div className="w-100 page-divider"></div>

            <div className="col-md-5">
              <div className="page-content-text">
                <p>Ми - група ентузіастів, аматорів, інженерів, поєднані спільною метою створювати різні пристрої своїми руками. Починалося все зі студентських років. Кожен займався або моделюванням ракет чи літаків, або виготовленням якихось приладів. Однак 
Зараз ми працюємо в ракетно-космічній галузі та втілюємо в життя свої задуми використовуючи нові знання та можливості. 
</p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <div className="page-content-image">
                <img className="img-fluid rounded" src="/images/team-2.jpg"></img>
              </div>
            </div>

            <div className="w-100 page-divider page-divider_bottom"></div>
          </div>
        </div>
      </div>

      <div id="projects" className="d-flex w-100 page-section">
        <div className="container flex-column ">
          <div className="row justify-content-between text-right">
            <div className="col">
              <h2 className="">Проекти</h2>
            </div>

            <div className="w-100 page-divider"></div>


            <div className="col-md-6 d-flex">
              <div className="page-content-image">
                <img className="img-fluid rounded" src="/images/rocket-2.jpg"></img>
              </div>
            </div>        

            <div className="col-md-5">
              <div className="page-content-text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur delectus sit inventore vel, eaque earum, tenetur quisquam aperiam natus tempora at numquam minima architecto vitae modi optio iusto beatae?</p>
              </div>

              <ul className="section-nav">
                <li><a href=""><span className="section-nav__link">Модель-копія ОТРК “Точка-У” в масштабі 1:8</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
                <li><a href=""><span className="section-nav__link">Модель-копія ракети 8К14 в масштабі 1:8, що літає на воді</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
                <li><a href=""><span className="section-nav__link">Твердопаливні багаторазові ракетні двигуни</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
                <li><a href=""><span className="section-nav__link">Тяговимірювальний вогневий стенд</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
                <li><a href=""><span className="section-nav__link">Модель водяної ракети ”Дана”</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
              </ul>

              <Link to="projects">MORE</Link>
              
            </div>

            <div className="w-100 page-divider page-divider_bottom"></div>
          </div>  
        </div>
      </div>

      <div id="events" className="d-flex w-100 page-section">
        <div className="container flex-column ">
          <div className="row justify-content-between">
            <div className="col">
              <h2 className="">Події</h2>
            </div>

            <div className="w-100 page-divider"></div>

            <div className="col-md-5">
              <div className="page-content-text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur delectus sit inventore vel, eaque earum, tenetur quisquam aperiam natus tempora at numquam minima architecto vitae modi optio iusto beatae?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur delectus sit inventore vel, eaque earum, tenetur quisquam aperiam natus tempora at numquam minima architecto vitae modi optio iusto beatae?
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <div className="page-content-image">
                <img className="img-fluid rounded" src="/images/events.jpg"></img>
              </div>
            </div>

            <div className="w-100 page-divider page-divider_bottom"></div>
          </div>
        </div>
      </div>

      <div id="expositions" className="d-flex w-100 page-section">
        <div className="container flex-column ">
          <div className="row justify-content-between text-right">
            <div className="col">
              <h2 className="">Виставки</h2>
            </div>

            <div className="w-100 page-divider"></div>


            <div className="col-md-6 d-flex">
              <div className="page-content-image">
                <img className="img-fluid rounded" src="/images/exposition.jpg"></img>
              </div>
            </div>        

            <div className="col-md-5">
              <div className="page-content-text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur delectus sit inventore vel, eaque earum, tenetur quisquam aperiam natus tempora at numquam minima architecto vitae modi optio iusto beatae?</p>
              </div>
            </div>

            <div className="w-100 page-divider page-divider_bottom"></div>
          </div>  
        </div>          
      </div>

    </div>
    );
  }
}