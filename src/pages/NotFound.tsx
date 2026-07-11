import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * 404 page. Sets unique title/description/OG tags per-route so search
 * engines and social crawlers don't see the homepage metadata here.
 */
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    const prevTitle = document.title;
    const title = "Page Not Found | Harish Narasimhan K";
    const description =
      "The page you're looking for doesn't exist. Head back to Harish Narasimhan K's AI & ML portfolio homepage.";
    const url = `${window.location.origin}${location.pathname}`;

    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const [key, val] = selector.replace(/[[\]"]/g, "").split("=");
        el.setAttribute(key, val);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="twitter:title"]', "content", title);
    setMeta('meta[property="twitter:description"]', "content", description);
    setMeta('meta[property="twitter:url"]', "content", url);

    return () => {
      document.title = prevTitle;
    };
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-elegant-light">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-elegant-charcoal">404</h1>
        <p className="text-xl text-elegant-gray-700 mb-4">Oops! Page not found</p>
        <a href="/" className="text-elegant-charcoal underline hover:text-elegant-gray-700">
          Return to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
