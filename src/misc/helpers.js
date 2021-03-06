export function getNameInitails(name) {
  const splitName = name.toUpperCase().split('');
  if (splitName > 1) {
    return splitName[0][0] + splitName[1][0];
  }
  return splitName[0][0];
}

export function transformToArrWithId(snapVal) {
  return snapVal
    ? Object.keys(snapVal).map(roomId => {
        return { ...snapVal[roomId], Id: roomId };
      })
    : [];
}
