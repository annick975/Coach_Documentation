import CodeBlock from "@/components/Codeblock";

export default function FrontendUI() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-emerald-400 mb-2">
          Frontend UI
        </h1>
        <p className="text-slate-400">
          Overview of Coach&apos;s web interface features and components
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
          <p>
            The Coach dashboard is designed for clarity and ease of use,
            providing a comprehensive view of your repositories&apos; security
            status.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Repository List
              </h3>
              <p className="text-slate-400">
                View all connected repositories with their security status
                indicators and last scan timestamps.
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Security Overview
              </h3>
              <p className="text-slate-400">
                Get an at-a-glance summary of critical, high, medium, and low
                severity issues across all repositories.
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Scan History
              </h3>
              <p className="text-slate-400">
                Track improvements over time with historical scan data and trend
                visualizations.
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Action Center
              </h3>
              <p className="text-slate-400">
                Quickly access AI-powered fix suggestions and implement them
                with one click.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Results Page</h2>
          <p>
            The results page (<code>results/page.tsx</code>) is where scan
            findings are presented in an intuitive and actionable format.
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-xl font-medium text-emerald-400 mb-3">
                Vulnerability List
              </h3>
              <p className="mb-4">
                Vulnerabilities are grouped by severity and displayed with
                detailed information:
              </p>

              <div className="bg-slate-800 p-4 rounded-md">
                <CodeBlock language="tsx">
                  {`// Vulnerability card component
<div className="bg-slate-800 border-l-4 border-red-500 p-4 rounded-md">
  <div className="flex justify-between items-start">
    <h4 className="text-lg font-medium">SQL Injection Vulnerability</h4>
    <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-sm">
      Critical
    </span>
  </div>
  <p className="text-slate-400 mt-1">
    Unsanitized user input is passed directly to SQL query
  </p>
  <div className="mt-3">
    <p className="text-sm text-slate-500">File: src/database/queries.js:42</p>
  </div>
</div>`}
                </CodeBlock>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-emerald-400 mb-3">
                Fix Suggestions
              </h3>
              <p className="mb-4">
                The Gemini API provides intelligent fix suggestions that can be
                reviewed and applied:
              </p>

              <div className="bg-slate-800 p-4 rounded-md">
                <CodeBlock language="tsx">
                  {`// AI fix suggestion component
<div className="mt-4 bg-slate-850 p-4 rounded-md border border-emerald-800">
  <div className="flex items-center mb-2">
    <svg className="h-5 w-5 text-emerald-400 mr-2" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
    <h5 className="font-medium text-emerald-400">AI-Suggested Fix</h5>
  </div>
  <CodeBlock language="diff">
    {\`- const query = \\\`SELECT * FROM users WHERE id = \${userId}\\\`;
+ const query = \\\`SELECT * FROM users WHERE id = ?\\\`;
+ const params = [userId];\`}
  </CodeBlock>
  <button className="mt-3 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-md
    text-white text-sm transition-colors">
    Apply Fix
  </button>
</div>`}
                </CodeBlock>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-emerald-400 mb-3">
                Security Score
              </h3>
              <p className="mb-4">
                Each repository receives a security score based on the number
                and severity of issues:
              </p>

              <div className="bg-slate-800 p-4 rounded-md flex items-center">
                <div className="relative h-20 w-20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">73</span>
                  </div>
                  <svg className="transform -rotate-90" width="80" height="80">
                    <circle
                      r="36"
                      cx="40"
                      cy="40"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-slate-700"
                    />
                    <circle
                      r="36"
                      cx="40"
                      cy="40"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeDasharray="226.2"
                      strokeDashoffset="61"
                      className="text-yellow-500"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Security Score</h4>
                  <p className="text-slate-400 text-sm">
                    73/100 - Moderate Risk
                  </p>
                  <p className="text-slate-500 text-xs mt-1">
                    5 issues to fix for an improved score
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">User Experience</h2>
          <p className="mb-6">
            Coach&apos;s frontend is designed with user experience as a
            priority, offering intuitive navigation and clear visualizations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Responsive Design
              </h3>
              <p className="text-slate-400">
                Fully responsive layout that works seamlessly across desktop,
                tablet, and mobile devices.
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Keyboard Navigation
              </h3>
              <p className="text-slate-400">
                Complete keyboard navigation support for accessibility and power
                users.
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Progressive Loading
              </h3>
              <p className="text-slate-400">
                Scan results load progressively for quick initial rendering even
                with large datasets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
