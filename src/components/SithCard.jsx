function SithCard({ sith, vanquishSith, deleteSith }) {
  return (
    <div>
      <img
        src={sith.vanquished ? sith.jediImage : sith.sithImage}
        alt={sith.name}
        width="200"
      />
      <h2>{sith.vanquished ? sith.jediName : sith.name}</h2>
      <button onClick={() => vanquishSith(sith.id)}>Vanquish</button>
      <button onClick={() => deleteSith(sith.id)}>Delete</button>
    </div>
  );
}

export default SithCard;
