import SithCard from "./SithCard";

function SithList({ sith, vanquishSith, deleteSith }) {
  const allVanquished = sith.every((oneSith) => oneSith.vanquished === true);

  if (allVanquished) {
    return (
      <div>
        <h2>Peace has been restored to the galaxy!</h2>
      </div>
    );
  }

  return (
    <div>
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
