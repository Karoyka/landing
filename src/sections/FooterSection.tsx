import Image from "next/image";

export default function FooterSection() {
  return (
    <footer>
      {/* Cow banner — mobile */}
      <div className="xl:hidden flex items-end pr-4 pt-10 gap-4 -mx-5 overflow-hidden">
        <div className="shrink-0 -ml-[50%]">
          <Image
            src="/image/cow.webp"
            alt="Корова"
            width={400}
            height={360}
            loading="lazy"
            sizes="400px"
            className="object-contain object-bottom"
          />
        </div>
        <a href="https://t.me/karoyka" target="_blank" rel="noopener noreferrer" className="relative self-start -mt-10 -ml-16 w-52 block">
          <div className="bg-[#E9EEE1] rounded-xl px-4 py-4 font-display font-normal italic text-base leading-6 tracking-[-0.31px] text-black flex items-start gap-2">
            <span className="flex-1">Присоединяйтесь к нашему Telegram-каналу</span>
            <svg className="shrink-0 mt-0.5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.6" d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {/* Tail pointing bottom-left toward cow */}
          <svg
            width="21"
            height="27"
            viewBox="0 0 21 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-6.75 left-6"
          >
            <path d="M0 27C0 27 8.65576 24.9786 14.7741 15.1604C18.1248 9.78364 21 0 21 0H4.25049C4.25049 0 7.52137 4.47594 6.71551 13.139C6.2054 18.6228 0 27 0 27Z" fill="#E9EEE1"/>
          </svg>
        </a>
      </div>

      {/* Cow banner — desktop */}
      <div className="hidden xl:block relative h-36 -mx-[100px]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/image/cow.webp"
            alt="Корова"
            width={300}
            height={144}
            loading="lazy"
            sizes="300px"
            className="absolute bottom-0 left-0 h-full w-auto object-contain object-bottom"
          />
        </div>
        <a href="https://t.me/karoyka" target="_blank" rel="noopener noreferrer" className="absolute left-75 -top-2.5 z-10 block">
          <div className="relative">
            <div className="bg-[#E9EEE1] rounded-xl px-6 py-4 font-display font-normal italic text-base leading-6 tracking-[-0.31px] text-black flex items-center gap-3">
              Присоединяйтесь к нашему Telegram-каналу
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.6" d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <svg
              width="21"
              height="27"
              viewBox="0 0 21 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-6.75 left-6"
            >
              <path d="M0 27C0 27 8.65576 24.9786 14.7741 15.1604C18.1248 9.78364 21 0 21 0H4.25049C4.25049 0 7.52137 4.47594 6.71551 13.139C6.2054 18.6228 0 27 0 27Z" fill="#E9EEE1"/>
            </svg>
          </div>
        </a>
      </div>

      {/* Dark footer */}
      <div className="bg-[#3a3d2e] text-white -mx-5 xl:-mx-[100px]">
        <div className="pt-10 pb-8 px-5 xl:px-[100px]">
          {/* Mobile layout */}
          <div className="xl:hidden flex flex-col mb-10">
            <p className="font-bold text-lg mb-3">karoÿka</p>
            <p className="font-normal text-base leading-6 tracking-[-0.31px] text-[#D4D9CF] mb-8">
              Связываем производителей напрямую с покупателями
              для развития справедливой и устойчивой фермерской торговли.
            </p>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-3">
                <li><a href="#how-it-works" className="font-semibold text-xs leading-6 tracking-[-0.31px] text-white">Как это работает</a></li>
                <li><a href="#how-it-works-farmers" className="font-semibold text-xs leading-6 tracking-[-0.31px] text-white">Для фермеров</a></li>
                <li><a href="#how-it-works-buyers" className="font-semibold text-xs leading-6 tracking-[-0.31px] text-white">Для покупателей</a></li>
              </ul>
              <ul className="space-y-3">
                <li><a href="https://docs.google.com/document/d/1wL09XjZKP3ZLpv1yyBhqMdvIAhxOoHRROI_qM_ZBdII/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-semibold text-xs leading-6 tracking-[-0.31px] text-white">Политика использования cookie-файлов</a></li>
                <li><a href="#" className="font-semibold text-xs leading-6 tracking-[-0.31px] text-white">Пользовательское соглашение</a></li>
              </ul>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden xl:flex justify-between items-start mb-20">
            <div>
              <p className="font-bold text-lg mb-3">karoÿka</p>
              <p className="font-normal text-base leading-6 tracking-[-0.31px] text-[#D4D9CF]">
                Связываем производителей напрямую с покупателями<br />
                для развития справедливой и устойчивой фермерской торговли.
              </p>
            </div>
            <div className="flex gap-8">
              <ul className="space-y-3">
                <li><a href="#how-it-works" className="font-semibold text-xs leading-6 tracking-[-0.31px] text-white hover:text-white transition-colors">Как это работает</a></li>
                <li><a href="#how-it-works-farmers" className="font-semibold text-xs leading-6 tracking-[-0.31px] text-white hover:text-white transition-colors">Для фермеров</a></li>
                <li><a href="#how-it-works-buyers" className="font-semibold text-xs leading-6 tracking-[-0.31px] text-white hover:text-white transition-colors">Для покупателей</a></li>
              </ul>
              <ul className="space-y-3">
                <li><a href="#" className="font-semibold text-xs leading-6 tracking-[-0.31px] text-white hover:text-white transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="font-semibold text-xs leading-6 tracking-[-0.31px] text-white hover:text-white transition-colors">Пользовательское соглашение</a></li>
              </ul>
            </div>
          </div>

          {/* Legal */}
          <div className="font-normal text-base leading-6 tracking-[-0.31px] text-[#D4D9CF] mb-8">
            <p>© 2021, ИП Анцук Максим Александрович, УНП 693157845, г. Вилейка, ул. Посёлок Рабочий, 4, пом. 4</p>
            <p>Все права защищены</p>
          </div>

          {/* Divider */}
          <hr className="border-white/20 mb-5" />

          {/* Credit */}
          <p className="text-center text-white text-sm mt-8">
            Сайт разработан от дизайна до реализации{" "}
            <a href="#" className="text-white underline hover:opacity-80 transition-opacity">
              студией Kamar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
