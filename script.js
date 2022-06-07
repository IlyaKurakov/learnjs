const money = +prompt('Ваш месячный доход?', 50000);
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные траты через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 150000;
let period = 3;

let expenses1 = prompt('Введите обязательную статью расходов?','кварплата ,еда, трава'),
    expenses1Amount = +prompt('Во сколько это обойдется?', 2500),
    expenses2 = prompt('Введите обязательную статью расходов?' , 'кварплата' ,'еда', 'трава'),
    expenses2Amount = +prompt('Во сколько это обойдется?', 15000);
    
let accumulatedMonth = getAccumulatedMonth();
let periodMission = Math.ceil(mission / accumulatedMonth);
let budgetDay = Math.floor(accumulatedMonth / 30); 

// FUNCTIONS
let showTypeOf = function(data){
    console.log(data, typeof(data));
};

function getExpensesMonth() {
   return expenses1Amount + expenses2Amount;
}

function getAccumulatedMonth(){
    return money - getExpensesMonth();
}

function getTargetMonth(){
    let periodOfTarget = Math.ceil(mission / accumulatedMonth);
    return periodOfTarget;
}

let getStatusIncome = function() {
    if (budgetDay < 300) {
        return ('Низкий уровень дохода');
    } else if(budgetDay <= 800) {
        return ('Средний уровень дохода');
    } else {
        return ('Высокий уровень дохода');
    }  
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(getExpensesMonth(), ': расходы за месяц');
console.log(addExpenses + ': возможные расходы');
console.log(getTargetMonth(), ': срок достижения цели');
console.log('Бюджет на день:' + budgetDay);
console.log(getStatusIncome());
