function functionScope() {
  {
    var xVar = 'var переменная';
    let xLet = 'let переменная';
    const xConst = 'const переменная';

    console.log('Внутри блока:');
    console.log('(var):', xVar);
    console.log('(let):', xLet);
    console.log('(const):', xConst);
  }

  console.log('Снаружи блока:');
  console.log('(var):', xVar);
  console.log('(let):', xLet);
  console.log('(const):', xConst);
}

functionScope();

// Это происходит из-за того, что переменная, созданная с помощью var имеют функциональную область видимости,
// следовательно ее ограничевает только функциональный блок (функция).
// Поэтому при создании переменной xVar внутри блока, к ней можно обращаться внутри всей функции.
// С let и const поялвляется ошибка из-за блочной области видимости
