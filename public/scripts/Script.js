var app = angular.module('omegaApp', []);
var omega = [
  'Moi',
  'Corey',
  'Pete',
  'Noah',
  'Miles',
  'Carl',
  'Parker',
  'Ben',
  'Brett',
  'Mohamed',
  'Ale',
  'Hogan',
  'Jason',
  'Erin',
  'Helena',
  'Lindsey',
  'Kara'
];

var studentCreate = function(name, school) {
  this.name = name;
  this.school = school;
  this.highlighted = false;
  };

app.controller('OmegaController', OmegaController);

function OmegaController() {
  var vm = this;
  vm.omega = omega;

  vm.newStuds = [];

  for (var i = 0; i < omega.length; i++) {
    vm.newStuds.push(new studentCreate(omega[i], 'prime'));
  }

  vm.selectStudent = function(){

    for (var i = 0; i < vm.newStuds.length; i++) {
      vm.newStuds[i].highlighted = false;
    }

    console.log(vm.selectedName);
    var index = vm.omega.indexOf(vm.selectedName);
    console.log(index);
    console.log(vm.omega[index]);
    console.log(vm.newStuds[index].highlighted);
    vm.newStuds[index].highlighted = !vm.newStuds[index].highlighted;
    console.log(vm.newStuds[index].highlighted);
  };

}
