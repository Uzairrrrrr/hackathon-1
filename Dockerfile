# Multi-stage build to serve Docusaurus (frontend) and FastAPI (backend) from one container

# ---------- Frontend build ----------
FROM node:20-alpine AS web
WORKDIR /book

# Install dependencies
COPY book/package*.json ./
RUN npm ci

# Build with same-origin API so frontend calls this container
COPY book .
ENV API_BASE_URL=/
ENV SAME_ORIGIN_API=1
RUN npm run build

# ---------- Backend runtime ----------
FROM python:3.11-slim
WORKDIR /app

RUN apt-get update && apt-get install -y \
    gcc \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Python deps
COPY chatbot-backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# App code
COPY chatbot-backend/app ./app

# Static site (built Docusaurus)
COPY --from=web /book/build ./static

ENV ENVIRONMENT=production
EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
