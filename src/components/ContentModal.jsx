import React from "react";
import { ArrowButton } from "./components.styles";

function ContentModal({ modalActive, setModalActive }) {
  return (
    <aside
      onClick={() => setModalActive(false)}
      className={`content__modal ${modalActive ? "active-modal" : ""}`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="content__modal-container"
      >
        <ArrowButton onClick={() => setModalActive(false)}>
          <i className="ri-close-line"></i>
        </ArrowButton>
        <img
          src="https://html.designingmedia.com/folioflix/assets/image/web-development-model-img.jpg"
          alt=""
        />
        <div className="content__modal-content">
          <h1>Rəqəmsal Xidmət</h1>
            <p>
              Rəqəmsal xidmətlər müasir dövrdə texnologiyanın inkişafı ilə birlikdə geniş yayılan bir konseptdir. Bu xidmətlər fərdlərə, müəssisələrə və hökumətlərə müxtəlif prosesləri rəqəmsal mühitdə icra etməyə imkan verir. Rəqəmsal xidmətlər fərqli sahələri əhatə edə bilər, məsələn:
            </p>
          <ul>
            <li>
              İnternet bankçılığı, mobil ödəniş sistemləri, elektron pul kisələri kimi xidmətlər maliyyə əməliyyatlarının asan və sürətli aparılmasını təmin edir.
            </li>
            <li>
              Onlayn alış-veriş platformaları, çatdırılma və izləmə xidmətləri müştərilərə rahatlıq və geniş seçim imkanları təqdim edir.
            </li>
            <li>
              Onlayn kurslar, vebinarlar və rəqəmsal tədris platformaları təhsili daha əlçatan edir və öyrənmə prosesini fərdiləşdirir.
            </li>
          </ul>
          <p>
            Ümumilikdə, rəqəmsal xidmətlər cəmiyyətin inkişafını dəstəkləyən mühüm alətlərdən biridir və onların potensialı düzgün istifadə edildikdə həyat keyfiyyətini xeyli artırır.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default ContentModal;
