import React, { useContext, useEffect, useState } from "react";

import { useStorage } from "@/components/context/StorageProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Loading from "@/components/elements/Loading";

gsap.registerPlugin(ScrollTrigger);

type MainContextType = {};

export const MainContext = React.createContext<any>(null);

interface Props {
  isPrivate?: boolean;
  children?: React.ReactNode;
}

const MainProvider: React.FC<Props> = ({ children, isPrivate }) => {
  const { setIsLoading, setPopupService } = useStorage();

  const closePopup = () => {
    setPopupService(false);
  };

  const initAnimation = () => {
    let listFadeIn = gsap.utils.toArray(".fadeIn");
    listFadeIn.forEach((l: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: l,
            start: "top 75%",
          },
        })
        .fromTo(l, { autoAlpha: 0, opacity: 0 }, { autoAlpha: 1, opacity: 1 });
    });

    let listFadeUp = gsap.utils.toArray(".fadeUp");
    listFadeUp.forEach((l: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: l,
            start: "top 75%",
          },
        })
        .fromTo(
          l,
          { y: 150, autoAlpha: 0, opacity: 0 },
          { y: 0, autoAlpha: 1, opacity: 1 },
        );
    });

    let listFadeDown = gsap.utils.toArray(".fadeDown");
    listFadeDown.forEach((l: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: l,
            start: "top 75%",
          },
        })
        .fromTo(
          l,
          { y: -150, autoAlpha: 0, opacity: 1 },
          { y: 0, autoAlpha: 1, opacity: 1 },
        );
    });

    let listFadeRight = gsap.utils.toArray(".fadeRight");
    listFadeRight.forEach((l: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: l,
            start: "top 75%",
          },
        })
        .fromTo(
          l,
          { x: -150, autoAlpha: 0, opacity: 0 },
          { x: 0, autoAlpha: 1, opacity: 1 },
        );
    });

    let listFadeLeft = gsap.utils.toArray(".fadeLeft");
    listFadeLeft.forEach((l: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: l,
            start: "top 75%",
          },
        })
        .fromTo(
          l,
          { x: 150, autoAlpha: 0, opacity: 0 },
          { x: 0, autoAlpha: 1, opacity: 1 },
        );
    });

    ScrollTrigger.refresh();
  };

  useEffect(() => {
    setTimeout(() => {
      initAnimation();
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <MainContext.Provider value={{ closePopup }}>
      {children}
      <Loading />
    </MainContext.Provider>
  );
};

export default MainProvider;

export const useMain = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMain has to be used within <MainContext.Provider>");
  }
  return context;
};
