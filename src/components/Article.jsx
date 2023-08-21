import { Element } from "react-scroll";
const Article = () => {
  return (
    <Element
      name="article"
      className=" w-[80%] md:h-screen md:items-center mx-auto flex flex-col mt-4 gap-10"
    >
      <div className="md:mt-[20%]">
        {" "}
        <h1 className="text-center text-3xl ">Əlavə Məlumatlar</h1>
      </div>
      <div>
        <ul className="flex flex-col justify-left gap-2 list-disc">
          <li>
            <p>Blockchain və Web3 xüsusi maraq dairəmdir.</p>
          </li>
          <li>
            <p>
              Son 2 ildir ki, stock market və forex birjaları ilə maraqlanıram.
            </p>
          </li>
          <li>
            <p>Şahmat çox sevdiyim hobbidir.</p>
          </li>
          <li>
            <p>
              Texnoloji innovasiyalar və startup-lar daim diqqət mərkəzimdədir.
            </p>
          </li>
          <li>
            <p>Asudə vaxtlarımı ailəm və dostlarımla keçirməyi xoşlayıram.</p>
          </li>
          <li>
            <p>
              Psixologiyamı, reflekslərimi, düşünmə tərzimi tətqiq etməyi və
              dəyişməyi xoşlayıram.
            </p>
          </li>
        </ul>
      </div>
    </Element>
  );
};

export default Article;
