import type { Metadata } from 'next';
import ProjectsContent from '@/components/projects/ProjectsContent';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'All Projects & Experiments Archive — 24+ shipped repositories spanning distributed systems, creative shaders, fullstack commerce, and open source tools.',
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
