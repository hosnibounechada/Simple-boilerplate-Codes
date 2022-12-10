class Validator {
  
  constructor(value) {
    this.value = value;
    this.obj = {};
  }
  
  checkIfString(){
      return (typeof this.value === 'string' || this.value instanceof String);
  }
  
  isString(){
      this.obj.string = checkIfString() ? true : false;
    return this;
  }
  
  toString(){
      this.value = String(this.value);
      return this;
  }
  
  isUsername(){
      this.obj.username = this.value == "hosni" ? true : false;
      return this;
  }
  
  isLength( {max = 250, min = 0}){
      this.obj.length = (this.checkIfString()
      && this.value.length <= max
      && this.value.length >= min) ? true : false;
      return this;
  }
  
  toLowerCase(){
      if(this.checkIfString())
        this.value = this.value.toLowerCase();
      return this;
  }
  
  toUpperCase(){
      if(this.checkIfString())
        this.value = this.value.toUpperCase();
      return this;
  }
  
  validate(){
      return !Object.values(this.obj).includes(false) == true;
  }
  
}

// in order to use chain of methods that belongs to the same object
// we need to return the obj instance (this) each time from methods chain
const v = new Validator('hosni bounechada').toString().isLength({max: 25}).toUpperCase();

console.log(v.validate()); // true

console.log(v.value); // HOSNI BOUNECHADA
