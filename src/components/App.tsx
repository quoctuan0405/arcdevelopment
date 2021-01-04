import { Header } from "./ui/header";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { theme } from "./ui/Theme";
import { routes } from './routes';
import { Footer } from "./ui/footer";
import { LandingPage } from './pages/landing';
import { Services } from "./pages/services";
import { CustomSoftwarePage } from "./pages/software";
import { MobileDevelopmentPage } from "./pages/mobile";
import { WebsiteDevelopmentPage } from "./pages/website";
import { RevolutionPage } from "./pages/revolution";
import { AboutUsPage } from "./pages/about";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path={routes.HOME.url} component={LandingPage} />
                    <Route exact path={routes.SERVICES.url} component={Services} />
                    <Route exact path={routes.CUSTOM_SOFTWARE.url} component={CustomSoftwarePage} />
                    <Route exact path={routes.MOBILE_APPS.url} component={MobileDevelopmentPage} />
                    <Route exact path={routes.WEBSITES.url} component={WebsiteDevelopmentPage} />
                    <Route exact path={routes.REVOLUTION.url} component={RevolutionPage} />
                    <Route exact path={routes.ABOUT.url} component={AboutUsPage} />
                    <Route exact path={routes.CONTACT.url} component={() => <div>contact</div>} />
                    <Route exact path={routes.ESTIMATE.url} component={() => <div>estimate</div>} />
                </Switch>
                <Footer/>
            </BrowserRouter>
        </ThemeProvider>
  );
}

export default App;
