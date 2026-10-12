export function positionImages() {
  return Array.from({length: 200}, (_, i) =>
    `/images/positions/${String(i + 1).padStart(3, "0")}.jpg`
  );
}

export function cardImages() {
  return Array.from({length: 200}, (_, i) =>
    `/images/cards/${String(i + 1).padStart(3, "0")}.jpg`
  );
}
