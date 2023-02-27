import { useRouter } from "next/router";
import { useEffect } from "react";

export const usePageTransition = () => {
  const router = useRouter();
  
  useEffect (() => {
    console.log("useEffect fired")
    const whenRouteChangeComplete = () => {
      return new Promise<void>((resolve) => {
        console.log("callback within startViewTransition")
        router.events.on("routeChangeComplete", resolve);
      });
    };
    
    const handleRouteChangeStart = (url, {shallow}) => {
      (
        document as Document & {
          startViewTransition: (callback?: () => Promise<unknown>) => void;
        }
      ).startViewTransition(whenRouteChangeComplete)
    };
             
    router.events.on("routeChangeStart", handleRouteChangeStart);
    
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  });
};