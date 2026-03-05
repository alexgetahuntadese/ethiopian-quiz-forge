import { ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-card">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <h1 className="font-display font-bold text-foreground">Resume</h1>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Download className="w-4 h-4" />
          Download
        </a>
      </header>
      <div className="flex-1 p-4">
        <iframe
          src="/resume.pdf"
          title="Resume Preview"
          className="w-full h-full min-h-[calc(100vh-5rem)] rounded-lg border border-border"
        />
      </div>
    </div>
  );
};

export default Resume;
