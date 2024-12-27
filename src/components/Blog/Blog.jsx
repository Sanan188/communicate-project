import blogBgLeft from "../../assets/image/circle-bg-img.png";
import blogHalfCircle from "../../assets/image/half-circle-right-icon.png";
import triangleIcon from "../../assets/image/triangle-icon.png";
import { DefaultCircle } from "../components.styles";
import BlogCard from "./BlogCard";
const blogcards = [
  {
    img: "https://fins.az/file/articles/2021/07/23/1627038962_azerpocht-logo-png.png",
    name: "By Sanan Abbasov",
    date: "Dekabr 24, 2024",
    confirmation: "Azərpoçt",
    text: " Milli poçt operatoru “Azərpoçt” Məhdud Məsuliyyətli Cəmiyyəti hazırda respublika ərazisində geniş xidmət şəbəkəsinə malik olmaqla, əhalinin bütün təbəqələrinə, eləcə də hüquqi şəxslərə münasib qiymətlərlə ənənəvi və qeyri-ənənəvi poçt xidmətlərinin və poçt-maliyyə xidmətlərinin göstərilməsini həyata keçirir.",
  },
  {
    img: "https://abb-bank.az/storage/uploads/1625582479_logo-yaziile.png?v=690",
    name: "By Raul Həsənov",
    date: "Mar 9, 2024",
    confirmation: "Elektron Ticarət",
    text: "Elektron ticarətlə məşğulsunuzsa, online mağazanızda kartların ödənişə qəbulunu təşkil etmək və beləliklə müştərilərinizə yüksək səviyyədə xidmət göstərmək üçün bizə müraciət edin! Kartların ödənişə qəbulu Sizin biznesinizin imkanlarını genişləndirir:",
  },
  {
    img: "https://pmo.az/images/news/bb_1723024114.jpg",
    name: "By Qara Qaralı",
    date: "oktyabr 10, 2024",
    confirmation: "Bakcell",
    text: "Bakcell müasir rabitə xidmətləri istifadəçilərini onların arzu və tələblərini qarşılamaq üçün yaradılmış ən son həllər və yeniliklərlə təmin edir.2022-ci ildə Bakcell Azərbaycanda ilk dəfə olaraq e-SIM texnologiyasını istifadəyə verib.  ",
  },
];
const Blog = () => {
  return (
    <section id="blog">
      <img id="triangle-icon" src={triangleIcon} alt="Triangle" />
      <DefaultCircle color="#003E68" className="default-circle" />
      <img id="blogHalfCircle" src={blogHalfCircle} alt="Desire Half Circle" />
      <div className="blog__container">
        <div className="blog__top">
          <p>Son xəbərlər</p>
          <h1>Bloq və Məqalələr</h1>
        </div>
        <div className="blog__cards">
          {blogcards.map((blogcard, index) => {
            return <BlogCard item={blogcard} id={index} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Blog;
