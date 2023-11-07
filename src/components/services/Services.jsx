import "./services.scss";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import ServicesContent from "./ServicesContent";
import ServicesList from "./ServicesList";

const Servises = () => {
  gsap.registerPlugin(ScrollTrigger);

  const horizontalSections = gsap.utils.toArray("section.horizontal");

  const thisPinWrap = useRef(null);
  const thisAnimWrap = useRef(null);

  const cont = useRef()

  useEffect(() => {
    const el = thisAnimWrap.current
    const pinWrap = thisPinWrap.current

    const contWidth = cont.current

    horizontalSections.forEach(function (sec, i) {
      if (!el || !pinWrap) return;

      const getToValue = () => -(el.scrollWidth - endScrollValue)

      const size = window.innerHeight / 5
      const sidePadding = window.innerWidth - contWidth.offsetWidth
      const rightSidePadding = sidePadding / 2
      const endScrollValue = window.innerWidth - rightSidePadding

      const h2Padding = document.getElementById("pinTitle")
      h2Padding.style.left = rightSidePadding + 'px'

      gsap.fromTo(
        el,
        {
          x: () => (el.classList.contains("to-right") ? rightSidePadding : getToValue()),
        },
        {
          x: () => (el.classList.contains("to-right") ? getToValue() : 0),
          ease: "none",
          scrollTrigger: {
            // trigger: sec,
            start: () => "+=" + -size,
            end: () => "+=" + (el.scrollWidth - window.innerWidth),
            pin: pinWrap,
            invalidateOnRefresh: true,
            //anticipatePin: 1,
            scrub: true,
            //markers: true,
          },
        }
      )
    })
  }, [thisPinWrap.current, thisAnimWrap.current])

  return (
    <>
      <div ref={cont} className="container"></div>
      <section className="services horizontal">
        <ServicesContent thisPinWrap={thisPinWrap} thisAnimWrap={thisAnimWrap} />
      </section>
      <section className="services mobile">
        <div className="container">
          <div className="services__wrap">
            <ServicesList />
          </div>
        </div>
      </section>
    </>
  )
}

export default Servises;
