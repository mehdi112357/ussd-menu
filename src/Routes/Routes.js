import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from "../Pages/MainPage";
import DashboardLayout from "../HOC/DashboardLayout";
import Login from "../Pages/Login";
import ShortCode from "../Pages/ShortCode";
import Simulator from "../Pages/Simulator";
import Report from "../Pages/Report";
import Setting from "../Pages/Setting";
import Logout from "../Pages/Logout";
import NewShortCode from "../Pages/NewShortCode";
import Graph from "../Pages/Graph";
import Mapping from "../Pages/Mapping";
import Validator from "../Pages/Validator";



const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <>
                    <Route path="/" element={<Login />} />
                    <Route element={<DashboardLayout />}>
                        <Route path="/home" element={<MainPage />} />
                        <Route path="/shortcode" element={<ShortCode />} />
                        <Route path="/newShortCode" element={<NewShortCode />} />
                        <Route path="/simulator" element={<Simulator />} />
                        <Route path="/report" element={<Report />} />
                        <Route path="/graph" element={<Graph />} />
                        <Route path="/mapping" element={<Mapping />} />
                        <Route path="/validator" element={<Validator />} />
                        <Route path="/setting" element={<Setting />} />
                        <Route path="/logout" element={<Logout />} />
                    </Route>
                </>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
