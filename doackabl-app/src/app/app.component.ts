import { Component,OnInit,ViewChild,Directive, ElementRef, HostListener, Renderer2,AfterViewInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit{
  title = 'doackabl-app';
  selected = 'individual';
  trigger:boolean = false;
  alignment = 'BSC CATEGORY';

  @ViewChild("progress",{static: false}) progress:ElementRef;

  ngOnInit(){
    
  }

  ngAfterViewInit() {

  //  var parentElement = this.progress.nativeElement ;
  //   var  firstChild = parentElement.children[0];
  //   var secondChild = parentElement.children[1];
  //   var thirdChild = parentElement.children[2];


  //  var  secondChild = this.progress.children[1];
  //   var thirdChild = this.parentElement.children[2];

  var parentElement = this.progress.nativeElement ;
  var  firstChild = parentElement.children[0];
  var secondChild = parentElement.children[2];
  var thirdChild = parentElement.children[4];
    console.log(this.progress.nativeElement);
    console.log(firstChild)
    console.log(secondChild)
    console.log(thirdChild)
    

  //  console.log( parentElement,firstChild,secondChild,thirdChild,fourthChild)
   
}

  // userForm = new FormGroup({
  //   'title': new FormControl(['',Validators.required])
  // })
  userTitle = new FormControl('',[Validators.required]);
  userSkill = new FormControl('',[Validators.required])
   
  user = 'Mary Watson';
  userList:any [] = [{name:'Mary Watson',image:'assets/images/myimage.png'}, {name:'George M Howard', image:'assets/images/myimage.png'}]
   acc:any= document.getElementsByTagName("div");
   active:boolean = false;
   step=0;

   funcSkills = ['engineering','design','sales'];
   bscCategory = ['business','people','process','customer']


   
    //fourthChild = this.parentElement.children[3];
   

  constructor(private renderer: Renderer2,private el: ElementRef){
    
//const list = DocumentType.getElementByID

  //  var list = document.getElementById('progress');  
  //  var next = document.getElementById('next');
  //  var clear = document.getElementById('clear');
  //  var children = list.children;
  //  var completed = 0;
 


   console.log(this.acc.length,this.acc);
  // console.log(list)
  }

  setStep(index: number) {
    this.step = index;
  } 

  nextStep() {
    this.step++;
    
    if (this.step = 1)
    {
      let one = this.progress.nativeElement.querySelector("li")
      this.renderer.addClass( one,'green node')
    }

    if (this.step = 2)
    {
      let two = this.progress.nativeElement.querySelector("li")
      this.renderer.addClass( two,'green node')
    }
  }

  prevStep() {
    this.step--;
  }
 
  onChange(value){

    console.log('change')
    if (value != 'individual')
   
    this.trigger = true;

    else
    this.trigger = false;

  }

  acco(value){
     //this.acc.classList.toggle("active");
     this.active = !this.active;

     let panel = document.getElementsByClassName("div");
     console.log(panel)

    //  let panel = this.acc;
    //  if (panel.style.maxHeight) {
    //   panel.style.maxHeight = null;
    // } else {
    //   panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
   
   
  
  
  

