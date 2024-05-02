import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pd-gen';
  password ='';
  useLetter = false;
  useSymbol = false;
  useNumber = false;
  length = 0;

onChangeLength(event: any){
  this.length = event.target.value;
  console.log(this.length)
}  

onChangeUseLetter(){
  this.useLetter = !this.useLetter;
}

onChangeUseSymbol(){
  this.useSymbol = !this.useSymbol;
}

onChangeUseNumber(){
  this.useNumber = !this.useNumber;
}


onButtonClick(){
  const numbers = '1234567890';
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const symbols = '!@#%&()';

  let validChars = '';
  if(this.useSymbol)
    validChars += symbols;
  if(this.useLetter)
    validChars += letters;
  if(this.useNumber)
    validChars += numbers;
  
  console.log(validChars)

  let generatedPassword = '';
  for(let i = 0; i< this.length; i++){
    const index = Math.floor(Math.random()*validChars.length)
    generatedPassword += validChars[index];
  }

  this.password = generatedPassword;
}

}
