import CodeBlock from "@/components/Codeblock";
import Link from "next/link";

export default function Installation() {
  return (
    <div className="space-y-8 max-w-full">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-2">
          Installation & Setup
        </h1>
        <p className="text-slate-400 text-sm md:text-base">
          Follow these instructions to set up both the web and CLI versions of
          Coach.
        </p>
      </div>

      <div>
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Frontend (Next.js)
        </h2>
        <p>
          You can access the web-based interface of Coach{" "}
          <Link href="" className="text-emerald-400">
            here
          </Link>
          .
        </p>
        <br />
        <p className="text-lg md:text-2xl font-bold mb-4">
          If you want to run Coach locally,{" "}
        </p>
        <p className="mb-4 text-sm md:text-base">
          The frontend is built with Next.js 14 and can be set up as follows:
        </p>

        <CodeBlock language="bash">
          {`# Clone the repository
git clone https://github.com/annick975/Coach
cd Coach

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys and configuration

# Run development server
npm run dev`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Backend (FastAPI, Python)
        </h2>
        <p className="mb-4 text-sm md:text-base">
          The backend requires Python 3.9+ and can be set up as follows:
        </p>

        <CodeBlock language="bash">
          {`# Navigate to the backend directory
cd Coach/backend

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys and configuration

# Run the development server
uvicorn app.main:app --reload`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-xl md:text-2xl font-bold mb-4">CLI Version</h2>
        <p className="mb-4 text-sm md:text-base">
          The CLI version can be installed and used independently:
        </p>

        <CodeBlock language="bash">
          {`# Install the CLI tool -> Clone the repository:
git clone https://github.com/Rukundo-Bahati/Coach.git
cd Coach/coach

# Create a virtual environment:
python3 -m venv venv_new
source venv_new/bin/activate

# Install Python dependencies:
pip3 install .
(Note: Ensure requirements.txt includes rich, pyfiglet, gitpython, requests, etc.)

# Check and install reqired tools:
python3 coach

# Analyze a repository by providing its URL and branch:
coach https://github.com/username/repo.git main`}
        </CodeBlock>
      </div>

      <div className="bg-slate-800 p-4 md:p-6 rounded-lg border border-slate-700">
        <h3 className="text-lg md:text-xl font-bold text-emerald-400 mb-2">
          Environment Variables
        </h3>
        <p className="mb-4 text-sm md:text-base">
          Make sure to set these required environment variables:
        </p>

        <div className="overflow-x-auto -mx-4 md:mx-0">
          <table className="w-full min-w-full table-auto">
            <thead>
              <tr className="text-left border-b border-slate-700">
                <th className="py-2 px-3 md:px-4 text-xs md:text-sm">
                  Variable
                </th>
                <th className="py-2 px-3 md:px-4 text-xs md:text-sm">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-2 px-3 md:px-4 text-emerald-400 text-xs md:text-sm font-mono">
                  GEMINI_API_KEY
                </td>
                <td className="py-2 px-3 md:px-4 text-xs md:text-sm">
                  Your Gemini API key for AI-powered fixes
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-2 px-3 md:px-4 text-emerald-400 text-xs md:text-sm font-mono">
                  GITHUB_TOKEN
                </td>
                <td className="py-2 px-3 md:px-4 text-xs md:text-sm">
                  GitHub personal access token with repo permissions
                </td>
              </tr>
              <tr>
                <td className="py-2 px-3 md:px-4 text-emerald-400 text-xs md:text-sm font-mono">
                  DATABASE_URL
                </td>
                <td className="py-2 px-3 md:px-4 text-xs md:text-sm">
                  Connection string for your database
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
