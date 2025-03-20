import CodeBlock from "@/components/Codeblock";

export default function ApiReference() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-emerald-400 mb-2">
          API Reference
        </h1>
        <p className="text-slate-400">
          Complete documentation of the GitGuardian API endpoints and usage.
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Authentication</h2>
        <p className="mb-4">
          All API requests require authentication using an API key.
        </p>

        <CodeBlock language="bash">
          {`# Include the API key in the Authorization header
curl -X GET "https://api.gitguardian.com/v1/scan" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
        </CodeBlock>

        <div className="mt-4 bg-slate-800 p-4 rounded-md">
          <h3 className="text-lg font-medium text-emerald-400 mb-2">
            Getting an API Key
          </h3>
          <p className="text-slate-400">
            API keys can be generated in your GitGuardian account settings. Each
            key has configurable permissions and expiration settings.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Endpoints</h2>

        <div className="space-y-6">
          {/* Scan Repository Endpoint */}
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="flex items-center mb-4">
              <span className="bg-emerald-600 text-white text-xs font-medium px-2 py-1 rounded-md mr-2">
                POST
              </span>
              <h3 className="text-xl font-bold text-emerald-400">/v1/scan</h3>
            </div>

            <p className="mb-4 text-slate-400">
              Scan a GitHub repository for vulnerabilities.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2">Request Body</h4>
                <CodeBlock language="json">
                  {`{
  "repository_url": "https://github.com/username/repository",
  "branch": "main",
  "scan_options": {
    "scan_depth": "full",
    "include_dependencies": true,
    "severity_threshold": "medium"
  }
}`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Response</h4>
                <CodeBlock language="json">
                  {`{
  "scan_id": "scan_123456789",
  "status": "in_progress",
  "repository": "username/repository",
  "branch": "main",
  "started_at": "2025-03-20T12:00:00Z",
  "estimated_completion_time": "2025-03-20T12:05:00Z"
}`}
                </CodeBlock>
              </div>
            </div>
          </div>

          {/* Get Scan Results Endpoint */}
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="flex items-center mb-4">
              <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-md mr-2">
                GET
              </span>
              <h3 className="text-xl font-bold text-emerald-400">
                /v1/scan/{"{scan_id}"}
              </h3>
            </div>

            <p className="mb-4 text-slate-400">
              Get the results of a previously initiated scan.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2">Path Parameters</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
                    <span>
                      <strong className="text-emerald-400">scan_id</strong>{" "}
                      (required): The ID of the scan to retrieve
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Response</h4>
                <CodeBlock language="json">
                  {`{
  "scan_id": "scan_123456789",
  "status": "completed",
  "repository": "username/repository",
  "branch": "main",
  "started_at": "2025-03-20T12:00:00Z",
  "completed_at": "2025-03-20T12:04:30Z",
  "vulnerabilities": [
    {
      "id": "vuln_123",
      "severity": "high",
      "type": "sql_injection",
      "file_path": "src/controllers/user.py",
      "line_number": 42,
      "description": "Potential SQL injection vulnerability in user input",
      "recommendation": "Use parameterized queries to prevent SQL injection",
      "ai_fix": {
        "available": true,
        "url": "/v1/scan/scan_123456789/vulnerabilities/vuln_123/fix"
      }
    }
  ],
  "summary": {
    "total_vulnerabilities": 1,
    "critical": 0,
    "high": 1,
    "medium": 0,
    "low": 0
  }
}`}
                </CodeBlock>
              </div>
            </div>
          </div>

          {/* Get AI Fix Endpoint */}
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <div className="flex items-center mb-4">
              <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-md mr-2">
                GET
              </span>
              <h3 className="text-xl font-bold text-emerald-400">
                /v1/scan/{"{scan_id}"}/vulnerabilities/{"{vulnerability_id}"}
                /fix
              </h3>
            </div>

            <p className="mb-4 text-slate-400">
              Get an AI-generated fix for a specific vulnerability.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2">Path Parameters</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
                    <span>
                      <strong className="text-emerald-400">scan_id</strong>{" "}
                      (required): The ID of the scan
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
                    <span>
                      <strong className="text-emerald-400">
                        vulnerability_id
                      </strong>{" "}
                      (required): The ID of the vulnerability
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Response</h4>
                <CodeBlock language="json">
                  {`{
  "vulnerability_id": "vuln_123",
  "original_code": "query = f\\"SELECT * FROM users WHERE username = '{user_input}'\\"",
  "fixed_code": "query = \\"SELECT * FROM users WHERE username = %s\\"\\nparams = (user_input,)",
  "explanation": "The original code uses string formatting to insert user input directly into an SQL query, which is vulnerable to SQL injection attacks. The fixed code uses parameterized queries, which ensures that user input is properly escaped and treated as a parameter rather than part of the SQL syntax.",
  "additional_context": "SQL injection vulnerabilities are one of the most common web application security risks. They allow attackers to manipulate database queries by injecting malicious SQL code."
}`}
                </CodeBlock>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Error Handling</h2>

        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <p className="mb-4">
            The API uses standard HTTP status codes and returns error details in
            the response body:
          </p>

          <CodeBlock language="json">
            {`{
  "error": {
    "code": "invalid_repository_url",
    "message": "The repository URL is invalid or inaccessible",
    "details": "Please check that the URL is correct and that you have permission to access it"
  }
}`}
          </CodeBlock>

          <div className="mt-4">
            <h3 className="text-lg font-medium text-emerald-400 mb-2">
              Common Error Codes
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
                <span>
                  <strong className="text-emerald-400">400</strong>: Bad Request
                  - The request was invalid or cannot be served
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
                <span>
                  <strong className="text-emerald-400">401</strong>:
                  Unauthorized - Authentication is required and has failed or
                  not been provided
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
                <span>
                  <strong className="text-emerald-400">403</strong>: Forbidden -
                  The server understood the request but refuses to authorize it
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
                <span>
                  <strong className="text-emerald-400">404</strong>: Not Found -
                  The requested resource could not be found
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
                <span>
                  <strong className="text-emerald-400">429</strong>: Too Many
                  Requests - Rate limit exceeded
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
                <span>
                  <strong className="text-emerald-400">500</strong>: Internal
                  Server Error - An unexpected condition was encountered
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
