import CodeBlock from "@/components/Codeblock";

export default function License() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-emerald-400 mb-2">
          License & Credits
        </h1>
        <p className="text-slate-400">
          License information and acknowledgments for GitGuardian
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">MIT License</h2>
          <p className="mb-6">
            GitGuardian is released under the MIT License, which is a permissive
            license that allows for free use, modification, and distribution:
          </p>

          <div className="bg-slate-800 p-4 rounded-md">
            <CodeBlock language="text">
              {`MIT License

Copyright (c) 2023 GitGuardian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
            </CodeBlock>
          </div>

          <p className="mt-4">
            This means you are free to use GitGuardian for both personal and
            commercial projects, as long as you include the original copyright
            and license notice in any copy of the software or substantial
            portion of it.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Third-Party Libraries</h2>
          <p className="mb-6">
            GitGuardian relies on many open-source libraries and frameworks.
            Here are the main dependencies we use:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-emerald-400 mb-3">
                Frontend Dependencies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-emerald-400 mb-2">
                    Core Framework
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <a
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        Next.js
                      </a>
                      <span className="text-slate-400 ml-2">
                        - React framework for production
                      </span>
                    </li>
                    <li className="flex items-start">
                      <a
                        href="https://react.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        React
                      </a>
                      <span className="text-slate-400 ml-2">
                        - Library for building user interfaces
                      </span>
                    </li>
                    <li className="flex items-start">
                      <a
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        TypeScript
                      </a>
                      <span className="text-slate-400 ml-2">
                        - Typed superset of JavaScript
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-emerald-400 mb-2">
                    UI Components & Styling
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        Tailwind CSS
                      </a>
                      <span className="text-slate-400 ml-2">
                        - Utility-first CSS framework
                      </span>
                    </li>
                    <li className="flex items-start">
                      <a
                        href="https://ui.shadcn.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        shadcn/ui
                      </a>
                      <span className="text-slate-400 ml-2">
                        - Re-usable components built with Radix UI
                      </span>
                    </li>
                    <li className="flex items-start">
                      <a
                        href="https://www.radix-ui.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        Radix UI
                      </a>
                      <span className="text-slate-400 ml-2">
                        - Unstyled, accessible components
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-emerald-400 mb-2">
                    Data Fetching & State
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <a
                        href="https://tanstack.com/query/latest"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        TanStack Query
                      </a>
                      <span className="text-slate-400 ml-2">
                        - Asynchronous state management
                      </span>
                    </li>
                    <li className="flex items-start">
                      <a
                        href="https://axios-http.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        Axios
                      </a>
                      <span className="text-slate-400 ml-2">
                        - Promise-based HTTP client
                      </span>
                    </li>
                    <li className="flex items-start">
                      <a
                        href="https://zustand-demo.pmnd.rs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        Zustand
                      </a>
                      <span className="text-slate-400 ml-2">
                        - State management
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-emerald-400 mb-2">
                    Code Visualization
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <a
                        href="https://prismjs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        Prism.js
                      </a>
                      <span className="text-slate-400 ml-2">
                        - Syntax highlighting
                      </span>
                    </li>
                    <li className="flex items-start">
                      <a
                        href="https://github.com/FormidableLabs/react-live"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        React Live
                      </a>
                      <span className="text-slate-400 ml-2">
                        - Live code editing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <a
                        href="https://react-diff-viewer.xyz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        React Diff Viewer
                      </a>
                      <span className="text-slate-400 ml-2">
                        - Code diff visualization
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-emerald-400 mb-3">
                Backend Dependencies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-emerald-400 mb-2">
                    API Framework
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <a
                        href="https://fastapi.tiangolo.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        FastAPI
                      </a>
                      <span className="text-slate-400 ml-2">
                        - High-performance web framework
                      </span>
                    </li>
                    <li className="flex items-start">
                      <a
                        href="https://www.uvicorn.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        Uvicorn
                      </a>
                      <span className="text-slate-400 ml-2">- ASGI server</span>
                    </li>
                    <li className="flex items-start">
                      <a
                        href="https://pydantic-docs.helpmanual.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        Pydantic
                      </a>
                      <span className="text-slate-400 ml-2">
                        - Data validation using Python type hints
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-emerald-400 mb-2">
                    Database & ORM
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <a
                        href="https://www.sqlalchemy.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        SQLAlchemy
                      </a>
                      <span className="text-slate-400 ml-2">
                        - Python SQL toolkit and ORM
                      </span>
                    </li>
                    <li className="flex items-start">
                      <a
                        href="https://alembic.sqlalchemy.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        Alembic
                      </a>
                      <span className="text-slate-400 ml-2">
                        - Database migration tool
                      </span>
                    </li>
                    <li className="flex items-start">
                      <a
                        href="https://www.postgresql.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        PostgreSQL
                      </a>
                      <span className="text-slate-400 ml-2">
                        - Advanced open-source database
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-emerald-400 mb-2">
                    Vulnerability Detection
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <a
                        href="https://github.com/pyupio/safety"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        Safety
                      </a>
                      <span className="text-slate-400 ml-2">
                        - Python dependency vulnerability scanner
                      </span>
                    </li>
                    <li className="flex items-start">
                      <a
                        href="https://bandit.readthedocs.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        Bandit
                      </a>
                      <span className="text-slate-400 ml-2">
                        - Security issue finder for Python code
                      </span>
                    </li>
                    <li className="flex items-start">
                      <a
                        href="https://owasp.org/www-project-dependency-check/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        OWASP Dependency-Check
                      </a>
                      <span className="text-slate-400 ml-2">
                        - Software composition analysis
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-emerald-400 mb-2">
                    AI Integration
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <a
                        href="https://ai.google.dev/gemini-api/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        Google Gemini API
                      </a>
                      <span className="text-slate-400 ml-2">
                        - AI model for vulnerability analysis
                      </span>
                    </li>
                    <li className="flex items-start">
                      <a
                        href="https://langchain.readthedocs.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        LangChain
                      </a>
                      <span className="text-slate-400 ml-2">
                        - Framework for LLM applications
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Special Thanks</h2>
          <p className="mb-6">
            We'd like to express our gratitude to the following people and
            organizations:
          </p>

          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Open Source Community
              </h3>
              <p className="text-slate-400">
                We're deeply grateful to the entire open-source community for
                creating and maintaining the tools and libraries that make
                GitGuardian possible. The culture of sharing and collaboration
                is what enables us to build on the shoulders of giants.
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Security Researchers
              </h3>
              <p className="text-slate-400">
                We thank the security researchers who have contributed
                vulnerability detection patterns, reported issues, and helped
                improve our scanner. Your dedication to making software more
                secure benefits everyone.
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Early Adopters & Contributors
              </h3>
              <p className="text-slate-400">
                Special thanks to our early users and contributors who provided
                valuable feedback, reported bugs, and suggested features that
                have shaped GitGuardian into what it is today.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Legal Notices</h2>
          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Trademarks
              </h3>
              <p className="text-slate-400">
                All product names, logos, and brands mentioned in GitGuardian
                are property of their respective owners. All company, product
                and service names used in this website are for identification
                purposes only.
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Disclaimer
              </h3>
              <p className="text-slate-400">
                GitGuardian is provided "as is", without warranty of any kind.
                While we strive to identify security vulnerabilities accurately,
                we cannot guarantee that all vulnerabilities will be detected or
                that suggested fixes will fully resolve security issues. Always
                review AI-generated fixes carefully and test thoroughly.
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-md">
              <h3 className="text-lg font-medium text-emerald-400 mb-2">
                Contact Information
              </h3>
              <p className="text-slate-400">
                For legal inquiries or questions about our license and terms of
                use, please contact us at{" "}
                <a
                  href="mailto:legal@gitguardian.com"
                  className="text-emerald-400 hover:underline"
                >
                  legal@gitguardian.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
