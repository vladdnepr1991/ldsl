import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import './style.scss'

export default class Projects extends React.Component {
  render() {
    return (
      <div className="d-flex flex-grow-1">

        <div className="page-section">
          <div className="container ">
            <div className="row">
              <div className="col">
                <h1>ПРОЕКТИ</h1>

                <p>
                Всі проекти створювалися нами від самого початку до кінця з метою оволодінням новими навиками, технологіями, а також “бо мені так хочеться”)). 
                Вся інформація викладена тільки для ознайомлення. Ми не несемо ніякої відповідальності за використання та розповсюдження її іншими особами.
                </p>
                
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                  <Card className="inline-card">
                    <CardImg top width="100%" src="/images/engine.jpg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Модель-копія ОТРК “Точка-У” в масштабі 1:8</CardTitle>
                      <CardSubtitle>Rocket</CardSubtitle>
                      <CardText>Хотілося відтворити цю ракету, бо вона єдина, що лишилася в Україні на озброєнні. Окрім того вона твердопаливна, одноступенева, і, відповідно, можна  найбільш точно відтворити її політ.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
              </div>

              <div className="col-md-4">
                  <Card className="inline-card">
                    <CardImg top width="100%" src="/images/engine.jpg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Модель-копія ОТРК “Точка-У” в масштабі 1:8</CardTitle>
                      <CardSubtitle>Rocket</CardSubtitle>
                      <CardText>Хотілося відтворити цю ракету, бо вона єдина, що лишилася в Україні на озброєнні. Окрім того вона твердопаливна, одноступенева, і, відповідно, можна  найбільш точно відтворити її політ.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
              </div>

              <div className="col-md-4">
                  <Card className="inline-card">
                    <CardImg top width="100%" src="/images/engine.jpg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Модель-копія ОТРК “Точка-У” в масштабі 1:8</CardTitle>
                      <CardSubtitle>Rocket</CardSubtitle>
                      <CardText>Хотілося відтворити цю ракету, бо вона єдина, що лишилася в Україні на озброєнні. Окрім того вона твердопаливна, одноступенева, і, відповідно, можна  найбільш точно відтворити її політ.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
              </div>

              <div className="col-md-4">
                  <Card className="inline-card">
                    <CardImg top width="100%" src="/images/engine.jpg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Модель-копія ОТРК “Точка-У” в масштабі 1:8</CardTitle>
                      <CardSubtitle>Rocket</CardSubtitle>
                      <CardText>Хотілося відтворити цю ракету, бо вона єдина, що лишилася в Україні на озброєнні. Окрім того вона твердопаливна, одноступенева, і, відповідно, можна  найбільш точно відтворити її політ.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
              </div>
              
              <div className="col-md-4">
                  <Card className="inline-card">
                    <CardImg top width="100%" src="/images/engine.jpg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Модель-копія ОТРК “Точка-У” в масштабі 1:8</CardTitle>
                      <CardSubtitle>Rocket</CardSubtitle>
                      <CardText>Хотілося відтворити цю ракету, бо вона єдина, що лишилася в Україні на озброєнні. Окрім того вона твердопаливна, одноступенева, і, відповідно, можна  найбільш точно відтворити її політ.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
              </div>

              <div className="col-md-4">
                  <Card className="inline-card">
                    <CardImg top width="100%" src="/images/engine.jpg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Модель-копія ОТРК “Точка-У” в масштабі 1:8</CardTitle>
                      <CardSubtitle>Rocket</CardSubtitle>
                      <CardText>Хотілося відтворити цю ракету, бо вона єдина, що лишилася в Україні на озброєнні. Окрім того вона твердопаливна, одноступенева, і, відповідно, можна  найбільш точно відтворити її політ.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
              </div>                                                
            </div>          
          </div>

        </div>
        
      </div>
    );
  }
}