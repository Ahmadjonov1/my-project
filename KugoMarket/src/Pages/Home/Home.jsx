import React, { useEffect, useState } from "react";
import dron1 from "./дрон 1.png";
import past from "./Arrow 18 (Stroke).png";
import fire from "./fire_1f525 1.png";
import smkt from "./6V7A6493 3.png";
import girl from "./apka.png";
import samarkat from "./smkatimg.png";
import tarozi from "./tarozi.png";
import akumlator from "./accumulator 1.png";
import power from "./power 1.png";
import speed from "./speed.png";
import timer from "./09-timer.png";
import shopping from "./shopping-cart-2 1.png";
import yurak from "./yurak.png";
import axiosInstance from "../utils/axcios"; // To'g'rilandi: axiosInstructionce -> axiosInstance

const Home = () => {
  // ✅ 1. Products state ini yaratish
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ 2. API dan ma'lumot olish funksiyasi
  async function getProducts() {
    try {
      setLoading(true);
      const res = await axiosInstance('/products');
      console.log("API javobi:", res.data);
      
      // Ma'lumotlarni state ga saqlash
      if (res.data && Array.isArray(res.data)) {
        setProducts(res.data);
      } else if (res.data && res.data.products) {
        setProducts(res.data.products);
      } else {
        setProducts([]);
      }
    } catch (err) {
      console.error("API xatosi:", err);
      setError(err.message);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="home">
      <div className="home-nav">
        <div>
          <img src={dron1} alt="dron" />
        </div>
        <div className="nav-text">
          <button className="red-btn">Акция</button>
          <h1>До 01.09 бесплатная <br /> доставка самокатов <br /> по всей России</h1>
          <button className="btn-white">Подробнее</button>
        </div>
      </div>
      <section>
        <h1 className="section-hed1">Фильтр</h1>
        <div className="section-flex">
          <div className="left-div">
            <div className="blue-box">
              <h1>Цена</h1>
              <input type="range" />
              <div className="input-mini-def">
                <input type="text" defaultValue={0} />
                <span>--</span>
                <input type="text" defaultValue={55000} />
              </div>
              <div className="mini-box">
                <h1>Тип</h1>
                <div>
                  <input type="checkbox" id="aa" />
                  <label htmlFor="aa">Внедорожный</label>
                </div>
                <div>
                  <input type="checkbox" id="bb" />
                  <label htmlFor="bb">Городской</label>
                </div>
                <div>
                  <input type="checkbox" id="ss"/>
                  <label htmlFor="ss">Зимний</label>
                </div>
              </div>
              <div className="mini-box">
                <h1>Для кого</h1>
                <div>
                  <input type="checkbox" id="dd"/>
                  <label htmlFor="dd">Для взрослого</label>
                </div>
                <div>
                  <input type="checkbox" id="ff"/>
                  <label htmlFor="ff">Для ребенка</label>
                </div>
                <div>
                  <input type="checkbox" id="gg"/>
                  <label htmlFor="gg">Для пенсионера</label>
                </div>
              </div>
              <div className="mini-box">
                <h1>Вес</h1>
                <div>
                  <input type="checkbox" id="qq"/>
                  <label htmlFor="qq">Легкие (до 15 кг)</label>
                </div>
                <div>
                  <input type="checkbox" id="ww"/>
                  <label htmlFor="ww">Средние (15-30 кг)</label>
                </div>
                <div>
                  <input type="checkbox" id="ee"/>
                  <label htmlFor="ee">Тяжелые (свыше 30 кг)</label>
                </div>
              </div>
              <div className="bottm-text">Показать весь фильтр <img src={past} alt="" /></div>
            </div>
            <div className="orange-bg">
              <div>
                <h1><img src={fire} alt="" /> Товар месяца</h1>
              </div>
              <hr />
              <div className="flex-flex">
                <div>
                  <img src={smkt} alt="smkt" />
                </div>
                <div>
                  <p>Kugoo Kirin M4</p>
                  <h2>29 900 ₽</h2>
                </div>
              </div>
            </div>
            <div className="green-bg">
              <div className="flex-flex">
                <div>
                  <img src={girl} alt="girl" />
                </div>
                <div>
                  <h2>Задать вопрос <br /> менеджеру</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="section-right">
            <div>
              <div className="products-grid">
                {/* ✅ 3. Loading va error holatlarini tekshirish */}
                {loading ? (
                  <div className="loading">Yuklanmoqda...</div>
                ) : error ? (
                  <div className="error">Xatolik: {error}</div>
                ) : products.length === 0 ? (
                  <div className="no-products">Mahsulotlar mavjud emas</div>
                ) : (
                  // ✅ 4. Mahsulotlarni chiqarish
                  products.map((product) => (
                    <div key={product.id} className="product-card">
                      {product.pictures && (
                        <img 
                          src={product.pictures} 
                          alt={product.name || product.title} 
                          className="product-image"
                        />
                      )}
                      <h3>{product.name || product.title}</h3>
                      <p className="product-price">{product.price} ₽</p>
                      <button className="buy-btn">Купить</button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;