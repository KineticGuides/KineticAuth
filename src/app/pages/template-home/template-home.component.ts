import { Component, AfterViewInit, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-template-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './template-home.component.html',
  styleUrl: './template-home.component.css'
})
export class TemplateHomeComponent  implements OnInit, AfterViewInit {
  
  data: any;
  formData: any = {phone: ""};
  colData: any = {country: "", languages: ""};
  keys: any;
  values: any;

  @Input() path: any = '';
  @Input() id: any = '';
  @Input() id2: any = '';
  @Input() id3: any = '';
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _dataService: DataService, private router: Router) {}

  closeIt() {
   this.close.emit('N');
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {  


  }

  validatePhoneNumber(value: string) {
    const sanitizedValue = value.replace(/\D/g, ''); // Remove non-digit characters
    this.formData['phone'] = sanitizedValue;
  }

  postForm(): void {

    this._dataService.postData("post-phone", this.formData).subscribe((data: any)=> { 
      if (data.error_code==0) {
          localStorage.setItem("uu",data.id)
          this.router.navigate(['/p']);
      } else {
        alert('Invalid Phone Number - Please Reenter')
      }
  }) 

  }

}
