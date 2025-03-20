import Link from "next/link";
import CodeBlock from "@/components/Codeblock";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-emerald-400">GitGuardian</h1>
        <p className="text-xl text-slate-400">
          GitHub Repository Security Scanner
        </p>
      </div>

      <div className="space-y-4">
        <p>
          GitGuardian is a powerful cybersecurity tool that scans GitHub
          repositories for vulnerabilities and provides AI-powered fixes using
          the Gemini API. The tool offers both a web-based interface and a CLI
          version for maximum flexibility.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-slate-900 p-6 rounded-lg flex-1">
            <h3 className="text-lg font-medium text-emerald-400">
              Web Interface
            </h3>
            <p className="text-slate-400 mt-2">
              Scan and monitor repositories through our intuitive web-based
              dashboard
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-lg flex-1">
            <h3 className="text-lg font-medium text-emerald-400">CLI Tool</h3>
            <p className="text-slate-400 mt-2">
              Integrate with your CI/CD pipeline for automated security scanning
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900 p-4 rounded-md">
            <h3 className="text-lg font-medium text-emerald-400">Frontend</h3>
            <ul className="mt-2 space-y-1 text-slate-400">
              <li>• Next.js 14</li>
              <li>• Tailwind CSS</li>
              <li>• ShadCN UI</li>
            </ul>
          </div>
          <div className="bg-slate-900 p-4 rounded-md">
            <h3 className="text-lg font-medium text-emerald-400">Backend</h3>
            <ul className="mt-2 space-y-1 text-slate-400">
              <li>• Python</li>
              <li>• FastAPI</li>
              <li>• Gemini API Integration</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
        <CodeBlock language="bash">
          {`# Install the CLI tool
pip install gitguardian-cli

# Scan a repository
gitguardian scan https://github.com/username/repository`}
        </CodeBlock>

        <div className="mt-6">
          <Link
            href="/installation"
            className="bg-emerald-600 hover:bg-emerald-700 transition-colors text-white py-2 px-4 rounded-md"
          >
            Installation Guide →
          </Link>
        </div>
      </div>
    </div>
  );
}
