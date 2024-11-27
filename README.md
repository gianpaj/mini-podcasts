# mini-podcasts

initial prompt used in Bolt.new

> Create a expo react native app that uses a UI library and Typescript. It should have a login screen but it should only appear if user tries to do an action that requires authentication. By default it can navigate without creating a user. Use Clark for authentication using Google OAuth. The repo should be turbo pack where a node is Typescript backend that uses Mongodb and fastify and trpc.

Enhanced to:

> Create a modern Expo React Native application with the following specifications:

Technical Requirements:

- Initialize a new Expo React Native project with TypeScript support
- Implement UI using React Native Paper library
- Set up a TurboPack monorepo structure with the following packages:
  - apps/mobile (Expo React Native)
  - apps/backend (Node.js/Fastify)
  - packages/shared-types (Common TypeScript interfaces)

Authentication Flow:

- Implement Clerk Authentication with Google OAuth
- Create a seamless authentication flow where:
  - Users can browse the app freely without authentication
  - Protected routes/actions trigger a modal login screen
  - After successful authentication, resume the intended action

Backend Architecture:

- Set up a Fastify server with TypeScript
- Implement tRPC for type-safe API communication
- Configure MongoDB as the database using Mongoose
- Create necessary middleware for authentication validation

Project Structure:

- Implement proper folder organization following domain-driven design
- Set up shared configurations for TypeScript, ESLint, and Prettier
- Configure proper environment variables for different environments
- Include comprehensive documentation for setup and development

Deliverables:

- A working TurboPack monorepo with hot reload support
- Type-safe API communication between frontend and backend
- Secure authentication flow with proper error handling
- Basic user profile management
- Example of at least one protected route/action
- React-navigation with bottom navbar with 3 buttons (home, my podcast, settings)

Please provide the implementation following modern React Native and TypeScript best practices, with proper error handling and loading states.
