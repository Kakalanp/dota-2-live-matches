export function translateGameMode(id) {
  switch (id) {
    default: return 'UNKNOWN';
    case 1: return 'ALL PICK';
    case 2: return 'CAPTAINS MODE';
    case 3: return 'RANDOM DRAFT';
    case 4: return 'SINGLE DRAFT';
    case 5: return 'ALL RANDOM';
    case 6: return 'INTRO';
    case 7: return 'DIRE TIDE';
    case 8: return 'REVERSE CAPTAINS MODE';
    case 9: return 'GREEVILING';
    case 10: return 'TUTORIAL';
    case 11: return 'MID ONLY';
    case 12: return 'LEAST PLAYED';
    case 13: return 'LIMITED HEROES';
    case 14: return 'COMPENDIUM MATCHMAKING';
    case 15: return 'CUSTOM';
    case 16: return 'CAPTAINS DRAFT';
    case 17: return 'BALANCED DRAFT';
    case 18: return 'ABILITY DRAFT';
    case 19: return 'EVENT';
    case 20: return 'ALL RANDOM DEATH MATCH';
    case 21: return '1V1 MID';
    case 22: return 'ALL DRAFT';
    case 23: return 'TURBO';
    case 24: return 'MUTATION';
  }
}

export function secondsToHms(d) {
  const newD = Number(d);
  const h = Math.floor(newD / 3600);
  const m = Math.floor((newD % 3600) / 60);
  const s = Math.floor((newD % 3600) % 60);

  let hDisplay = 0;
  let mDisplay = 0;
  let sDisplay = 0;

  if (h > 0) {
    if (h < 10) {
      hDisplay = `0${h}:`;
    } else {
      hDisplay = `${h}`;
    }
  } else {
    hDisplay = '';
  }

  if (m > 0) {
    if (m < 10) {
      mDisplay = `0${m}:`;
    } else {
      mDisplay = `${m}:`;
    }
  } else {
    mDisplay = '';
  }

  if (s > 0) {
    if (s < 10) {
      sDisplay = `0${s}:`;
    } else {
      sDisplay = `${s}`;
    }
  } else {
    sDisplay = '';
  }

  return hDisplay + mDisplay + sDisplay;
}

export function date(n) {
  let ampm = '';
  const date = new Date(n * 1000);
  const format = `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}/
    ${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1)}/
    ${date.getFullYear()}, 
    ${date.getHours() < 12 ? (ampm = 'AM', date.getHours() < 10 ? `0${date.getHours()}` : date.getHours())
    : (ampm = 'PM', date.getHours() - 12 < 10 ? `0${date.getHours() - 12}` : date.getHours() - 12)}:
    ${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()} ${ampm}`;

  return format;
}
