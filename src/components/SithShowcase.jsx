function SithShowcase({ roster }) {
  return (
    <div>
      <h2>The Sith</h2>
      <div>
        {roster.map((oneSith) => (
          <div key={oneSith.id}>
            <img src={oneSith.sithImage} alt={oneSith.name} width="200" />
            <h3>{oneSith.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SithShowcase;
