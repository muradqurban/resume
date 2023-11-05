import { useEffect, useState } from 'react';
import Card from './Card';
import roadmapData from '../data/roadmap_data.json';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { Element } from 'react-scroll';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const RoadMap: React.FC = () => {
  useEffect(() => {
    const container = document.querySelector('.grid[data-spotlight]') as HTMLElement | null;
    const cards = Array.from(container?.children || []);

    const initContainer = () => {
      containerSize.w = container?.offsetWidth || 0;
      containerSize.h = container?.offsetHeight || 0;
    };

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const rect = container?.getBoundingClientRect();
      if (!rect) return;

      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const inside = x < containerSize.w && x > 0 && y < containerSize.h && y > 0;
    };

    const containerSize = { w: 0, h: 0 };

    initContainer();
    window.addEventListener('resize', initContainer);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('resize', initContainer);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const [isMobileScreen, setIsMobileScreen] = useState(false);
  useEffect(() => {
    setIsMobileScreen(window.innerWidth <= 768);
  }, []);

  const cardsPerSlide = isMobileScreen ? 1 : 3;

  return (
    <Element name="roadmap" className="relative font-inter antialiased mt-4">
      <div className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div
            className="max-w-sm mx-auto grid gap-10 lg:grid-cols-1 items-start lg:max-w-none group"
            data-spotlight
          >
            <Carousel
              autoPlay
              infiniteLoop={true}
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              emulateTouch={true}
              swipeable={true}
            >
              {(() => {
                const slides: JSX.Element[] = [];
                for (let i = 0; i < roadmapData.length; i += cardsPerSlide) {
                  const cards: JSX.Element[] = [];
                  for (let j = i; j < i + cardsPerSlide && j < roadmapData.length; j++) {
                    const card = roadmapData[j];
                    cards.push(
                      <div key={card.id}>
                        <Card
                          imageSrc={card.imageSrc}
                          title={card.title}
                          description={card.description}
                          validate={card.validate}
                          dateData={card.dateData}
                        />
                      </div>
                    );
                  }
                  slides.push(
                    <div key={i} className="flex space-x-4">
                      {cards}
                    </div>
                  );
                }
                return slides;
              })()}
            </Carousel>
          </div>
        </div>
      </div>
      <footer className="absolute left-6 right-6 md:left-12 md:right-auto bottom-4 md:bottom-8 text-center md:text-left cursor-pointer">
        <span className="text-xs text-slate-500 hover:underline flex flex-row gap-2 items-center">
          <BsFillCalendarCheckFill color="green" /> Tamamlanıb
        </span>
        <span className="text-xs text-slate-500 hover:underline flex flex-row gap-2 items-center">
          <BsFillCalendarCheckFill color="red" /> Dayandırlıb
        </span>
        <span className="text-xs text-slate-500 hover:underline flex flex-row gap-2 items-center">
          <BsFillCalendarCheckFill color="skyblue" /> Öyrənirəm
        </span>
      </footer>
    </Element>
  );
};

export default RoadMap;
