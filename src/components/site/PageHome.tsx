import Hero from "./Hero";

export async function PageHome() {
  return (
    <iframe
      src="https://build-in-public-network.vercel.app/admin/tags"
      frameborder="0"
      style={{ width: "100vw", height: "100vh", pointerEvents: "none" }}
    ></iframe>
  );
}
