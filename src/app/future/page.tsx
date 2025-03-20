export default function FutureImprovements() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-emerald-400 mb-2">
          Future Improvements
        </h1>
        <p className="text-slate-400">
          Planned features and roadmap for GitGuardian
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Roadmap</h2>
          <p className="mb-6">
            GitGuardian is continuously evolving. Here's our development roadmap
            for the upcoming releases:
          </p>

          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-3">
                <div className="bg-emerald-500 text-white w-8 h-8 flex items-center justify-center rounded-full mr-3">
                  Q2
                </div>
                <h3 className="text-xl font-medium text-emerald-400">
                  2023 (Next Release)
                </h3>
              </div>

              <div className="ml-11 space-y-4">
                <div className="bg-slate-800 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-emerald-400 mb-2">
                    Advanced Vulnerability Detection
                  </h4>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>
                        Expanded detection patterns for language-specific
                        vulnerabilities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>
                        Supply chain vulnerability detection for npm, PyPI, and
                        other package ecosystems
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>
                        Integration with OWASP dependency-check for deeper
                        analysis
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-emerald-400 mb-2">
                    Enhanced AI Fix Generation
                  </h4>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>
                        Improved context-awareness for more accurate fixes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>
                        Multiple fix alternatives with pros and cons analysis
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>
                        Automated PR creation with vulnerability fixes
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-3">
                <div className="bg-emerald-500 text-white w-8 h-8 flex items-center justify-center rounded-full mr-3">
                  Q3
                </div>
                <h3 className="text-xl font-medium text-emerald-400">2023</h3>
              </div>

              <div className="ml-11 space-y-4">
                <div className="bg-slate-800 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-emerald-400 mb-2">
                    CI/CD Integration
                  </h4>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>
                        GitHub Actions integration for automatic scans on PRs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>
                        Support for GitLab CI, CircleCI, and Jenkins pipelines
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>
                        Configurable severity thresholds for pipeline failures
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-emerald-400 mb-2">
                    Advanced Reporting
                  </h4>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>
                        Customizable security reports for management and
                        compliance
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>
                        Trend analysis to track security improvement over time
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>
                        Export capabilities to PDF, CSV, and JSON formats
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-3">
                <div className="bg-emerald-500 text-white w-8 h-8 flex items-center justify-center rounded-full mr-3">
                  Q4
                </div>
                <h3 className="text-xl font-medium text-emerald-400">
                  2023 and Beyond
                </h3>
              </div>

              <div className="ml-11 space-y-4">
                <div className="bg-slate-800 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-emerald-400 mb-2">
                    Enterprise Features
                  </h4>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Role-based access control for team management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Integration with SAML and SSO providers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>
                        On-premises deployment options for security-sensitive
                        organizations
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-emerald-400 mb-2">
                    Extended Ecosystem Support
                  </h4>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>GitLab and Bitbucket repository integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>
                        Support for cloud infrastructure scanning (Terraform,
                        CloudFormation)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Container image vulnerability scanning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">AI and ML Advancements</h2>
          <p className="mb-6">
            Future development will focus on advancing our AI capabilities:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Predictive Vulnerability Analysis
              </h3>
              <p className="text-slate-400">
                Using machine learning to predict potential vulnerabilities
                before they're introduced, based on code patterns and historical
                data.
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Context-Aware Code Analysis
              </h3>
              <p className="text-slate-400">
                Improving detection accuracy by understanding the broader
                context of code, reducing false positives and identifying
                complex vulnerabilities.
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Automated Security Refactoring
              </h3>
              <p className="text-slate-400">
                Going beyond individual fixes to suggest broader architectural
                improvements for better security posture.
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Personalized Security Training
              </h3>
              <p className="text-slate-400">
                Providing developers with personalized security recommendations
                and learning resources based on detected patterns in their code.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Community Input</h2>
          <p className="mb-4">
            We're committed to building a tool that responds to the needs of our
            users. Help shape the future of GitGuardian by providing feedback
            and feature requests.
          </p>

          <div className="bg-slate-800 p-4 rounded-md">
            <div className="flex items-center mb-2">
              <svg
                className="h-5 w-5 text-emerald-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <h3 className="text-lg font-medium text-emerald-400">
                Share Your Ideas
              </h3>
            </div>
            <p className="text-slate-400 mb-4">
              We encourage you to share your feature requests and feedback on
              our GitHub repository. Open an issue with the "enhancement" label
              to suggest new features.
            </p>
            <div>
              <a
                href="https://github.com/gitguardian/gitguardian/issues/new?labels=enhancement"
                className="bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-md inline-flex items-center transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Submit a Feature Request
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
