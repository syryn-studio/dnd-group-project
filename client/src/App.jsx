import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoggedInUserProvider } from "./context/LoggedInUserContext";
import Login from "./views/login_reg/Login";
import Home from "./views/Home";
import Register from "./views/login_reg/Register";
import CreateNewCampaign from "./views/CreateNewCampaign";
import OneCampaign from "./views/OneCampaign";
import EditCampaign from "./views/EditCampaign";

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
                    </Routes>
                </LoggedInUserProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
