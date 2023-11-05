import Image from "next/image";
import { BsFillCalendarCheckFill } from "react-icons/bs";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  validate: string;
  dateData: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  validate,
  dateData,
}) => {
  return (
    <div className="w-[350px] relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40
    before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity
    before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100
    before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full
    after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)]
    after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden"
    >
      <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
        <div className="flex flex-col h-full items-center text-center">
          <div className="relative inline-flex">
            <div
              className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
              aria-hidden="true"
            ></div>
            <Image
              src={imageSrc}
              width={200}
              height={200}
              alt="Card"
            />
          </div>
          <div className="grow mb-5">
            <h2 className="text-xl text-slate-200 font-bold mb-1">{title}</h2>
            <p className="text-sm text-slate-500">{description}</p>
          </div>
          <p
            className="inline-flex justify-center items-center gap-3 whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900
            border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring
            focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
          >
            <BsFillCalendarCheckFill color={validate} size={20} />
            <span className="">{dateData}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
