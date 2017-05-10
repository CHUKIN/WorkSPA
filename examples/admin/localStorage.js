const LocalStorageModule = function () {

    const storage = localStorage;
    const jsonSerialize = JSON.stringify;
    const jsonDeserialize = JSON.parse;

    function get(key) {
       // key=jsonSerialize(key);

        return jsonDeserialize(storage.getItem(key));
    }

    function set(key, value) {
        //key=jsonSerialize(key);
        value=jsonSerialize(value);
        storage.setItem(key,value);
    }

    function getAll() {
        let arrayOfItems= [];
        for(let i=0;i<storage.length;i++){
            let item={};
            item.key=jsonDeserialize(storage.key([i]));
            item.value=get(item.key);
            arrayOfItems.push(item);
        }
        return arrayOfItems;
    }

    function add(arrayOfItems) {
        for(let i=0;i<arrayOfItems.length;i++){
            set(arrayOfItems[i].key, arrayOfItems[i].value);
        }
    }

    function remove(key) {

        //key=jsonSerialize(key);
        storage.removeItem(key);
    }

    function clear() {
        storage.clear();
    }

    return {
        get: get,
        getAll: getAll,
        set: set,
        remove: remove,
        clear: clear,
        add: add
    };
}();


var arrayOfCars = [{id:1,Model:'q',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'qq'},
    {id:2,Model:'q',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'qq'},
    {id:3,Model:'w',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'qq'},
    {id:4,Model:'e',year:1996,watch:1100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'ww'},
    {id:5,Model:'r',year:1996,watch:19900,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'ww'},
    {id:6,Model:'q',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'ee'},
    {id:7,Model:'w',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'ee'},
    {id:8,Model:'e',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'rr'},
    {id:9,Model:'r',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'x7'},
    {id:10,Model:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'x7'},
    {id:11,Model:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'x7'},
    {id:12,Model:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'x7'},
    {id:13,Model:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'x7'},
    {id:14,Model:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'x7'},
    {id:15,Model:'Нисан',year:1996,watch:10000,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'x7'},
    {id:16,Model:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'x7'},
    {id:17,Model:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'x7'},
    {id:18,Model:'Нисан',year:1996,watch:1000000,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'x7'},
    {id:19,Model:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'x7'},
    {id:20,Model:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'x7'},
    {id:21,Model:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'x7'},
    {id:22,Model:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'x7'},
    {id:23,Model:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'x7'},
    {id:24,Model:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'x7'},
    {id:25,Model:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',mark:'x7'},
];

// LocalStorageModule.clear();
// for(var i=0;i<25;i++){
//     LocalStorageModule.set(arrayOfCars[i].id,arrayOfCars[i]);
//
// }


console.log(LocalStorageModule.getAll());
