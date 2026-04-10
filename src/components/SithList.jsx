import SithCard from "./SithCard";

function SithList({ sith, vanquishSith, deleteSith }) {
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
