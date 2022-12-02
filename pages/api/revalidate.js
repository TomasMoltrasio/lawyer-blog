export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request

  try {
    await res.revalidate("/blog");
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
