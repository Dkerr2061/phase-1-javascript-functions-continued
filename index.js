
function saturdayFun(string) {
  if(string) {
  return `This Saturday, I want to ${string}!`;
  } else if(!string) {
    return 'This Saturday, I want to roller-skate!';
  }
}

function mondayWork(string) {
  if(string) {
    return `This Monday, I will ${string}.`;
  } else if(!string) {
    return 'This Monday, I will go to the office.';
  }
}

function wrapAdjective(string) {
  if(string === '*') {
    return function() {
      return `You are ${string}a hard worker${string}!`;
    }
  } else if(string === '||') {
    return function() {
      return `You are ${string}a dedicated programmer${string}!`;
    }
  }
}

