import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoggedInUserProvider } from "./context/LoggedInUserContext";
import Login from "./views/login_reg/Login";
import Home from "./views/Home";
import Register from "./views/login_reg/Register";
import CreateNewCampaign from "./views/CreateNewCampaign";

function App() {
    return (
        <>
            <BrowserRouter>
                <LoggedInUserProvider>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/users/register" element={<Register />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/campaigns/create" element={<CreateNewCampaign />} />
                    </Routes>
                </LoggedInUserProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
