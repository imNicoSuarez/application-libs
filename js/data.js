

var DataBase  = function() {

  var createItem = function(object){
    var data = getToLocalStorage();

    data = data == null ? [] : data;

    try {
      var newData = {
        id : data.length+1,
        name: object.name,
        last_name: object.last_name,
        email: object.email,
        twitter: object.twitter,
        facebook: object.facebook,
        github: object.github,
        password: object.password,
        avatar: object.avatar
      }
    } catch (e) {
      console.log('Datos obtenidos incorrectos.');
      console.log(e);
    }

    data.push(newData);
    saveToStorage(data);

    return newData;
  };

  var getItem = function(id) {
    var data = getToLocalStorage();

    for (var i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        return data[i];
      } else  {
        return 'Not Found User';
      }
    }
  }

  var findByEmailAndPassword = function(email, password) {
    var data = getToLocalStorage();

    for (var i = 0; i < data.length; i++) {
      if (data[i].email == email && data[i].password == password) {
        return data[i];
      } else  {
        return 'Not Found User';
      }
    }
  }

  var getAllItems = function(id){
    return getToLocalStorage();
  };

  // @private metods

  function saveToStorage(object) {
    var dataJson = JSON.stringify(object);
    localStorage.setItem('database', dataJson);
  }

  function getToLocalStorage(){
    return JSON.parse(localStorage.getItem('database'));
  }

  return {
    getAllItems: getAllItems,
    createItem: createItem,
    getItem: getItem,
    findByEmailAndPassword: findByEmailAndPassword,
  }

}