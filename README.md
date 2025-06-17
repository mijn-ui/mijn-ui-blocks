# Next.js App Deployment (Docker)

### Prerequisites

Before deploying, ensure you have the following ready:

- Docker installed and running (Docker Engine 20.10+ recommended)

## Steps to Deploy

1. **Clone the repository (if not already done):**

   ```
   git clone https://github.com/mijn-ui/mijn-ui-blocks
   cd mijn-ui-blocks
   ```

2. **Build the Docker image:**

   ```
   docker build -t my-nextjs-app .
   ```

3. **Run the Docker container:**

   ```
   docker run -p 3000:3000 --env-file .env my-nextjs-app
   ```

4. **Access the app:** Open [http://localhost:3000](http://localhost:3000) in your browser.
