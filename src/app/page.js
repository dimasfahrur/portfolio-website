import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
// import AchievemenSection from "./components/AchievemenSection";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col ">
			<NavBar />
			<div className="mt-20 container mx-auto px-12 py-4">
				<HeroSection />
				{/* <AchievemenSection /> */}
				<AboutSection />
				<ProjectSection />
				<EmailSection />
				<Footer />
			</div>
		</main>
	);
}
