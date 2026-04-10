function SithShowcase({ roster }) {
  return (
    <div>
      <h2>The Sith</h2>

      <div className="showcase-card">
        {roster.map((oneSith) => (
          <div key={oneSith.id}>
            <img src={oneSith.sithImage} alt={oneSith.name} />
            <h3>{oneSith.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SithShowcase;
