import Home from './pages/Home';
import Registration from './pages/Registration';
import TheDetails from './pages/TheDetails';
import TheExperience from './pages/TheExperience';
import TheTeam from './pages/TheTeam';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Registration": Registration,
    "TheDetails": TheDetails,
    "TheExperience": TheExperience,
    "TheTeam": TheTeam,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};