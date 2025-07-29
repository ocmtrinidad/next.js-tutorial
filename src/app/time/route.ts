// Caching only works on production builds, and with GET methods. Caching will not work when using headers(), cookies(), or when working on the request object
// Configures the response is cached.
export const dynamic = "force-static";
// Revalidates the cached response every 10 seconds.
export const revalidate = 10;

export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}
