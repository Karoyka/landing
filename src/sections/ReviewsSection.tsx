"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const review1 = {
    avatar: "/avatar/avatar_1.png",
    text: "«Это именно то, что нужно нашему фермерскому сообществу. Прямой доступ к покупателям и получение обратной связи. Сразу станет понятно, что нужно клиентам.»",
    name: "Ольга",
    role: "Фермер зерновых и скота",
    region: "Витебская область",
};

const review2 = {
    avatar: "/avatar/avatar_2.png",
    text: "«Отличный сервис, который поможет стать заметнее. Теперь больше людей будет знать, где можно купить фермерскую говядину, свинину или птицу»",
    name: "Ян",
    role: "Животновод",
    region: "Могилевская область",
};

const review3 = {
    avatar: "/avatar/avatar_3.png",
    text: "«Это будет работать лучше сарафанного радио! Придётся увеличивать производственные мощности моей пасеки :) »",
    name: "Кандрат",
    role: "Пчеловод",
    region: "Гомельская область",
};

const QuoteIcon = ({className}: {className?: string}) => (
    <svg
        viewBox="0 0 79 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g opacity="0.2" clipPath="url(#clip0_7935_17446)">
            <path
                d="M40.1188 14.3505C38.8801 14.8375 37.8856 15.7966 37.354 17.0168C36.8224 18.237 36.7973 19.6184 37.2843 20.8572L42.7923 34.8689C43.2793 36.1076 44.2384 37.1022 45.4586 37.6338C46.6788 38.1654 48.0602 38.1904 49.2989 37.7035C49.9183 37.46 50.609 37.4726 51.2191 37.7384C51.8292 38.0041 52.3088 38.5014 52.5522 39.1208L53.4703 41.4561C53.9572 42.6948 53.9321 44.0762 53.4005 45.2964C52.869 46.5167 51.8744 47.4757 50.6357 47.9627C50.0163 48.2062 49.5191 48.6857 49.2533 49.2958C48.9875 49.9059 48.9749 50.5966 49.2184 51.216L51.0544 55.8866C51.2979 56.506 51.7774 57.0032 52.3876 57.269C52.9977 57.5348 53.6884 57.5473 54.3077 57.3039C58.0239 55.843 61.0075 52.9658 62.6023 49.3051C64.197 45.6445 64.2723 41.5002 62.8114 37.784L53.6313 14.4311C53.1444 13.1924 52.1853 12.1978 50.9651 11.6662C49.7449 11.1346 48.3634 11.1096 47.1247 11.5965L40.1188 14.3505Z"
                stroke="#5EA500"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.4304 24.4482C13.1916 24.9351 12.1971 25.8942 11.6655 27.1144C11.1339 28.3347 11.1088 29.7161 11.5958 30.9548L17.1039 44.9666C17.5908 46.2053 18.5499 47.1998 19.7701 47.7314C20.9903 48.263 22.3717 48.2881 23.6105 47.8012C24.2298 47.5577 24.9205 47.5702 25.5306 47.836C26.1408 48.1018 26.6203 48.5991 26.8638 49.2184L27.7818 51.5537C28.2687 52.7925 28.2436 54.1739 27.7121 55.3941C27.1805 56.6143 26.1859 57.5734 24.9472 58.0603C24.3279 58.3038 23.8306 58.7834 23.5648 59.3935C23.299 60.0036 23.2865 60.6943 23.5299 61.3137L25.366 65.9842C25.6094 66.6036 26.089 67.1009 26.6991 67.3667C27.3092 67.6325 27.9999 67.645 28.6193 67.4015C32.3354 65.9407 35.319 63.0635 36.9138 59.4028C38.5086 55.7421 38.5838 51.5978 37.123 47.8817L27.9429 24.5287C27.4559 23.29 26.4968 22.2955 25.2766 21.7639C24.0564 21.2323 22.675 21.2072 21.4362 21.6942L14.4304 24.4482Z"
                stroke="#5EA500"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_7935_17446">
                <rect width="79" height="79" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

type Review = typeof review1;

function ReviewCardSide({review}: { review: Review }) {
    return (
        <div className="bg-white flex flex-col border border-[#E5E7EB] rounded-3xl p-5 w-full h-full overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-[#F3F4F6] flex items-center justify-center overflow-hidden shrink-0">
                <Image src={review.avatar} alt={review.name} width={64} height={64} className="object-contain w-full h-full"/>
            </div>
            <p className="font-display font-normal italic text-[16px] leading-6 tracking-[-0.31px] text-[#364153] mt-2">
                {review.text}
            </p>
            <div className="flex flex-col gap-0.5 mt-auto">
                <p className="font-semibold text-[#101828] text-[16px] leading-6 tracking-[-0.31px]">{review.name}</p>
                <p className="text-text-muted text-[14px] leading-5 tracking-[-0.15px]">{review.role}</p>
                <p className="text-[#6A7282] text-[14px] leading-5 tracking-[-0.15px]">{review.region}</p>
            </div>
        </div>
    );
}

function ReviewCardCenter({review}: { review: Review }) {
    return (
        <div className="bg-white flex flex-col border border-[#E5E7EB] rounded-3xl p-5 w-full h-full overflow-hidden xl:my-3">
            <div className="w-16 h-16 rounded-full bg-[#F3F4F6] flex items-center justify-center overflow-hidden shrink-0">
                <Image src={review.avatar} alt={review.name} width={64} height={64} className="object-contain w-full h-full"/>
            </div>
            <p className="font-display font-normal italic text-[16px] leading-6 tracking-[-0.31px] text-[#364153] mt-2">
                {review.text}
            </p>
            <div className="flex flex-col gap-0.5 mt-auto">
                <p className="font-semibold text-[#101828] text-[16px] leading-6 tracking-[-0.31px]">{review.name}</p>
                <p className="text-text-muted text-[14px] leading-5 tracking-[-0.15px]">{review.role}</p>
                <p className="text-[#6A7282] text-[14px] leading-5 tracking-[-0.15px]">{review.region}</p>
            </div>
        </div>
    );
}

function MobileCarousel() {
    const [emblaRef] = useEmblaCarousel({align: "center", loop: false, dragFree: false});
    return (
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-stretch gap-4">
                <div className="flex-none w-[82%]"><ReviewCardSide review={review1}/></div>
                <div className="flex-none w-[82%]"><ReviewCardCenter review={review2}/></div>
                <div className="flex-none w-[82%]"><ReviewCardSide review={review3}/></div>
            </div>
        </div>
    );
}

export default function ReviewsSection() {
    return (
        <section className="py-16 w-full">
            <div className="w-full">

                {/* Header */}
                <div className="relative text-center py-6">
                    {/* Top 2 (mobile) / Left side (desktop) */}
                    <QuoteIcon className="absolute left-[10%] top-4 w-[48px] h-[48px] xl:left-[15%] xl:bottom-5 xl:top-auto xl:scale-125 xl:rotate-[52deg]"/>
                    <QuoteIcon className="absolute right-[10%] top-4 w-[61px] h-[61px] xl:left-[22%] xl:right-auto xl:top-5 xl:scale-125"/>
                    {/* Bottom 2 (mobile) / Right side (desktop) */}
                    <QuoteIcon className="absolute left-[10%] bottom-4 w-[48px] h-[48px] xl:right-[22%] xl:left-auto xl:top-8 xl:bottom-auto xl:scale-125 xl:rotate-[52deg]"/>
                    <QuoteIcon className="absolute right-[10%] bottom-4 w-[61px] h-[61px] xl:right-[15%] xl:bottom-6 xl:scale-125"/>

                    <h2 className="text-text font-extrabold text-[28px] xl:text-[32px] leading-10 tracking-[0.37px] mb-3">
                        Отзывы наших фермеров
                    </h2>
                    <p className="text-text-muted font-normal text-[18px] leading-7 tracking-[-0.44px] max-w-lg mx-auto">
                        Присоединяйтесь к растущему сообществу фермеров, готовых развивать
                        своё дело и находить новых клиентов вместе с нами.
                    </p>
                </div>

                {/* Mobile carousel */}
                <div className="xl:hidden -mx-5">
                    <MobileCarousel/>
                </div>

                {/* Desktop grid */}
                <div className="hidden xl:grid xl:grid-cols-3 gap-5 h-[322px]">
                    <ReviewCardSide review={review1}/>
                    <ReviewCardCenter review={review2}/>
                    <ReviewCardSide review={review3}/>
                </div>

            </div>
        </section>
    );
}
