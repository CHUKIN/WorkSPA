const LocalStorageModule = function () {

    const storage = localStorage;
    const jsonSerialize = JSON.stringify;
    const jsonDeserialize = JSON.parse;

    function get(key) {
        key=jsonSerialize(key);
        return jsonDeserialize(storage.getItem(key));
    }

    function set(key, value) {
        key=jsonSerialize(key);
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
        key=jsonSerialize(key);
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


var arrayOfCars = [{id:1,mark:'Лифан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:2,mark:'Лифан',year:1996,watch:10200,cost:200,state:'Хорошее',mileage:18200,type:'Бензин',amount:1.7,transmission:'Авто',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Новая'},
    {id:3,mark:'Лифан',year:1996,watch:100,cost:21000,state:'Убитое',mileage:1800,type:'Дизель',amount:2.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:4,mark:'Лифан',year:1996,watch:10550,cost:200,state:'Убитое',mileage:18900,type:'Дизель',amount:1.9,transmission:'Ручное',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Новая'},
    {id:5,mark:'Лифан',year:1995,watch:10000,cost:200,state:'Убитое',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:6,mark:'Лифан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.9,transmission:'Авто',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Новая'},
    {id:7,mark:'Лифан',year:1956,watch:100,cost:200,state:'Хорошее',mileage:18070,type:'Бензин',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:8,mark:'Лифан',year:1996,watch:105200,cost:2000,state:'Убитое',mileage:1800,type:'Дизель',amount:1.9,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:9,mark:'Лифан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.9,transmission:'Ручное',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Старая'},
    {id:10,mark:'Лифан',year:1995,watch:100,cost:290,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.9,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:11,mark:'Нисан',year:1995,watch:10510,cost:28,state:'Хорошее',mileage:450,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:12,mark:'Нисан',year:1996,watch:100,cost:270,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:13,mark:'Нисан',year:1996,watch:12300,cost:2060,state:'Убитое',mileage:18700,type:'Бензин',amount:1.9,transmission:'Авто',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Старая'},
    {id:14,mark:'Нисан',year:1956,watch:10000,cost:2500,state:'Убитое',mileage:1800,type:'Бензин',amount:2.8,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:15,mark:'Лифан',year:1996,watch:100,cost:4200,state:'Убитое',mileage:1800,type:'Дизель',amount:2.8,transmission:'Авто',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:16,mark:'Нисан',year:1996,watch:100,cost:2030,state:'Хорошее',mileage:1800,type:'Дизель',amount:2.8,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:17,mark:'Нисан',year:1996,watch:100,cost:2000,state:'Хорошее',mileage:650,type:'Бензин',amount:2.8,transmission:'Ручное',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:18,mark:'Нисан',year:1995,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:3.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:19,mark:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:3.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:20,mark:'Нисан',year:1996,watch:105200,cost:200,state:'Хорошее',mileage:1800,type:'Бензин',amount:1.8,transmission:'Авто',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:21,mark:'Нисан',year:1996,watch:100,cost:200,state:'Убитое',mileage:1800,type:'Дизель',amount:3.6,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:22,mark:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:23,mark:'Нисан',year:1996,watch:100,cost:200,state:'Убитое',mileage:320,type:'Бензин',amount:1.8,transmission:'Ручное',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:24,mark:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Бензин',amount:1.8,transmission:'Авто',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:25,mark:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:26,mark:'Лифан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:27,mark:'Лифан',year:1996,watch:10200,cost:200,state:'Хорошее',mileage:18200,type:'Бензин',amount:1.7,transmission:'Авто',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Новая'},
    {id:28,mark:'Лифан',year:1996,watch:100,cost:21000,state:'Убитое',mileage:1800,type:'Дизель',amount:2.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:29,mark:'Лифан',year:1996,watch:10550,cost:200,state:'Убитое',mileage:18900,type:'Дизель',amount:1.9,transmission:'Ручное',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Новая'},
    {id:30,mark:'Лифан',year:1995,watch:10000,cost:200,state:'Убитое',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:31,mark:'Лифан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.9,transmission:'Авто',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Новая'},
    {id:32,mark:'Лифан',year:1956,watch:100,cost:200,state:'Хорошее',mileage:18070,type:'Бензин',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:33,mark:'Лифан',year:1996,watch:105200,cost:2000,state:'Убитое',mileage:1800,type:'Дизель',amount:1.9,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:34,mark:'Лифан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.9,transmission:'Ручное',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Старая'},
    {id:35,mark:'Лифан',year:1995,watch:100,cost:290,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.9,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:36,mark:'Нисан',year:1995,watch:10510,cost:28,state:'Хорошее',mileage:450,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:37,mark:'Нисан',year:1996,watch:100,cost:270,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:38,mark:'Нисан',year:1996,watch:12300,cost:2060,state:'Убитое',mileage:18700,type:'Бензин',amount:1.9,transmission:'Авто',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Старая'},
    {id:39,mark:'Нисан',year:1956,watch:10000,cost:2500,state:'Убитое',mileage:1800,type:'Бензин',amount:2.8,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:40,mark:'Лифан',year:1996,watch:100,cost:4200,state:'Убитое',mileage:1800,type:'Дизель',amount:2.8,transmission:'Авто',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:41,mark:'Нисан',year:1996,watch:100,cost:2030,state:'Хорошее',mileage:1800,type:'Дизель',amount:2.8,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:42,mark:'Нисан',year:1996,watch:100,cost:2000,state:'Хорошее',mileage:650,type:'Бензин',amount:2.8,transmission:'Ручное',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:43,mark:'Нисан',year:1995,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:3.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:44,mark:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:3.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:45,mark:'Нисан',year:1996,watch:105200,cost:200,state:'Хорошее',mileage:1800,type:'Бензин',amount:1.8,transmission:'Авто',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:46,mark:'Нисан',year:1996,watch:100,cost:200,state:'Убитое',mileage:1800,type:'Дизель',amount:3.6,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:47,mark:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:48,mark:'Нисан',year:1996,watch:100,cost:200,state:'Убитое',mileage:320,type:'Бензин',amount:1.8,transmission:'Ручное',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:49,mark:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Бензин',amount:1.8,transmission:'Авто',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:50,mark:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:51,mark:'Лифан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:52,mark:'Лифан',year:1996,watch:10200,cost:200,state:'Хорошее',mileage:18200,type:'Бензин',amount:1.7,transmission:'Авто',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Новая'},
    {id:53,mark:'Лифан',year:1996,watch:100,cost:21000,state:'Убитое',mileage:1800,type:'Дизель',amount:2.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:54,mark:'Лифан',year:1996,watch:10550,cost:200,state:'Убитое',mileage:18900,type:'Дизель',amount:1.9,transmission:'Ручное',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Новая'},
    {id:55,mark:'Лифан',year:1995,watch:10000,cost:200,state:'Убитое',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:56,mark:'Лифан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.9,transmission:'Авто',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Новая'},
    {id:57,mark:'Лифан',year:1956,watch:100,cost:200,state:'Хорошее',mileage:18070,type:'Бензин',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:58,mark:'Лифан',year:1996,watch:105200,cost:2000,state:'Убитое',mileage:1800,type:'Дизель',amount:1.9,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:59,mark:'Лифан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.9,transmission:'Ручное',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Старая'},
    {id:60,mark:'Лифан',year:1995,watch:100,cost:290,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.9,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:61,mark:'Нисан',year:1995,watch:10510,cost:28,state:'Хорошее',mileage:450,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:62,mark:'Нисан',year:1996,watch:100,cost:270,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:63,mark:'Нисан',year:1996,watch:12300,cost:2060,state:'Убитое',mileage:18700,type:'Бензин',amount:1.9,transmission:'Авто',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Старая'},
    {id:64,mark:'Нисан',year:1956,watch:10000,cost:2500,state:'Убитое',mileage:1800,type:'Бензин',amount:2.8,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:65,mark:'Лифан',year:1996,watch:100,cost:4200,state:'Убитое',mileage:1800,type:'Дизель',amount:2.8,transmission:'Авто',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:66,mark:'Нисан',year:1996,watch:100,cost:2030,state:'Хорошее',mileage:1800,type:'Дизель',amount:2.8,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:67,mark:'Нисан',year:1996,watch:100,cost:2000,state:'Хорошее',mileage:650,type:'Бензин',amount:2.8,transmission:'Ручное',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:68,mark:'Нисан',year:1995,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:3.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:69,mark:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:3.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:70,mark:'Нисан',year:1996,watch:105200,cost:200,state:'Хорошее',mileage:1800,type:'Бензин',amount:1.8,transmission:'Авто',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:71,mark:'Нисан',year:1996,watch:100,cost:200,state:'Убитое',mileage:1800,type:'Дизель',amount:3.6,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:72,mark:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:73,mark:'Нисан',year:1996,watch:100,cost:200,state:'Убитое',mileage:320,type:'Бензин',amount:1.8,transmission:'Ручное',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:74,mark:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Бензин',amount:1.8,transmission:'Авто',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:75,mark:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:76,mark:'Лифан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:77,mark:'Лифан',year:1996,watch:10200,cost:200,state:'Хорошее',mileage:18200,type:'Бензин',amount:1.7,transmission:'Авто',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Новая'},
    {id:78,mark:'Лифан',year:1996,watch:100,cost:21000,state:'Убитое',mileage:1800,type:'Дизель',amount:2.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:79,mark:'Лифан',year:1996,watch:10550,cost:200,state:'Убитое',mileage:18900,type:'Дизель',amount:1.9,transmission:'Ручное',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Новая'},
    {id:80,mark:'Лифан',year:1995,watch:10000,cost:200,state:'Убитое',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:81,mark:'Лифан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.9,transmission:'Авто',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Новая'},
    {id:82,mark:'Лифан',year:1956,watch:100,cost:200,state:'Хорошее',mileage:18070,type:'Бензин',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:83,mark:'Лифан',year:1996,watch:105200,cost:2000,state:'Убитое',mileage:1800,type:'Дизель',amount:1.9,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:84,mark:'Лифан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.9,transmission:'Ручное',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Старая'},
    {id:85,mark:'Лифан',year:1995,watch:100,cost:290,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.9,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:86,mark:'Нисан',year:1995,watch:10510,cost:28,state:'Хорошее',mileage:450,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:87,mark:'Нисан',year:1996,watch:100,cost:270,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Новая'},
    {id:88,mark:'Нисан',year:1996,watch:12300,cost:2060,state:'Убитое',mileage:18700,type:'Бензин',amount:1.9,transmission:'Авто',photoUrl:'http://www.prisnilos.su/kcfinder/upload/image/articles1/mashina13.jpg',Model:'Старая'},
    {id:89,mark:'Нисан',year:1956,watch:10000,cost:2500,state:'Убитое',mileage:1800,type:'Бензин',amount:2.8,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:90,mark:'Лифан',year:1996,watch:100,cost:4200,state:'Убитое',mileage:1800,type:'Дизель',amount:2.8,transmission:'Авто',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:96,mark:'Нисан',year:1996,watch:100,cost:2030,state:'Хорошее',mileage:1800,type:'Дизель',amount:2.8,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:97,mark:'Нисан',year:1996,watch:100,cost:2000,state:'Хорошее',mileage:650,type:'Бензин',amount:2.8,transmission:'Ручное',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:98,mark:'Нисан',year:1995,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:3.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:99,mark:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:3.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:100,mark:'Нисан',year:1996,watch:105200,cost:200,state:'Хорошее',mileage:1800,type:'Бензин',amount:1.8,transmission:'Авто',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:91,mark:'Нисан',year:1996,watch:100,cost:200,state:'Убитое',mileage:1800,type:'Дизель',amount:3.6,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:92,mark:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Ручное',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
    {id:93,mark:'Нисан',year:1996,watch:100,cost:200,state:'Убитое',mileage:320,type:'Бензин',amount:1.8,transmission:'Ручное',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:94,mark:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Бензин',amount:1.8,transmission:'Авто',photoUrl:'https://www.pravda.ru/image/photo/3/5/8/181358.jpeg',Model:'Старая'},
    {id:95,mark:'Нисан',year:1996,watch:100,cost:200,state:'Хорошее',mileage:1800,type:'Дизель',amount:1.8,transmission:'Авто',photoUrl:'https://cs4.gtavicecity.ru/attachments/2015-08/original/5b5fa38e1bf176f6dfd77c07b3cc5ebddd088146/5578-287771-2015-08-18-185153.jpg',Model:'Старая'},
];

LocalStorageModule.clear();
for(var i=0;i<100;i++){
    LocalStorageModule.set(arrayOfCars[i].id,arrayOfCars[i]);

}


console.log(LocalStorageModule.getAll());
