// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

saturdayFun();
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}
mondayWork();

function wrapAdjective(adjective = "*") {
  return function (special) {
    return `You are ${adjective}${special}${adjective}!`;
  };
}
wrapAdjective("*")("a hard worker")("*");
wrapAdjective("||")("a dedicated programmer")("||");
