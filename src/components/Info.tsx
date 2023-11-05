import Image from "next/image";
import { Element } from "react-scroll";
const Info = () => {
  return (
    <Element
      name="info"
      className="w-[80%] min-h-screen md:h-[470px] flex flex-col justify-center items-center mx-auto mt-4 md:flex-row"
    >
      <div className="w-[100%] md:w-[50%] flex items-center justify-center">
        <Image
          width={400}
          height={400}    
          src="/assets/img/profile.jpg"
          className="shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-lg"
          alt="Image"
        />
      </div>
      <div className="w-[100%] mt-6 md:w-[50%] md:h-[470px] md:flex md:flex-col md:justify-center py-2">
        <p className="mb-3 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:mr-3
        first-letter:float-left">
          1996-cı ildə Quba rayonunda dünya gəlmişəm. 2018-ci ildə Bakı Dövlət
          Universiteti Dünya İqtisadiyyatı ixtisası üzrə təhsilimi tamamlamışam.
          2019-cu ilə qədər hərbi xidməti yerinə yetirmişəm.
        </p>
        <p>
          Mən dinamik və nəticəyönümlü bir insanam, analitik düşünmə qabiliyyəti
          və effektiv ünsiyyət bacarıqları formalaşdırmışam. Təhsilim, iş
          təcrübəm və fərdi inkişaf üçün oxuduğum kitablar,qatıldığım seminarlar
          mənə layihə idarəçiliyi və komandada işləmək bacarığımı inkişaf
          etdirmişdir.
        </p>
        <p>
          İT sahəsinə marağım məktəb illərindən olub. Lakin təhsil aldığım
          ixtisas məni bu sahədən muvəqqəti uzaqlaşdırmışdı. Bu il mart ayında
          Coders Azərbaycan tədris mərkəzinin dövlət dəstəyi ilə təşlil etdiyi
          &quot;Full-Stack developer &quot; (HTML, CSS, JS, PHP, LARAVEL ) kursunda iştirak
          edərək  &quot;web development &quot; ilkin anlayışları və yanaşmaları öyrəndim.
          Hədəfim Full-stack Javascript developer olmaqdır. Hazırda  &quot;Studorium
          consulting &quot; şirkəti üçün nextJs ilə hazırladığım saytın testləri davam edir.
        </p>
      </div>
    </Element>
  );
};
export default Info;
