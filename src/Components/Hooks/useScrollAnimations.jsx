import { useEffect } from "react";

const useScrollAnimations = (sectionRef, textRef, featureCardsRef) => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // 20% element visible होने पर animation trigger होगा
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // एक बार animation लगने के बाद दुबारा observe नहीं होगा
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (textRef.current) observer.observe(textRef.current);
    featureCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      featureCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [sectionRef, textRef, featureCardsRef]);
};

export default useScrollAnimations;
