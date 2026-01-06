import Navbar from '../organisms/navbar';
import Footer from '../organisms/footer';
import BackButton from '../atoms/back-button';

interface ProjectLayoutProps {
  children: React.ReactNode;
  projectId?: string | null;
}

export default function ProjectLayout({ children, projectId }: ProjectLayoutProps) {
  if (!children) {
    return null;
  }
  
  const validProjectId = projectId && typeof projectId === 'string' && projectId.trim() ? projectId.trim() : undefined;
  
  try {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Back Button */}
        <div className="max-w-[1040px] mx-auto px-6 md:px-10 pt-8 md:pt-12 pb-4 md:pb-8">
          <BackButton fromProject={validProjectId} />
        </div>

        {/* Project Content */}
        {children}

        <Footer />
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>Error loading project layout</p>
      </div>
    );
  }
}