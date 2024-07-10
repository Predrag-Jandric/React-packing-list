export default function Footer({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer>
      {percentage === 100 ? (
        "You have everything !"
      ) : (
        <p>
          You have{" "}
          {numItems === 1
            ? `${numItems} item and you already packed ${numPacked} (${percentage})%`
            : numItems > 1
            ? `${numItems} items and you already packed ${numPacked} (${percentage})%`
            : "nothing on your list"}{" "}
        </p>
      )}
    </footer>
  );
}
