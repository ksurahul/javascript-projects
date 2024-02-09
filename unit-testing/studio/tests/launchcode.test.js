// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){


  test('Returns nonprofit as the value of organization', function() {
    expect(launchcode.organization).toEqual('nonprofit');
  });

  test('Returns Jeff as the value of executiveDirector', function() {
    expect(launchcode.executiveDirector).toEqual('Jeff');
  });

  test('Returns 100 as the value of percentageCoolEmployees', function() {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });

  test('Returns Web Development as the first index of programsOffered', function () {
    expect(launchcode.programsOffered[0]).toEqual('Web Development');
  });

  test('Returns Data Analysis as the first index of programsOffered', function () {
    expect(launchcode.programsOffered[1]).toEqual('Data Analysis');
  });

  test('Returns Liftoff as the first index of programsOffered', function () {
    expect(launchcode.programsOffered[2]).toEqual('Liftoff');
  });

  test('Returns 3 as the length of the array', function () {
    expect(launchcode.programsOffered.length).toEqual(3);
  });

  test('Should return Launch!', function () {
    let output = launchcode.launchOutput(4);
    expect(output).toEqual('Launch!');
  });

  test('Should return Code!', function () {
    let output = launchcode.launchOutput(9);
    expect(output).toEqual('Code!');
  });

  test('Should return Rocks!', function () {
    let output = launchcode.launchOutput(10);
    expect(output).toEqual('Rocks!');
  });

  test('Should return LaunchCode Rocks!', function () {
    let output = launchcode.launchOutput(30);
    expect(output).toEqual('LaunchCode Rocks!');
  });

  
});