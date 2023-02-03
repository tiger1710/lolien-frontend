export async function getChampionIcon(n: number = -1) {
  const url = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/';
  const response = await fetch(`${url}/${n}.png`);
  const data = response.body;
  return data;
}

// TODO: edit url to item
export async function getItemIcon(n: number) {
  const url = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/';
  const response = await fetch(`${url}/${n}.png`);
  const data = response.body;
  return data;
}