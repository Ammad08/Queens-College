import ClubActivities from "./Components/ClubActivities";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import LearnMore from "./Components/LearnMore";
import Navbar from "./Components/Navbar";
import UI from "./Components/UI";
import VoicesOfExperience from "./Components/VoiceofExperience";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ClubActivities/>
      <VoicesOfExperience/>
      <UI/>
      <LearnMore/>
      <Footer/>
    </div>
  );
}
