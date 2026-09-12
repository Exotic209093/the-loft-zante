export default function Ticker() {
  const words = [
    "IRISH SOUL. ISLAND SPIRIT.",
    "ONE MORE ROUND?",
    "GOOD DRINKS. GREAT PEOPLE.",
  ];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {[0, 1].map((copy) => (
          <div
            className="ticker-group"
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
          >
            {words.map((word) => (
              <span key={word}>
                {word}
                <b>✳</b>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
