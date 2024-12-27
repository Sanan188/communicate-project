import React, { useState } from "react";
import TeamImages from "./TeamImages";
import TeamContent from "./TeamContent";
import halfCircle from "../../assets/image/half-circle-left-icon.png";
import { DefaultCircle } from "../components.styles";

function Team() {
  const MEMBERS = [
    {
      avatar:
        "https://img.freepik.com/premium-photo/cute-cartoon-boy-with-glasses-smiling-line-icon-white_1106493-512867.jpg?w=360",
      description:
        "Direktorlar şurasından alınan məqsədə çatmaq üçün strategiya yaradır və həyata keçirir; O, şirkətin indiki vaxtını idarə edən, eyni zamanda gələcəyini planlaşdıran və direktorlar şurasına cavabdeh olan şəxsdir.",
      member: "Sənan Abbasov",
      skill: "CEO of the company",
    },
    {
      avatar:
        "https://cdn-icons-png.flaticon.com/512/921/921006.png",
      description:
        "CTO baş informasiya zabitinə (CIO) çox bənzəyir. CTO-lar təşkilatın məqsədlərinə yaxından uyğun gələn geniş texnologiya infrastrukturu üçün qərarlar qəbul edəcəklər, CIO-lar isə gündəlik əməliyyatları yerinə yetirmək üçün təşkilatın informasiya texnologiyaları (İT) işçiləri ilə birlikdə işləyirlər. , əsasən onların təşkilati strukturundan asılı olaraq.",
      member: "Araz Taghizade",
      skill: "CTO",
    },
    {
      avatar:
        "https://cdn-icons-png.flaticon.com/512/10539/10539295.png",
      description:
        "Baş maliyyə direktoru (CFO) təşkilatın ən yaxşı maliyyə mütəxəssisidir və biznesin maliyyə sağlamlığına cavabdehdir. CFO-nun vəzifələri bunlarla məhdudlaşmır: tənzimləmə qaydalarına uyğunluq, büdcələşdirmə, pul vəsaitlərinin hərəkətinin idarə edilməsi, maliyyə planlaması və təhlili (FP&A), ssenari modelləşdirilməsi, potensial birləşmə və satınalma (M&A) hədəfləri barədə CEO-ya məsləhətlər, ilkin kütləvi təkliflər (IPO-ların planlaşdırılması) , kapitalın büdcələşdirilməsi, borc və kapitalın maliyyələşdirilməsinin əldə edilməsi və investorlarla əlaqələrin idarə edilməsi.",
      member: "Qara Qaralı",
      skill: "CFO",
    },
    {
      avatar:
        "https://cdn-icons-png.flaticon.com/512/701/701994.png",
      description:
        "COO Baş Əməliyyat Direktoru deməkdir. COO-lar şirkət daxilindəki bütün əməliyyatların səmərəli icrasına cavabdehdirlər.",
      member: "Eyyub Bayramov",
      skill: "COO",
    },
    {
      avatar:
        "https://cdn-icons-png.flaticon.com/512/3667/3667820.png",
      description:
        "CMO abbreviaturası Baş Marketinq Müdiri ifadəsinin baş hərflərindən ibarətdir. CMO bir şirkətin və ya təşkilatın marketinq fəaliyyətini idarə edən ən yüksək səviyyəli icraçıdır.",
      member: "Rəvan Rəhimli",
      skill: "CMO",
    },
    {
      avatar:
        "https://cdn-icons-png.flaticon.com/512/3884/3884864.png",
      description:
        "İnsan resursları meneceri; O, fəaliyyət göstərdiyi şirkət və ya təşkilatın kadrların işə qəbulu proseslərinə nəzarət edir. Şirkət işçiləri üçün insan resursları planlarını və prosedurlarını hazırlayır.",
      member: "Raul Həsənov",
      skill: "HR Manager",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section id="team">
      <DefaultCircle color="#003E68" className="default-circle" />

      <img id="halfCircle" src={halfCircle} alt="half-circle" />

      <div className="team__container">
        <TeamImages
          active={active}
          setActive={setActive}
          count={MEMBERS.length}
          data={MEMBERS}
        />
        <TeamContent
          data-aos="fade-right"
          active={active}
          setActive={setActive}
          data={MEMBERS}
        />
      </div>
    </section>
  );
}

export default Team;
