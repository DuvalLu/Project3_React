import SithCard from "./SithCard";

function SithList({ sith, vanquishSith, deleteSith }) {
  const allVanquished =
    sith.length === 4 && sith.every((oneSith) => oneSith.vanquished === true);

  if (allVanquished) {
    return (
      <div className="vanquish-list">
        <h2 className="victory">Peace has been restored to the galaxy!</h2>
      </div>
    );
  }

  return (
    <div className="vanquish-list">
      {sith.map((oneSith) => (
        <SithCard
          key={oneSith.id}
          sith={oneSith}
          vanquishSith={vanquishSith}
          deleteSith={deleteSith}
        />
      ))}
    </div>
  );
}

export default SithList;
