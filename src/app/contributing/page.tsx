import CodeBlock from "@/components/Codeblock";

export default function Contributing() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-emerald-400 mb-2">
          Contributing Guide
        </h1>
        <p className="text-slate-400">
          Learn how to contribute to the Coach project
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <p className="mb-6">
            We welcome contributions from developers of all skill levels.
            Here&apos;s how to get started:
          </p>

          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                1. Fork the Repository
              </h3>
              <p className="mb-3 text-slate-400">
                Start by forking the repository to your GitHub account.
              </p>
              <CodeBlock language="bash">
                {`# Clone your fork
git clone https://github.com/YOUR_USERNAME/coach.git
cd coach

# Add the upstream repository
git remote add upstream https://github.com/coach/coach.git`}
              </CodeBlock>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                2. Set Up Development Environment
              </h3>
              <p className="mb-3 text-slate-400">
                Set up the frontend and backend development environments:
              </p>
              <CodeBlock language="bash">
                {`# Frontend setup
cd frontend
npm install
npm run dev

# In a new terminal, set up the backend
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate
pip install -r requirements.txt
python -m uvicorn app.main:app --reload`}
              </CodeBlock>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                3. Create a Feature Branch
              </h3>
              <p className="mb-3 text-slate-400">
                Always create a new branch for your changes:
              </p>
              <CodeBlock language="bash">
                {`git checkout -b feature/your-feature-name

# or for a bugfix
git checkout -b fix/issue-description`}
              </CodeBlock>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Development Guidelines</h2>
          <p className="mb-6">
            Follow these guidelines to ensure your contributions align with our
            project standards:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-emerald-400 mb-3">
                Code Style
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-emerald-400 mb-2">
                    Frontend (Next.js)
                  </h4>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Follow the ESLint and Prettier configurations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Use TypeScript for all new components</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>
                        Follow the component structure in the codebase
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-emerald-400 mb-2">
                    Backend (FastAPI)
                  </h4>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Follow PEP 8 style guidelines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>
                        Use type hints for all function parameters and returns
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>
                        Write docstrings for all public functions and classes
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-emerald-400 mb-3">
                Testing
              </h3>
              <p className="mb-4">
                All new features and bug fixes should include appropriate tests:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-emerald-400 mb-2">
                    Frontend Tests
                  </h4>
                  <CodeBlock language="bash">
                    {`# Run tests
npm test

# Run tests with coverage
npm test -- --coverage`}
                  </CodeBlock>
                </div>

                <div className="bg-slate-800 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-emerald-400 mb-2">
                    Backend Tests
                  </h4>
                  <CodeBlock language="bash">
                    {`# Run pytest
cd backend
pytest

# Run with coverage
pytest --cov=app tests/`}
                  </CodeBlock>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-emerald-400 mb-3">
                Commit Messages
              </h3>
              <p className="mb-4">
                We follow conventional commits for clear and structured history:
              </p>

              <div className="bg-slate-800 p-4 rounded-md">
                <CodeBlock language="text">
                  {`feat: add new vulnerability detection for SQL injection
fix: resolve false positive in path traversal detection
docs: update API documentation
test: add tests for XSS detection
refactor: improve performance of scanning process
chore: update dependencies`}
                </CodeBlock>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Pull Request Process</h2>
          <p className="mb-6">
            Follow these steps when submitting your contribution:
          </p>

          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                1. Keep PRs Focused
              </h3>
              <p className="text-slate-400">
                Each pull request should address a single concern. Don&apos;t
                combine multiple features or fixes unless they&apos;re closely
                related.
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                2. Update Documentation
              </h3>
              <p className="text-slate-400">
                When adding or modifying features, make sure to update the
                relevant documentation. This includes code comments, API docs,
                and user guides.
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                3. PR Description Template
              </h3>
              <p className="mb-3 text-slate-400">
                Use our PR template to provide all necessary information:
              </p>
              <CodeBlock language="markdown">
                {`## Description
[Describe the changes you've made]

## Related Issue
Fixes #[issue number]

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
[Describe the tests you ran and how to reproduce]

## Screenshots (if applicable)

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code where necessary
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix or feature works
- [ ] New and existing tests pass with my changes`}
              </CodeBlock>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Working with Gemini API Integration
          </h2>
          <p className="mb-6">
            When working with the AI components, keep these guidelines in mind:
          </p>

          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                API Key Management
              </h3>
              <p className="text-slate-400">
                Never commit API keys to the repository. We use environment
                variables for all sensitive credentials.
              </p>
              <div className="mt-3">
                <CodeBlock language="python">
                  {`# Example of proper API key usage
import os
from google.generativeai import configure

api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY environment variable is not set")

configure(api_key=api_key)`}
                </CodeBlock>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Prompt Engineering
              </h3>
              <p className="text-slate-400">
                When updating or adding new prompts for the Gemini API, follow
                these best practices:
              </p>
              <ul className="mt-2 space-y-2 text-slate-400">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>
                    Be specific and provide clear context in the prompt
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>
                    Include relevant code snippets for context when analyzing
                    vulnerabilities
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>
                    Document prompt reasoning in code comments to help other
                    contributors understand your approach
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Getting Help</h2>
          <p className="mb-4">
            If you need help or have questions about the contribution process:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Open an Issue
              </h3>
              <p className="text-slate-400">
                If you have a specific question about implementing a feature,
                feel free to open a discussion issue on GitHub.
              </p>
              <div className="mt-3">
                <a
                  href="https://github.com/coach/coach/issues/new?labels=question"
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
                  Ask a Question
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
