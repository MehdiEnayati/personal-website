import Home from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
import Services from "./pages/services/Services";
import Portfolio from "./pages/portfolio/Portfolio";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Article from "./Component/Article/Article";

let routes = [
    {path: '/', element: <Home></Home>},
    {path: '/resume', element: <Resume></Resume>},
    {path: '/services', element: <Services></Services>},
    {path: '/portfolio', element: <Portfolio></Portfolio>},
    {path: '/blog', element: <Blog></Blog>},
    {path: '/blog/:blogID', element: <Article></Article>},
    {path: '/contact', element: <Contact></Contact>},
]

export default routes;