import React from 'react';
import { Link } from 'react-router-dom';


export default class Main extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column flex-grow-1">
      
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
                <p className="lead">Ми - група ентузіастів, аматорів, інженерів, поєднані спільною метою створювати різні пристрої своїми руками. Починалося все зі студентських років. Кожен займався або моделюванням ракет чи літаків, або виготовленням якихось приладів. Однак 
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


            <div className="col-md-5 d-flex">
              <div className="page-content-image">
                <img className="img-fluid rounded" src="/images/rocket-2.jpg"></img>
                <img className="img-fluid rounded mt-5" src="/images/team_2.jpg"></img>
              </div>

            </div>        

            <div className="col-md-6">
              <div className="page-content-text">
                <p>Всі проекти створювалися нами від самого початку до кінця з метою оволодінням новими навиками, технологіями, а також “бо мені так хочеться” :). Звісно, що не всьо получалося з першого разу. Деякі помилки, які можуть бути цікавими з точки зору інженерії, ми виклали в описах, щоб можна було прослідкувати хід думок та алгоритм розв’язку задач. Ми охоплюємо багато напрямків досліджень та відпрацювання технологій. Найбільше акцентована увага на саморобних ракетах, а також багаторазових твердопаливних ракетних двигунах для них. В переліку ви також знайдете саморобні телескопи, верстати, електроніка та багато іншого.
Ми не претендуємо на правильність мислення, однак пропонуємо до розгляду свої варіанти вирішення інженерних задач.
</p>
              </div>

              <ul className="section-nav">
                <li><a href="/projects"><span className="section-nav__link">Модель-копія ОТРК “Точка-У” в масштабі 1:8</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
                <li><a href="/projects"><span className="section-nav__link">Модель-копія ракети 8К14 в масштабі 1:8, що літає на воді</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
                <li><a href="/projects"><span className="section-nav__link">Твердопаливні багаторазові ракетні двигуни</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
                <li><a href="/projects"><span className="section-nav__link">Тяговимірювальний вогневий стенд</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
                <li><a href="/projects"><span className="section-nav__link">Модель водяної ракети ”Дана”</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
              </ul>

              <Link className="more-btn" to="projects">Більше ...</Link>
              
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
                <p>Розділ присвячений нашій участі в різних заходах наукового технічного характеру, або таких, що мають відношення до результатів нашої діяльності. В цю категорію входять хакатони, конкурси та науково-практичні конференції.
                </p>
              </div>

              <ul className="section-nav">
                <li><a href="/events"><span className="section-nav__link">Хакатон NASA Space Apps Challenge 2017</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
                <li><a href="/events"><span className="section-nav__link">Хакатон NASA Space Apps Challenge 2018</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
                <li><a href="/events"><span className="section-nav__link">Startrack 1</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
                <li><a href="/events"><span className="section-nav__link">Startrack 2</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
                <li><a href="/events"><span className="section-nav__link">Startrack 3</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
              </ul>
              <Link className="more-btn" to="events">Більше ...</Link>
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
                <p>Демонстрація результатів та проектів на заходах, організованих з метою популяризації  науки і техніки. </p>
              </div>



              <ul className="section-nav">
                <li><a href="/expositions"><span className="section-nav__link">Техфест 2016-2018</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
                <li><a href="/expositions"><span className="section-nav__link">Kyiv Mini Maker Faire 2017-2018</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
                <li><a href="/expositions"><span className="section-nav__link">Odesa Mini Maker Faire 2017-2018</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
                <li><a href="/expositions"><span className="section-nav__link">Lviv Mini Maker Faire 2018</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
                <li><a href="/expositions"><span className="section-nav__link">Dnipro Mini Maker Faire 2018</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
                <li><a href="/expositions"><span className="section-nav__link">Kharkiv Mini Maker Faire 2018</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>
                <li><a href="/expositions"><span className="section-nav__link">Форум з ракетобудування в Tech Startup School</span><span className="section-nav-arrow"><i className="fas fa-arrow-right"></i></span></a></li>


              </ul>
              <Link className="more-btn" to="expositions">Більше ...</Link>              
            </div>

            <div className="w-100 page-divider page-divider_bottom"></div>
          </div>  
        </div>          
      </div>

    </div>
    );
  }
}