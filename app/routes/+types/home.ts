import type { D1Database } from '@cloudflare/workers-types';

// Define the environment variables expected in the loader context
interface HomeEnv {
  VALUE_FROM_CLOUDFLARE: string;
  // Add other environment variables if needed for this route
}

// Define the context structure for the loader
interface HomeLoaderContext {
  env: HomeEnv;
  // Add other context properties if needed
}

// Define the shape of the loader data
interface HomeLoaderData {
  message: string;
}

// Define the Route type structure for this specific route
export interface Route {
  LoaderArgs: {
    context: HomeLoaderContext;
    request: Request; // Standard loader arg
    params: Record<string, string>; // Standard loader arg
  };
  ComponentProps: {
    loaderData: HomeLoaderData;
  };
  MetaArgs: {
    data: HomeLoaderData | undefined; // Meta can access loader data
    params: Record<string, string>;
    location: Location;
  };
  // Add other route properties like ActionArgs, ErrorBoundaryProps if needed
}
