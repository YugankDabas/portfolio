import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ArchitectureSection } from "@/components/sections/architecture";
import { CredentialsSection } from "@/components/sections/credentials";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] selection:bg-blue-500/30">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ArchitectureSection />
      <CredentialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
