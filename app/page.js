import Logo from "../components/Logo";

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">Brand Identity Concept</p>
          <h1 className="hero__headline">GoodLuck Footwear</h1>
          <p className="hero__description">
            Crafted to embody confidence and motion, this logo balances bold typography, luminous gold accents,
            and an energetic sneaker silhouette to represent premium footwear with a touch of good fortune.
          </p>
        </div>
        <div className="hero__logo">
          <Logo />
        </div>
      </section>
    </main>
  );
}
