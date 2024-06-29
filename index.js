// code your solution here
function saturdayFun(defaultActivity=`roller-skate`){
    return `This Saturday, I want to ${defaultActivity}!`
}
function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(highlight = `*`){
    return function(highlight2 = "||"){
    return `You are ${highlight}${highlight2}${highlight}!`;
   }
}