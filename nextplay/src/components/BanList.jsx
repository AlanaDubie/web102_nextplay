function BanList({ banList, removeFromBanList }) {
  return (
    <div className="ban-list">
      <h3>Ban List</h3>

      {banList.length === 0 && <p>No banned attributes</p>}

      {banList.map((item, index) => (
        <button key={index} onClick={() => removeFromBanList(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default BanList;