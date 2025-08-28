function momsCalc(beloeb, moms = 25) {
  const returnVal = beloeb + (beloeb * moms) / 100;
  console.log(returnVal);
}

momsCalc(200, 11);
