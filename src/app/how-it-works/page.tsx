import CodeBlock from "@/components/Codeblock";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-emerald-400 mb-2">
          How It Works
        </h1>
        <p className="text-slate-400">
          Learn about the scanning process, vulnerability assessment, and
          AI-powered fixes.
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Scanning Process</h2>
        <div className="space-y-4">
          <p>
            GitGuardian uses a multi-step process to analyze repositories for
            security vulnerabilities:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-slate-800 p-4 rounded-md">
              <div className="flex items-center mb-2">
                <div className="bg-emerald-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-2">
                  1
                </div>
                <h3 className="text-lg font-medium text-emerald-400">
                  Repository Cloning
                </h3>
              </div>
              <p className="text-slate-400">
                GitGuardian clones the target repository to analyze its contents
                safely.
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <div className="flex items-center mb-2">
                <div className="bg-emerald-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-2">
                  2
                </div>
                <h3 className="text-lg font-medium text-emerald-400">
                  Code Parsing
                </h3>
              </div>
              <p className="text-slate-400">
                The code is parsed to identify language-specific patterns and
                structures.
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <div className="flex items-center mb-2">
                <div className="bg-emerald-500 text-white w-6 h-6 flex items-center justify-center rounded-full mr-2">
                  3
                </div>
                <h3 className="text-lg font-medium text-emerald-400">
                  Vulnerability Detection
                </h3>
              </div>
              <p className="text-slate-400">
                Multiple detection algorithms are applied to identify potential
                vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Vulnerability Assessment</h2>

        <div className="mb-6">
          <p className="mb-4">
            GitGuardian categorizes vulnerabilities by severity level to help
            you prioritize remediation efforts:
          </p>

          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-red-500 mr-3"></div>
              <span className="font-medium text-red-400">Critical</span>
              <p className="ml-4 text-slate-400">
                Severe vulnerabilities that require immediate attention
              </p>
            </div>

            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-orange-500 mr-3"></div>
              <span className="font-medium text-orange-400">High</span>
              <p className="ml-4 text-slate-400">
                Important issues that should be fixed soon
              </p>
            </div>

            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-yellow-500 mr-3"></div>
              <span className="font-medium text-yellow-400">Medium</span>
              <p className="ml-4 text-slate-400">
                Moderate risk issues that should be addressed
              </p>
            </div>

            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-blue-500 mr-3"></div>
              <span className="font-medium text-blue-400">Low</span>
              <p className="ml-4 text-slate-400">
                Minor issues that pose limited risk
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h3 className="text-xl font-bold text-emerald-400 mb-4">
            Assessment Criteria
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
              <span>
                <strong className="text-emerald-400">Exploit Potential:</strong>{" "}
                How easily can the vulnerability be exploited?
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
              <span>
                <strong className="text-emerald-400">Attack Surface:</strong>{" "}
                How exposed is the vulnerability to potential attackers?
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
              <span>
                <strong className="text-emerald-400">Impact:</strong> What
                damage could result from exploiting this vulnerability?
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
              <span>
                <strong className="text-emerald-400">Prevalence:</strong> How
                common is this vulnerability in the codebase?
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">AI-Powered Fixes</h2>
        <p className="mb-4">
          GitGuardian uses the Gemini API to generate intelligent fixes for
          detected vulnerabilities:
        </p>

        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-slate-800 p-4 rounded-md flex-1">
                <h3 className="text-lg font-medium text-red-400 mb-2">
                  Vulnerable Code
                </h3>
                <CodeBlock language="python">
                  {`def process_user_input(user_input):
    # Vulnerable code with SQL injection risk
    query = f"SELECT * FROM users WHERE username = '{user_input}'"
    return db.execute(query)`}
                </CodeBlock>
              </div>

              <div className="bg-slate-800 p-4 rounded-md flex-1">
                <h3 className="text-lg font-medium text-emerald-400 mb-2">
                  AI-Generated Fix
                </h3>
                <CodeBlock language="python">
                  {`def process_user_input(user_input):
    # Using parameterized query to prevent SQL injection
    query = "SELECT * FROM users WHERE username = %s"
    return db.execute(query, (user_input,))`}
                </CodeBlock>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Explanation
              </h3>
              <p className="text-slate-400">
                The AI detects the SQL injection vulnerability and generates a
                fix that uses parameterized queries to safely handle user input
                without risking injection attacks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
