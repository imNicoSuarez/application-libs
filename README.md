# Lib Data

Inicializar la clase.

``` javascript

  var data = DataBase();

```

Crear Item

``` javascript

  var data =  DataBase();

  var obj = {
             name: 'Pepe',
             last_name: 'Pipo'
             email: 'pepe@pipo.com',
             password: '123456',
             github: 'https://github.com/pepe',
             facebook: 'https://facebook.com/pepe',
             twitter: 'https://twitter.com/pepe',
            };

  data.createItem(obj)

  // => { id: 1, name: 'Pepe', last_name: 'Pipo' email: 'pepe@pipo.com', password: '123456', github: 'https://github.com/pepe',  facebook: 'https://facebook.com/pepe', twitter: 'https://twitter.com/pepe' }

```

Obtener todos los Items

``` javascript

  var data =  DataBase();

  data.getAllItems();
  // => [ Object ]

```

Obtener un Item

``` javascript

  var data =  DataBase();

  data.getItem(1);
  // => { id: 1, name: 'Pepe', last_name: 'Pipo' email: 'pepe@pipo.com', password: '123456', github: 'https://github.com/pepe',  facebook: 'https://facebook.com/pepe', twitter: 'https://twitter.com/pepe' }

```

Obtener un Item por email y password

``` javascript

  var data =  DataBase();
  email = 'pepe@pipo.com';
  password = '123456';

  data.findByEmailAndPassword(email, password);
  // => { id: 1, name: 'Pepe', last_name: 'Pipo' email: 'pepe@pipo.com', password: '123456', github: 'https://github.com/pepe',  facebook: 'https://facebook.com/pepe', twitter: 'https://twitter.com/pepe' }

```




