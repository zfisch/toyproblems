/*
  Find the net income of a person given that they keep 20% of their direct sales, and they also get
  an extra 15% for the net income of all of the people they manage.
 */

var findNetIncome = function(name, list) {
  var total = 0;
  for (var i=0; i<list.length; i++) {
    if (list[i].name === name) {
      total += (.2 * list[i].directSales);
    } else if (list[i].managerName === name) {
      total += (.15 * findNetIncome(list[i].name, list));
    }
  }
  return total;
}

var findNetIncomeWithReduce = function(name, list) {
  return list.reduce(function(prevTotal, emp, index, list) {
    if (emp.name === name) {
      return prevTotal + (.2 * emp.directSales);
    } else if (emp.managerName === name) {
      return prevTotal + (.15 * findNetIncomeWithReduce(emp.name, list));
    } else {
      return prevTotal;
    }
  }, 0)
}



var list = [
  {
    name: 'zack',
    managerName: null,
    directSales: 100
  },
  {
    name: 'lyd',
    managerName: 'zack',
    directSales: 50
  },
  {
    name: 'sam',
    managerName: 'lyd',
    directSales: 100
  },
  {
    name: 'mom',
    managerName: 'zack',
    directSales: 100
  },
  {
    name: 'paul',
    managerName: 'cory',
    directSales: 500
  },
  {
    name: 'capi',
    managerName: 'lyd',
    directSales: 1000
  },
  {
    name: 'george',
    managerName: 'capi',
    directSales: 200
  },
  {
    name: 'doug',
    managerName: 'mom',
    directSales: 100
  }
];


function findNetIncome(name, list) {
  return list.reduce(function(prevTotal, employee) {
    if (employee.name === name) {
      return prevTotal + (.2 * employee.directSales);
    } else if (employee.managerName === name) {
      return prevTotal + (.15 * findNetIncome(employee.name, list));
    } else {
      return prevTotal;
    }
  }, 0);
}
