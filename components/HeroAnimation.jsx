export default function HeroAnimation() {
  return (
    <div className="heroAnimation" aria-hidden="true">
      <div className="heroAnimation__core" />
      <div className="heroAnimation__ring heroAnimation__ring--outer" />
      <div className="heroAnimation__ring heroAnimation__ring--middle" />
      <div className="heroAnimation__ring heroAnimation__ring--inner" />
      <div className="heroAnimation__wind">⚡</div>
      <div className="heroAnimation__solar" />
    </div>
  );
}
