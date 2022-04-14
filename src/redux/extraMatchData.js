export function translateGameMode(id) {
  switch(id) {
      default: return 'UNKNOWN'
      case 1: return 'ALL PICK'
      case 2: return 'CAPTAINS MODE'
      case 3: return 'RANDOM DRAFT'
      case 4: return 'SINGLE DRAFT'
      case 5: return 'ALL RANDOM'
      case 6: return 'INTRO'
      case 7: return 'DIRE TIDE'
      case 8: return 'REVERSE CAPTAINS MODE'
      case 9: return 'GREEVILING'
      case 10: return 'TUTORIAL'
      case 11: return 'MID ONLY'
      case 12: return 'LEAST PLAYED'
      case 13: return 'LIMITED HEROES'
      case 14: return 'COMPENDIUM MATCHMAKING'
      case 15: return 'CUSTOM'
      case 16: return 'CAPTAINS DRAFT'
      case 17: return 'BALANCED DRAFT'
      case 18: return 'ABILITY DRAFT'
      case 19: return 'EVENT'
      case 20: return 'ALL RANDOM DEATH MATCH'
      case 21: return '1V1 MID'
      case 22: return 'ALL DRAFT'
      case 23: return 'TURBO'
      case 24: return 'MUTATION'
  }
}

export function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h < 10 ? '0' + h + ':' : h + ':' : '';
    var mDisplay = m > 0 ? m < 10 ? '0' + m + ':' : m + ':' : '';
    var sDisplay = s > 0 ? s < 10 ? '0' + s : s : '';
    return hDisplay + mDisplay + sDisplay; 
}

export function date(n) {
    let ampm = '';
    const date = new Date(n * 1000)
    return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/
    ${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/
    ${date.getFullYear()}, 
    ${date.getHours() < 12 ? (ampm = 'AM', date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) 
    : (ampm = 'PM', date.getHours()-12 < 10 ? '0' + date.getHours() : date.getHours()) }:
    ${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()} ${ampm}`
}
