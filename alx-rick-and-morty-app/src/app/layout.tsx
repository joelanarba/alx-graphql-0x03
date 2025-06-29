import "./globals.css";
import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";

export const metadata = {
  title: "Rick and Morty App",
  description: "ALX GraphQL Project using Next.js and Apollo",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}
