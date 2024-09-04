import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoggedInUserProvider } from "./context/LoggedInUserContext";
import Login from "./views/login_reg/Login";
import Home from "./views/Home";
import Register from "./views/login_reg/Register";
import CreateNewCampaign from "./views/CreateNewCampaign";
import OneCampaign from "./views/OneCampaign";
import EditCampaign from "./views/EditCampaign";
import ViewOneNote from "./views/ViewOneNote";
import EditNotePage from "./views/EditNotePage";
import NotFoundError from "./views/Errors/NotFoundError";
import TopNav from "./components/Navigation/TopNav";

function App() {
    return (
        <>
            <BrowserRouter>
                <LoggedInUserProvider>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/users/register" element={<Register />} />
                        <Route path="/home" element={<Home />} />
                        <Route
                            path="/campaigns/create"
                            element={<CreateNewCampaign />}
                        />
                        <Route
                            path="/campaigns/:id"
                            element={<OneCampaign />}
                        />
                        <Route
                            path="/campaigns/:id/edit"
                            element={<EditCampaign />}
                        />
                        <Route path="/notes/:id" element={<ViewOneNote />} />
                        <Route
                            path="/notes/:id/edit"
                            element={<EditNotePage />}
                        />
                        <Route path="*" element={<NotFoundError />} />
                    </Routes>
                </LoggedInUserProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
