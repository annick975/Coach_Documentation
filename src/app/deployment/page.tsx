import CodeBlock from "@/components/Codeblock";

export default function Deployment() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-emerald-400 mb-2">
          Deployment Guide
        </h1>
        <p className="text-slate-400">
          Learn how to deploy Coach to production environments
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Frontend Deployment</h2>
          <p className="mb-6">
            The Coach frontend is built with Next.js 14 and can be deployed to
            various hosting platforms.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-emerald-400 mb-3">
                Vercel (Recommended)
              </h3>
              <p className="mb-4">
                As Next.js is developed by Vercel, deploying to their platform
                offers the best performance and developer experience.
              </p>

              <div className="bg-slate-800 p-4 rounded-md">
                <CodeBlock language="bash">
                  {`# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from your project directory
cd frontend
vercel`}
                </CodeBlock>
              </div>

              <div className="mt-4 bg-slate-800 p-4 rounded-md">
                <h4 className="text-md font-medium text-emerald-400 mb-2">
                  Environment Variables
                </h4>
                <p className="mb-2 text-slate-400">
                  Set these in the Vercel dashboard or using the CLI:
                </p>
                <CodeBlock language="bash">
                  {`NEXT_PUBLIC_API_URL=https://your-backend-url.com/api
NEXT_PUBLIC_GITHUB_CLIENT_ID=your_github_client_id`}
                </CodeBlock>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-emerald-400 mb-3">
                Netlify
              </h3>
              <p className="mb-4">
                Netlify offers great integration with GitHub and continuous
                deployment.
              </p>

              <div className="bg-slate-800 p-4 rounded-md">
                <CodeBlock language="toml">
                  {`# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NEXT_PUBLIC_API_URL = "https://your-backend-url.com/api"`}
                </CodeBlock>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-emerald-400 mb-3">
                Self-Hosting with Docker
              </h3>
              <p className="mb-4">
                For complete control over your deployment, use Docker:
              </p>

              <div className="bg-slate-800 p-4 rounded-md">
                <CodeBlock language="dockerfile">
                  {`# Dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]`}
                </CodeBlock>
              </div>

              <div className="mt-4 bg-slate-800 p-4 rounded-md">
                <CodeBlock language="bash">
                  {`# Build and run the Docker container
docker build -t coach-frontend .
docker run -p 3000:3000 coach-frontend`}
                </CodeBlock>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Backend Deployment</h2>
          <p className="mb-6">
            The Coach FastAPI backend can be deployed on various platforms that
            support Python applications.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-emerald-400 mb-3">
                Render
              </h3>
              <p className="mb-4">
                Render provides simple Python application hosting with automatic
                deployment from GitHub.
              </p>

              <div className="bg-slate-800 p-4 rounded-md">
                <CodeBlock language="yaml">
                  {`# render.yaml
services:
  - type: web
    name: coach-api
    env: python
    buildCommand: pip install -r requirements.txt
    startCommand: uvicorn app.main:app --host 0.0.0.0 --port $PORT
    envVars:
      - key: GITHUB_CLIENT_ID
        sync: false
      - key: GITHUB_CLIENT_SECRET
        sync: false
      - key: GEMINI_API_KEY
        sync: false
      - key: DATABASE_URL
        sync: false`}
                </CodeBlock>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-emerald-400 mb-3">
                Fly.io
              </h3>
              <p className="mb-4">
                Fly.io offers global deployment with servers close to your
                users.
              </p>

              <div className="bg-slate-800 p-4 rounded-md">
                <CodeBlock language="toml">
                  {`# fly.toml
app = "coach-api"
primary_region = "iad"

[build]
  builder = "paketobuildpacks/builder:base"

[env]
  PORT = "8080"

[http_service]
  internal_port = 8080
  force_https = true
  auto_stop_machines = true
  auto_start_machines = true
  min_machines_running = 0`}
                </CodeBlock>
              </div>

              <div className="mt-4 bg-slate-800 p-4 rounded-md">
                <CodeBlock language="bash">
                  {`# Deploy to Fly.io
fly auth login
fly launch
fly secrets set GITHUB_CLIENT_ID=your_github_client_id
fly secrets set GITHUB_CLIENT_SECRET=your_github_client_secret
fly secrets set GEMINI_API_KEY=your_gemini_api_key
fly deploy`}
                </CodeBlock>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-emerald-400 mb-3">
                Docker + AWS/GCP/Azure
              </h3>
              <p className="mb-4">
                For maximum scalability, deploy using containers on major cloud
                providers.
              </p>

              <div className="bg-slate-800 p-4 rounded-md">
                <CodeBlock language="dockerfile">
                  {`# Dockerfile for FastAPI backend
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]`}
                </CodeBlock>
              </div>

              <div className="mt-4 bg-slate-800 p-4 rounded-md">
                <h4 className="text-md font-medium text-emerald-400 mb-2">
                  Docker Compose for Local Testing
                </h4>
                <CodeBlock language="yaml">
                  {`# docker-compose.yml
version: '3.8'

services:
  api:
    build: ./backend
    ports:
      - "8000:8000"
    environment:
      - GITHUB_CLIENT_ID=your_github_client_id
      - GITHUB_CLIENT_SECRET=your_github_client_secret
      - GEMINI_API_KEY=your_gemini_api_key
      - DATABASE_URL=postgresql://postgres:postgres@db:5432/coach
    depends_on:
      - db
  
  db:
    image: postgres:15
    volumes:
      - postgres_data:/var/lib/postgresql/data/
    environment:
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_DB=coach

volumes:
  postgres_data:`}
                </CodeBlock>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Database Setup</h2>
          <p className="mb-6">
            Coach requires a database to store scan results and user data.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-emerald-400 mb-3">
                PostgreSQL (Recommended)
              </h3>
              <p className="mb-4">
                We recommend using PostgreSQL for production environments.
              </p>

              <div className="bg-slate-800 p-4 rounded-md">
                <CodeBlock language="sql">
                  {`-- Initial database setup
CREATE DATABASE coach;
CREATE USER coach_user WITH PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE coach TO coach_user;`}
                </CodeBlock>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-medium text-emerald-400 mb-3">
                Database Migration
              </h3>
              <p className="mb-4">
                Coach uses Alembic for database migrations:
              </p>

              <div className="bg-slate-800 p-4 rounded-md">
                <CodeBlock language="bash">
                  {`# Run migrations
cd backend
export DATABASE_URL=postgresql://coach_user:secure_password@localhost/coach
alembic upgrade head`}
                </CodeBlock>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">CORS and Security</h2>
          <p className="mb-6">
            Ensure proper CORS settings to allow communication between frontend
            and backend:
          </p>

          <div className="bg-slate-800 p-4 rounded-md">
            <CodeBlock language="python">
              {`# FastAPI CORS configuration
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://your-frontend-domain.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)`}
            </CodeBlock>
          </div>

          <div className="mt-6 p-4 bg-slate-800 rounded-md border border-yellow-700">
            <div className="flex items-center mb-2">
              <svg
                className="h-5 w-5 text-yellow-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h3 className="text-lg font-medium text-yellow-500">
                Security Note
              </h3>
            </div>
            <p className="text-slate-400">
              Always use HTTPS in production environments, and ensure your API
              keys and secrets are properly secured using environment variables
              or a secrets management system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
