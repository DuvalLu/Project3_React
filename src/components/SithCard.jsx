function SithCard({ sith, vanquishSith, deleteSith }) {
  return (
    <div className="sith-card">
      <img
        src={sith.vanquished ? sith.jediImage : sith.sithImage}
        alt={sith.name}
      />
      <h2>{sith.vanquished ? sith.jediName : sith.name}</h2>

      <button className="vanquish-btn" onClick={() => vanquishSith(sith.id)}>
        Vanquish
      </button>

      <button className="delete-btn" onClick={() => deleteSith(sith.id)}>
        Delete
      </button>
    </div>
  );
}

export default SithCard;
