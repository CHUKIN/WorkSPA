/**
 * Created by chukin on 10.05.17.
 */
function getNewCar() {
    return `<form method="get" action="./newcar">
  <div class="row">
  <div class="col-sm-1"></div>
  <div class="col-sm-5">
  <div class="form-group">
  <label for="sel2">Марка</label>
  <select class="form-control" id="sel2" name="mark" required>
  <option value=""></option>
    <option value="Лифан">Лифан</option>
    <option value="Toyota">Toyota</option>
  </select>
</div>
 <div class="form-group">
  <label for="usr">Год:</label>
  <input type="number" class="form-control" id="usr" name="year" required>
</div>
  <div class="form-group">
  <label for="usr">Объём:</label>
  <input type="number" class="form-control" id="usr1" name="amount" required>
</div>
<div class="form-group">
<label class="radio-inline"><input type="radio" name="type" required value="Дизельный">Дизельный</label>
<label class="radio-inline"><input type="radio" name="type" required value="Газовый">Газовый</label>
<label class="radio-inline"><input type="radio" name="type" required value="Бензин">Бензин</label>
</div>
<input type="file" name="f">
  <button type="submit" class="btn btn-default">Добавить</button>
</div>
  <div class="col-sm-5"> 
   <div class="form-group">
  <label for="sel1">Модель</label>
  <select class="form-control" id="sel1" name="Model" required>
  <option value=""></option>
   <option value="Новая">Новая</option>
    <option value="Старая">Старая</option>
  </select>
</div>
<div class="form-group">
  <label for="usr">Цена:</label>
  <input type="number" class="form-control" id="usr" name="cost" required>
</div>
  <div class="form-group">
  <label for="usr">Пробег:</label>
  <input type="number" class="form-control" id="usr2" name="mileage" required>
</div>
  <div class="form-group">
<label class="radio-inline"><input type="radio" name="transmission" required value="Авто">Авто</label>
<label class="radio-inline"><input type="radio" name="transmission" required value="Ручное">Ручное</label>
<div class="form-group">
  <label for="sel1">Состояние</label>
  <select class="form-control" id="sel7" name="state" required>
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


function setNewCar(query) {
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
    newObj.id=LocalStorageModule.getAll().length*100;

    LocalStorageModule.set(newObj.id,newObj);
    return "Успешно";
}