import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import DogByBreeds from "./components/DogByBreeds/DogByBreeds";
import DogsList from "./components/DogsList/DogsList";
import Header from "./components/Header/Header";
import NoMatch from "./components/NoMatch";
import DogAllBreeds from "./components/DogAllBreeds/DogAllBreeds";


export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/list' component={DogsList} />
                <Route path="/dogbreeds" component={DogByBreeds} />
                <Route path="/listAllBreeds" component={DogAllBreeds} />
                <Route path="*" component={NoMatch} />
            </Switch>
        </BrowserRouter>
    )
}


