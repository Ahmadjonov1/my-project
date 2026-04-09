import { NavLink } from "react-router";
import "./footer.css"
import gogleplay from "./googleplay.png"
import applee from "./apple.png"
import wk from "./wk.png"
import insatgram from "./intagram.png"
import youtube from "./youtube.png"
import tg from "./telegram.png"
import goglepay from "./GooglePay.png"
import applepay from "./ApplePay.png"
import visa from "./visa-logo.png"
import mastercard from "./Mastercard.png"
import maestro from "./Maestro.png"
import webmoney from "./Webmoney (1).png"
import qwi from "./Qiwi.png"
import tel from "./watsap.png"
import watsap from "./003-whatsapp 1.png"
import telegram from "./003-telegram 1.png"


const footer = () => {
    return (
        <div className="footer">
            <div className="footer-head-flex">
                <div>
                    <h1>Оставьте свою почту и станьте первым, <br /> кто получит скидку на новые самокаты</h1>
                </div>
                <div>
                    <input type="email" placeholder="Введите Ваш email" />
                </div>
                <div>
                    <button>Подписаться</button>
                </div>
            </div>
            <header>
                <div className="footer-flex-flex margin-middle-footer">
                    <div className="footer-flex-flex">
                        <div className="footer-dblock">
                            <NavLink><b>Каталог товаров</b></NavLink>
                            <NavLink>Электросамокаты</NavLink>
                            <NavLink>Электроскутеры</NavLink>
                            <NavLink>Электровелосипеды</NavLink>
                            <NavLink>Электровелосипеды</NavLink>
                        </div>
                        <div className="footer-dblock">
                            <NavLink><b>Покупателям</b></NavLink>
                            <NavLink>Сервисный центр</NavLink>
                            <NavLink>Доставка и оплата</NavLink>
                            <NavLink>Рассрочка</NavLink>
                            <NavLink>Тест-драйв</NavLink>
                        </div>
                        <div className="footer-dblock">
                            <NavLink><b>.</b></NavLink>
                            <NavLink>Блог</NavLink>
                            <NavLink>Сотрудничество</NavLink>
                            <NavLink>Контакты</NavLink>
                            <NavLink>Акции</NavLink>
                        </div>
                    </div>
                    <div>
                        <div className="footer-flex-flex justfiy-content">
                            <div>
                                <NavLink><b>Контакты</b></NavLink>
                            </div>
                            <div>
                                <NavLink><span>Заказать звонок</span></NavLink>
                            </div>
                        </div>
                        <div className="footer-flex-flex footer-item-flex">
                            <div>
                                <h3>Call-центр</h3>
                                <h1>+7 (800) 505-54-61</h1>
                                <p>Пн-Вс 10:00 - 20:00</p>
                            </div>  
                            <div className="left-mrg">
                                <h3>Сервисный центр</h3>
                                <h1>+7 (499) 350-76-92</h1>
                                <p>Пн-Вс 10:00 - 20:00</p>
                            </div>
                        </div>
                        <div className=" three-div">
                            <div>
                                <span>Магазин в Москве <br /> ул. Ткацкая, 5 стр. 16</span>
                                <p>+7 (499) 406 15 87</p>
                            </div>
                            <div className="left-right-footer">
                                <span>Магазин в Санкт <br />-Петербурге <br />ул. Фрунзе, 2</span>
                                <p>+7 (499) 406 15 87</p>
                            </div>
                            <div>
                                <span>Магазин в Краснодаре  <br />ул. Восточно <br />-Кругликовская, 86</span>
                                <p>+ 7 (800) 505 54 61</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="footer-bottom-hr" />
                <div className="footer-buttom-logo">
                    <div className="footer-buttom-logo-left">
                        <NavLink>Kugoo</NavLink>
                        <div className="footer-bottom-logo-flex-left">
                            <div>
                                <img src={gogleplay} alt="" />
                            </div>
                            <div>
                                <p>ДОСТУПНО НА</p>
                                <h2>Google Play</h2>
                            </div>
                        </div>
                        <div className="footer-bottom-logo-flex-left">
                            <div>
                                <img src={applee} alt="" />
                            </div>
                            <div>
                                <p>Загрузите в</p>
                                <h2>App Store</h2>
                            </div>
                        </div>
                    </div>
                    <div className="footer-buttom-logo-right">
                        <div className="footer-bottom-logo-flex-right">
                            <div>
                                <img src={wk} alt="" />
                            </div>
                            <div>
                                <h2>ВКонтакте</h2>
                                <p>3 300</p>
                            </div>
                        </div>
                        <div className="footer-bottom-logo-flex-right">
                            <div>
                                <img src={insatgram} alt="instagram" />
                            </div>
                            <div>
                                <h2>Instagram</h2>
                                <p>10 602</p>
                            </div>
                        </div>
                        <div className="footer-bottom-logo-flex-right">
                            <div>
                                <img src={youtube} alt="youtube" />
                            </div>
                            <div>
                                <h2>YouTube</h2>
                                <p>3 603</p>
                            </div>
                        </div>
                        <div className="footer-bottom-logo-flex-right">
                            <div>
                                <img src={tg} alt="tg" />
                            </div>
                            <div>
                                <h2>Telegram</h2>
                                <p>432</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-end-block">
                    <div className="footer-end-block-left">
                        <NavLink>Реквизиты</NavLink>
                        <NavLink>Политика конфиденциальности</NavLink>
                    </div>
                    <div className="footer-end-block-right">
                        <div className="footer-end-block-right">
                            <div className="bg-footer-dev-pay">
                                <img src={goglepay} alt="" />
                            </div>
                            <div className="bg-footer-dev-pay">
                                <img src={applepay}alt="" />
                            </div>
                            <div className="bg-footer-dev-pay">
                                <img src={visa} alt="" />
                            </div>
                            <div className="bg-footer-dev-pay">
                                <img src={mastercard} alt="" />
                            </div>  
                            <div className="bg-footer-dev-pay">
                                <img src={maestro} alt="" />
                            </div>
                            <div className="bg-footer-dev-pay">
                                <img src={webmoney} alt="" />
                            </div>
                            <div className="bg-footer-dev-pay">
                                <img src={qwi} alt="" />
                            </div>
                        </div>
                        <div className="footer-end-block-right">
                            <p>Online чат:</p>
                            <img src={tel} alt="" />
                            <img src={watsap} alt="" />
                            <img src={telegram} alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default footer;