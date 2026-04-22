import Image from "next/image";
import {NavBar} from "@/components/NavBar";
import {HeroSection} from "@/sections/HeroSection";
import {HowItWorksSection} from "@/sections/HowItWorksSection";
import {HowItWorksFarmers} from "@/sections/HowItWorksFarmers";
import {HowItWorksBuyers} from "@/sections/HowItWorksBuyers";
import {JoinWaitlistSection} from "@/sections/JoinWaitlistSection";
import ReviewsSection from "@/sections/ReviewsSection";
import FooterSection from "@/sections/FooterSection";

export default function Home() {
    return (
        <main className="relative min-h-screen w-full overflow-x-clip">

            {/* CONTAINER */}
            <div className="max-w-screen-xl mx-auto w-full relative">

                {/* HERO IMAGE — desktop */}
                <Image
                    src="/img.png"
                    alt=""
                    width={1440}
                    height={1200}
                    loading="lazy"
                    sizes="(min-width: 1440px) 1440px, 0px"
                    className="hidden xl:flex absolute top-[-115px] right-[-115px] w-[1440px] max-w-none pointer-events-none select-none"
                />

                {/* HERO IMAGE — mobile */}
                <div className="xl:hidden absolute inset-0 pointer-events-none select-none">
                    <Image
                        src="/img_mobile.png"
                        alt=""
                        width={716}
                        height={900}
                        priority
                        sizes="(max-width: 1440px) 100vw, 716px"
                        className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[716px] max-w-none"
                    />
                    <div className="absolute top-0 left-0 right-0 h-[750px]" style={{
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 20%, rgba(255,255,255,0.7) 70%, rgba(255,255,255,0) 100%)',
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 70%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 70%, transparent 100%)',
                    }}/>
                </div>

                <div className="px-5 xl:px-[100px] xl:max-w-none max-w-[410px] mx-auto xl:mx-0 relative z-10 flex flex-col gap-[64px]">
                    <NavBar/>
                    <div className="xl:-mx-[100px] xl:px-[120px]">
                        <HeroSection/>
                    </div>
                    <section id="how-it-works" aria-label="Что такое Кароўка"><HowItWorksSection/></section>
                    <section id="how-it-works-farmers" aria-label="Как это работает для фермеров"><HowItWorksFarmers/></section>
                    <section id="how-it-works-buyers" aria-label="Как это работает для покупателей"><HowItWorksBuyers/></section>
                    <section id="join" aria-label="Вступить в список ожидания"><JoinWaitlistSection/></section>
                    <div id="reviews"><ReviewsSection/></div>
                    <FooterSection/>
                </div>
            </div>

        </main>
    );
}
