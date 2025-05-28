# AI Chat Application

A simple chat application that uses OpenAI's GPT-4 to generate responses.

## Features
- Real-time chat interface
- Integration with OpenAI's GPT-4
- RESTful API endpoints

## Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints
- `GET /`: Check if server is running
- `POST /chat`: Send a message to the AI
  - Request body: `{ "message": "Your message here" }`
  - Response: `{ "response": "AI's response" }`

## Technologies Used
- Node.js
- Express.js
- OpenAI API
- CORS 