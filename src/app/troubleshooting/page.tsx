import CodeBlock from "@/components/Codeblock";

export default function Troubleshooting() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-emerald-400 mb-2">
          Troubleshooting & FAQs
        </h1>
        <p className="text-slate-400">
          Common issues, solutions, and frequently asked questions
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Installation Issues</h2>
          <div className="space-y-6">
            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                "Package not found" errors during installation
              </h3>
              <p className="mb-4 text-slate-400">
                This usually occurs when using an outdated package index or when
                behind a firewall.
              </p>
              <div className="space-y-3">
                <p className="font-medium">Solution:</p>
                <CodeBlock language="bash">
                  {`# Update package index first
npm cache clean --force
npm install

# For Python backend
pip install --upgrade pip
pip install -r requirements.txt`}
                </CodeBlock>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Next.js build fails with TypeScript errors
              </h3>
              <p className="mb-4 text-slate-400">
                This can happen when TypeScript definitions are out of sync or
                when using incompatible versions.
              </p>
              <div className="space-y-3">
                <p className="font-medium">Solution:</p>
                <CodeBlock language="bash">
                  {`# Remove node_modules and reinstall
rm -rf node_modules .next
npm install

# Fix TypeScript issues
npx tsc --noEmit`}
                </CodeBlock>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Python dependency conflicts
              </h3>
              <p className="mb-4 text-slate-400">
                Dependency conflicts can occur when installing the Python
                backend.
              </p>
              <div className="space-y-3">
                <p className="font-medium">Solution:</p>
                <CodeBlock language="bash">
                  {`# Create a fresh virtual environment
python -m venv venv_new
source venv_new/bin/activate  # On Windows: venv_new\\Scripts\\activate

# Install with --no-cache-dir
pip install --no-cache-dir -r requirements.txt`}
                </CodeBlock>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">API Connection Issues</h2>
          <div className="space-y-6">
            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                "Failed to connect to API" error
              </h3>
              <p className="mb-4 text-slate-400">
                This error occurs when the frontend cannot communicate with the
                backend API.
              </p>
              <div className="space-y-3">
                <p className="font-medium">Check:</p>
                <ol className="space-y-2 text-slate-400 list-decimal ml-5">
                  <li>
                    Ensure the backend server is running and accessible at the
                    configured URL
                  </li>
                  <li>
                    Verify that CORS is properly configured on the backend
                  </li>
                  <li>
                    Check that the API URL in your environment variables is
                    correct
                  </li>
                </ol>
                <p className="mt-4 font-medium">Solution:</p>
                <CodeBlock language="bash">
                  {`# Verify API is running
curl http://localhost:8000/api/health

# Check environment variables
echo $NEXT_PUBLIC_API_URL`}
                </CodeBlock>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                GitHub API rate limit exceeded
              </h3>
              <p className="mb-4 text-slate-400">
                GitHub limits the number of API requests you can make within a
                certain time period.
              </p>
              <div className="space-y-3">
                <p className="font-medium">Solution:</p>
                <ul className="space-y-2 text-slate-400 list-disc ml-5">
                  <li>
                    Use a GitHub personal access token with higher rate limits
                  </li>
                  <li>
                    Implement caching to reduce the number of API requests
                  </li>
                  <li>Wait for the rate limit to reset (usually 1 hour)</li>
                </ul>
                <CodeBlock language="bash">
                  {`# Check your current rate limit status
curl -H "Authorization: token YOUR_GITHUB_TOKEN" https://api.github.com/rate_limit`}
                </CodeBlock>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Gemini API errors
              </h3>
              <p className="mb-4 text-slate-400">
                Issues connecting to or getting responses from the Gemini API.
              </p>
              <div className="space-y-3">
                <p className="font-medium">Solution:</p>
                <ul className="space-y-2 text-slate-400 list-disc ml-5">
                  <li>
                    Verify your API key is valid and has sufficient permissions
                  </li>
                  <li>
                    Check that you're using the correct endpoint for the Gemini
                    API
                  </li>
                  <li>
                    Ensure your prompts don't violate any content policies
                  </li>
                </ul>
                <CodeBlock language="python">
                  {`# Test Gemini API connectivity
import os
import google.generativeai as genai

api_key = os.environ.get("GEMINI_API_KEY")
genai.configure(api_key=api_key)

model = genai.GenerativeModel('gemini-pro')
result = model.generate_content("Test message to verify API connectivity")
print(result.text)`}
                </CodeBlock>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Scanning Issues</h2>
          <div className="space-y-6">
            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Scan takes too long or times out
              </h3>
              <p className="mb-4 text-slate-400">
                Large repositories can take a long time to scan, sometimes
                exceeding timeout limits.
              </p>
              <div className="space-y-3">
                <p className="font-medium">Solution:</p>
                <ul className="space-y-2 text-slate-400 list-disc ml-5">
                  <li>
                    Increase the timeout setting in the configuration file
                  </li>
                  <li>
                    Scan specific directories instead of the entire repository
                  </li>
                  <li>
                    Use the CLI with the <code>--incremental</code> flag to only
                    scan changed files
                  </li>
                </ul>
                <CodeBlock language="bash">
                  {`# Scan only a specific directory
gitguardian scan --path=src/

# Use incremental scanning
gitguardian scan --incremental`}
                </CodeBlock>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Too many false positives
              </h3>
              <p className="mb-4 text-slate-400">
                The scanner may sometimes flag code that isn't actually
                vulnerable.
              </p>
              <div className="space-y-3">
                <p className="font-medium">Solution:</p>
                <ul className="space-y-2 text-slate-400 list-disc ml-5">
                  <li>
                    Adjust the sensitivity levels in the configuration file
                  </li>
                  <li>
                    Add specific exclusion patterns for known false positives
                  </li>
                  <li>
                    Use the feedback mechanism to improve the detection engine
                  </li>
                </ul>
                <CodeBlock language="yaml">
                  {`# Example configuration to reduce false positives
sensitivity: medium
exclude_patterns:
  - "**/*.test.js"
  - "**/mock_data/*.sql"`}
                </CodeBlock>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Scan fails with "Out of memory" error
              </h3>
              <p className="mb-4 text-slate-400">
                Very large repositories or files can exceed the available memory
                when scanning.
              </p>
              <div className="space-y-3">
                <p className="font-medium">Solution:</p>
                <ul className="space-y-2 text-slate-400 list-disc ml-5">
                  <li>
                    Increase the memory allocation for the Node.js process
                  </li>
                  <li>
                    Use the <code>--max-file-size</code> option to skip very
                    large files
                  </li>
                  <li>
                    Break the scan into smaller chunks by scanning
                    subdirectories separately
                  </li>
                </ul>
                <CodeBlock language="bash">
                  {`# Increase Node.js memory limit
NODE_OPTIONS=--max-old-space-size=8192 gitguardian scan

# Limit file size for scanning
gitguardian scan --max-file-size=10MB`}
                </CodeBlock>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                How often should I scan my repositories?
              </h3>
              <div className="text-slate-400">
                <p>
                  We recommend integrating scanning into your CI/CD pipeline to
                  scan on every pull request. Additionally, schedule regular
                  full scans weekly to catch vulnerabilities that might have
                  been missed.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Is my code data sent to Gemini API?
              </h3>
              <div className="text-slate-400">
                <p>
                  Only code snippets related to detected vulnerabilities are
                  sent to the Gemini API for analysis and fix generation. We
                  strip sensitive information and context to maintain security.
                  You can configure the tool to completely avoid sending certain
                  types of files or code patterns.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Does GitGuardian work with private repositories?
              </h3>
              <div className="text-slate-400">
                <p>
                  Yes, GitGuardian works with both public and private
                  repositories. For private repositories, you'll need to provide
                  appropriate GitHub authentication credentials. We recommend
                  using a GitHub App or personal access token with the minimal
                  permissions required.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Can I use GitGuardian in an air-gapped environment?
              </h3>
              <div className="text-slate-400">
                <p>
                  Yes, GitGuardian supports air-gapped deployments for
                  security-sensitive environments. In this mode, the AI-powered
                  fix generation features will be limited, but all vulnerability
                  detection capabilities will work locally. Contact our support
                  team for detailed deployment instructions for air-gapped
                  environments.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                How do I exclude certain files from scanning?
              </h3>
              <div className="space-y-3 text-slate-400">
                <p>
                  You can exclude files or directories using patterns in the
                  configuration file:
                </p>
                <CodeBlock language="yaml">
                  {`# .gitguardian.yaml
exclude:
  - "**/*.min.js"
  - "**/node_modules/**"
  - "**/vendor/**"
  - "**/*.test.js"
  - "**/*.spec.js"`}
                </CodeBlock>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Can I customize the vulnerability rules?
              </h3>
              <div className="text-slate-400">
                <p>
                  Yes, GitGuardian allows you to customize vulnerability
                  detection rules. You can adjust sensitivity levels, disable
                  specific rule types, or add custom detection patterns. These
                  settings can be configured in the{" "}
                  <code>.gitguardian.yaml</code> file in your repository root or
                  through the web interface for global settings.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Getting Additional Help</h2>
          <p className="mb-6">
            If you're still experiencing issues, there are several ways to get
            help:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                GitHub Issues
              </h3>
              <p className="text-slate-400 mb-4">
                Report bugs or request features through our GitHub repository.
              </p>
              <a
                href="https://github.com/gitguardian/gitguardian/issues"
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
                Open an Issue
              </a>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Discord Community
              </h3>
              <p className="text-slate-400 mb-4">
                Join our Discord server to chat with other users and developers.
              </p>
              <a
                href="https://discord.gg/gitguardian"
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md inline-flex items-center transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Join Discord
              </a>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Email Support
              </h3>
              <p className="text-slate-400 mb-4">
                For urgent issues or private concerns, contact our support team
                directly.
              </p>
              <a
                href="mailto:support@gitguardian.com"
                className="bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-md inline-flex items-center transition-colors"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
