/**
 * Created by chukin on 10.05.17.
 */
function getChange(id) {
    var car = LocalStorageModule.get(id);
    console.log(car);

    return `<form method="get" action="./changecar">
    <div class="form-group">
  <label for="usr">Id:</label>
  <input type="text" required class="form-control" id="usr" name="id" value="${car.id}">
</div> 
  <div class="row">
  <div class="col-sm-1"></div>
  <div class="col-sm-5"> 
  <div class="form-group">
  <label for="sel2">Марка</label>
  <select class="form-control" required id="sel2" name="mark" >
  <option value=""></option>
    <option selected value="Лифан">Лифан</option>
    <option value="Toyota">Toyota</option>
  </select>
</div> 
 <div class="form-group">
  <label for="usr">Год:</label>
  <input type="number" required class="form-control" id="usr" name="year" value="${car.year}">
</div>

  <div class="form-group">
  <label for="usr">Объём:</label>
  <input type="number" required class="form-control" id="usr1" name="amount" value="${car.amount}">
</div> 
<div class="form-group">
<label class="radio-inline"><input type="radio" checked name="type" required value="Дизельный">Дизельный</label>
<label class="radio-inline"><input type="radio" name="type" required value="Газовый">Газовый</label>
<label class="radio-inline"><input type="radio" name="type" required value="Бензин">Бензин</label>
</div>
<input type="file" name="f">
  <button type="submit"  class="btn btn-default">Добавить</button>  
</div>
  <div class="col-sm-5"> 
   <div class="form-group">
  <label for="sel1">Модель</label>
  <select class="form-control" id="sel1" name="Model" required>
  <option value="" ></option>
    <option selected value="Новая">Новая</option>
    <option value="Старая">Старая</option>
  </select>
</div>
<div class="form-group">
  <label for="usr">Цена:</label>
  <input type="number" required class="form-control" id="usr" name="cost" value="${car.cost}">
</div>
  <div class="form-group">
  <label for="usr">Пробег:</label>
  <input type="number" required class="form-control" id="usr2" name="mileage" value="${car.mileage}">
</div>
  <div class="form-group">
<label class="radio-inline"><input type="radio" checked required name="transmission" value="Авто">Авто</label>
<label class="radio-inline"><input type="radio" required name="transmission" value="Ручное">Ручное</label>
<div class="form-group">
  <label for="sel1">Состояние</label>
  <select class="form-control" id="sel7" name="state" required >
   <option value=""></option>
    <option value="Убитое">Убитое</option>
    <option value="С пробегов">С пробегом</option>
  </select>
</div>
</div> 
</div>
   </div>
</form>
<div class="col-sm-1"></div>`;
}


function setChangeCar(query) {
    var newObj ={};
    newObj.mark = query.mark;
    newObj.year=query.year;
    newObj.Model=query.Model;
    newObj.cost=query.cost;
    newObj.mileage=query.mileage;
    newObj.state=query.state;
    newObj.photoUrl="";
    newObj.watch = 0;
    newObj.type=query.type;
    newObj.amount=query.amount;
    newObj.transmission=query.transmission;
    newObj.id=query.id;
    LocalStorageModule.remove(newObj.id);
    LocalStorageModule.set(newObj.id,newObj);
    return "Успешно";
}