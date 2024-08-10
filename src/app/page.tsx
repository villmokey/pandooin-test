"use client"

import Image from "next/image";
import Logo from '../assets/images/logo-zamrood.png';
import LogoColor from '../assets/images/logo-zamrood-color.png';
import { ArrowIcon, CloseIcon, MenuIcon } from "@/components/atoms/Icon";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import PersonalItineraries from '../assets/images/personal-itineraries.png';
import BestFacilities from '../assets/images/best-facilities.png';
import ExclusiveExperiences from '../assets/images/exclusive-experiences.png';
import Puzzle from '../assets/images/puzzle.png';
import Separator from '../assets/images/separator.png';
import { useQuery } from "@tanstack/react-query";
import { getArticles, getProducts } from "./api";
import {DestinationList} from "@/components/organism/DestinationList";
import { DestinationPotraitList } from "@/components/organism/DestinationPotraitList";
import { LuxuryFootages } from "@/components/organism/LuxuryFootages";
import { ArticleList } from "@/components/organism/ArticleList";
import { Footer } from "@/components/organism/Footer";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
  const [headerScrolled, setHeaderScrolled] = useState<boolean>(false)

  const translateSidebar = isSidebarOpen ? 'translate-x-[30%]' : 'translate-x-full';
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)'
  });

  const { isPending: isPendingProduct, data: pd } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  const productData = pd?.data

  const { isPending: isPendingArticle, error, data: ad } = useQuery({
    queryKey: ['articles'],
    queryFn: getArticles
  })

  const articleData = ad?.data

  useEffect(() => {
    if (isDesktopOrLaptop) {
      setIsSidebarOpen(false);
    }
  }, [isDesktopOrLaptop])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 400) {
        setHeaderScrolled(true)
      } else {
        setHeaderScrolled(false)
      }
    })
  })

  const headerTextColor = headerScrolled ? 'hover:border-[#004040] text-[#004040]' : 'hover:border-white text-white'

  return (
    <>
      <div className={`w-full font-bold py-7 hidden lg:block xl:block fixed top-0 z-10 ${headerScrolled && 'bg-white shadow-md'}`}>
        <div className="container flex justify-between">
          <Image src={headerScrolled ? LogoColor : Logo} width={135} height={50} alt="Logo Zamrood"/>
          <div className={`hover:border-b-[1.99px] ${headerTextColor}  flex px-2`}>
            <a href="#homepage" className="my-auto">Homepage</a>
          </div>
          <div className={`hover:border-b-[1.99px] ${headerTextColor}  flex px-2`}>
            <a href="#customize-your-trip" className="my-auto">Customize Your Trip</a>
          </div>
          <div className={`hover:border-b-[1.99px] ${headerTextColor}  flex px-2`}>
            <a href="#destination" className="my-auto">Destination</a>
          </div>
          <div className={`hover:border-b-[1.99px] ${headerTextColor}  flex px-2`}>
            <a href="#article" className="my-auto">Article</a>
          </div>
          <div className={`border-2 flex rounded-full px-4 w-[180px] ${headerScrolled ? 'hover:bg-[#004040] hover:text-white text-[#004040] border-[#004040] ' : 'hover:bg-white hover:text-black text-white'} `}>
            <a href="#" className="my-auto mx-auto">Need Assistance?</a>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="w-full bg-white flex lg:hidden xl:hidden px-10 py-5 justify-between fixed top-0 z-10 shadow-md">
        <Image src={LogoColor} width={130} alt="Logo Color" />
        <button onClick={() => setIsSidebarOpen(true)}>
          <MenuIcon />
        </button>
      </div>
      {/* Mobile Header */}

      <main className="m-0 p-0" id="homepage">
        {/* Mobile menu */}
        <div className={`fixed w-full h-screen ${headerScrolled ? 'bg-greeny' : 'backdrop-blur'} transition-all duration-300 ${translateSidebar} z-10 p-4`}>
          <button onClick={() => setIsSidebarOpen(false)}>
            <CloseIcon headerScrolled={headerScrolled} />
          </button>
          <div className="border-b-[1.99px] border-white px-2 text-white mt-10">
            <a href="#homepage" className="my-auto text-center">Homepage</a>
          </div>
          <div className="border-b-[1.99px] border-white px-2 text-white my-5">
            <a href="#customize-your-trip" className="my-auto">Customize Your Trip</a>
          </div>
          <div className="border-b-[1.99px] border-white px-2 text-white my-5">
            <a href="#destination" className="my-auto">Destination</a>
          </div>
          <div className="border-b-[1.99px] border-white px-2 text-white my-5">
            <a href="#article" className="my-auto">Article</a>
          </div>
          <div className="border-2 flex rounded-full px-4 py-2 w-[180px] text-white border-white my-5 hover:bg-white hover:text-black">
            <a href="#" className="my-auto mx-auto">Need Assistance?</a>
          </div>
        </div>
        {/* Mobile Menu */}

        <div className="bg-[url(../assets/images/bg-banner.png)] h-full min-h-screen bg-cover lg:bg-cover xl:bg-cover relative">      
          <div className="container relative">
            <div className="absolute top-[20rem] z-1">
              <h1 className="font-signature text-[#D6B66B] text-[77px] lg:text-[100px] xl:text-[100px] text-center lg:text-left xl:text-left whitespace-nowrap leading-none">Premium Travel</h1>
              <h1 className="font-unbounded text-[22px] lg:text-[45px] xl:text-[45px] text-white font-bold text-center lg:text-left xl:text-left">Beyond Expectation</h1>
              <p className="text-[#FAF9F5] text-[16px] w-[95%] lg:w-[57%] xl:w-[57%] mx-auto lg:mx-0 xl:mx-0 text-center lg:text-left xl:text-left">Experience the finest that Indonesia has to offer with our curated selection of premium trips, ensuring comfort every step of the way</p>
              <div className="flex">
                <a href="#destination" className="text-white border-2 text-center mx-auto lg:mx-0 xl:mx-0 border-white rounded-full px-6 py-3 font-bold mt-4 hover:bg-[#D6B66B] hover:border-[#D6B66B] hover:text-white">Take me there</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-7">
          <h1 className="font-signature text-greeny text-[54px] lg:text-[80px] xl:text-[80px] text-center whitespace-nowrap">Beyond Premium</h1>
          <h1 className="font-unbounded text-[22px] lg:text-[32px] xl:text-[32px] text-center font-bold">ELEVATE YOUR EXPERIENCE</h1>
          <div className="flex flex-col lg:flex-row xl:flex-row gap-5 mt-14">
            <div>
              <Image src={PersonalItineraries} width={120} className="mx-auto" alt="Personal itineraries" />
              <h3 className="text-greeny text-[20px] font-bold text-center mt-5">PERSONAL ITENERARIES</h3>
              <p className="text-center">Our premium travel services offer tailor-made itineraries crafted to suit your unique preferences and desires.</p>
            </div>
            <div>
              <Image src={ExclusiveExperiences} width={120} className="mx-auto" alt="EXCLUSIVE EXPERIENCES" />
              <h3 className="text-greeny text-[20px] font-bold text-center mt-5">EXCLUSIVE EXPERIENCES</h3>
              <p className="text-center">From private charters to behind-the-scenes tours, we offer access to unique opportunities that are designed to elevate your trip to the next level.</p>
            </div>
            <div>
              <Image src={BestFacilities} width={120} className="mx-auto" alt="Best Facilities" />
              <h3 className="text-greeny text-[20px] font-bold text-center mt-5">BEST FACILITIES</h3>
              <p className="text-center">Experience the epitome of with our premium facility, designed to provide an unparalleled level of comfort and indulgence.</p>
            </div>
          </div>

          <div id="customize-your-trip"></div>

          <div className="flex flex-col lg:flex-row xl:flex-row justify-center mt-14 lg:mt-36 xl:mt-36">
            <div className="w-full lg:w-[40%] xl:w-[40%]">
              <Image src={Puzzle} width={300} alt="Puzzle" className="mx-auto w-[200px] lg:w-[300px] xl:w-[300px]"/>
            </div>
            <div className="w-full lg:w-[60%] xl:w-[60%] my-auto">
              <h1 className="text-[#004040] text-[22px] lg:text-[32px] xl:text-[32px] font-bold text-center lg:text-left xl:text-left font-unbounded">Discover Tailored Experiences</h1>
              <p className="text-center lg:text-left xl:text-left mt-2 w-full lg:w-[70%] xl:w-[70%]">Create your own journey, personalized to suit your preferences and interests, ensuring a once-in-a-lifetime adventure awaits.</p>
              <button className="rounded-full bg-[#004040] hover:bg-[#D6B66B] text-white w-full mt-3 lg:w-[200px] xl:w-[200px] h-[54px] font-bold">
                Customize Your Trip
              </button>
            </div>
          </div>

          <Image src={Separator} alt="Separator" width={1000} className="w-full my-14" id="destination" />

          <div className="flex flex-col lg:flex-row xl:flex-row gap-3">
            <h3 className="text-[#004040] font-unbounded font-bold text-[22px]">Destinations</h3>
            <a href="#" className="flex gap-3 group">
              <ArrowIcon />
              <h4 className="text-[#004040] group-hover:text-[#D6B66B] my-auto font-semibold">EXPLORE MORE</h4>
            </a>
          </div>
          {
            isPendingProduct ? 'Loading...' : <DestinationList isDesktop={isDesktopOrLaptop} data={productData} />
          }
          {
            isPendingProduct ? 'Loading...' : <DestinationPotraitList data={productData} />
          }

          <div className="flex justify-center lg:justify-end xl:justify-end lg:mt-16 xl:mt-16">
            <a href="#" className="flex gap-3 group">
              <ArrowIcon />
              <h4 className="text-[#004040] group-hover:text-[#D6B66B] my-auto font-semibold">EXPLORE MORE</h4>
            </a>
          </div>
        </div>
        
        <LuxuryFootages />

        <div className="container my-10" id="article">
          <div className="image-color-link relative block lg:flex xl:flex justify-between p-5">
            <Image src={Logo} alt="Logo" width={145} className="w-[145px] mx-auto lg:mx-0 xl:mx-0 after:bg-slate-black my-auto" />
            <div className="text-white text-center lg:text-right xl:text-right my-auto">
              <p className="font-light w-[80%] lg:w-full xl:w-full mx-auto lg:mx-0 xl:mx-0 text-[#FAF9F5] text-[14px]">Want to see other destinations? Check us out at our website</p>
              <a href="https://pandooin.com" className="font-bold underline">Pandooin.com</a>
            </div>
          </div>
        </div>

        <div className="container mt-10">
          <h1 className="text-[#0B7373] text-[36px] font-unbounded font-bold">Articles</h1>
          <h4 className="text-[#0B7373] text-[24px]">Our curated writings, offering something for every reader.</h4>

          { isPendingArticle ? 'Loading...' : <ArticleList data={articleData} />}
        </div>
      </main>
      <Footer />
      
    </>
  );
}
