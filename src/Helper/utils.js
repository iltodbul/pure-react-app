export function getRandomNumber() {
  return Math.floor(Math.random() * 11);
}

export function getRandomColor() {
  // const letters = '0123456789ABCDEF';
  // let color = '#';
  // for (var i = 0; i < 6; i++) {
  //   color += letters[Math.floor(Math.random() * 16)];
  // }
  // return color;

  return 'hsl(' + Math.floor(Math.random() * 360) + ', 85%, 75% )';
}
