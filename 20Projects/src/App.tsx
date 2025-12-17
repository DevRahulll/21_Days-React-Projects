import { Route, Routes } from "react-router-dom";
import RandomColor from "./components/01RandomColor/RandomColor";
import Accordian from "./components/02Accordian/Accordian";
import StarRating from "./components/03starRating/StarRating";
import ImageSlider from "./components/04ImageSlider/ImageSlider";
import LoadMoreData from "./components/05LoadMoreData/LoadMoreData";
import QrGenerator from "./components/06QrGenerator/QrGenerator";
import TreeView from "./components/07TreeView/TreeView";
import ThemeToggler from "./components/08ThemeToggler/ThemeToggler";
import ScrollIndicator from "./components/09scroll-Indicator/ScrollIndicator";
import Tabs from "./components/10CustomTabs/Tabs";
import Modal from "./components/11ModalPopup/Modal";
import GithubUserFinder from "./components/12GithubProfileFinder/GithubProfile";
import UseFetchTest from "./components/13useFetch/UseFetchTest";
import ClickOutsidehookTest from "./components/14useOutsideClick/ClickOutsidehookTest";
import UseWindowResizeTest from "./components/15useWindowResize/UseWindowResizeTest";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/randomcolor" element={<RandomColor />} />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/starrating" element={<StarRating noOfStars={10} />} />
        <Route path="/imageslider" element={<ImageSlider />} />
        <Route path="/loadmoredata" element={<LoadMoreData />} />
        <Route path="/qrcodegenerator" element={<QrGenerator />} />
        <Route path="/treeview" element={<TreeView />} />
        <Route path="/themetoggler" element={<ThemeToggler />} />
        <Route path="/scrollindicator" element={<ScrollIndicator />} />
        <Route path="/customtabs" element={<Tabs />} /> // naming error
        <Route path="/modalpopup" element={<Modal />} />
        <Route path="/githubuserfinder" element={<GithubUserFinder />} />
        <Route path="/usefetch" element={<UseFetchTest />} />
        <Route path="/useclickoutsidehook" element={<ClickOutsidehookTest />} />
        <Route path="/usewindowresize" element={<UseWindowResizeTest />} />
      </Routes>
    </div>
  );
}

export default App;
