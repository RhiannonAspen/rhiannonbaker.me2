# Build React
FROM node:20 AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json .
RUN npm install
COPY frontend/ .
RUN npm run build

# Build Python API
FROM python:3.12-slim
WORKDIR /app

# Install Python deps
COPY backend/requirements.txt .
RUN pip install -r requirements.txt

# Copy backend code
COPY backend/ .

# Copy built frontend into the Python app/static
COPY --from=frontend-build /app/frontend/build ./static

# Run API server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
