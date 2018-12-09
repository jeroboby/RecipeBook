import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { AuthService } from 'src/app/auth/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService,
                      private authService: AuthService) {}

  ngOnInit() {
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  onSave() {
    this.dataStorageService.storeRecipes()
        .subscribe(
          (response: Response) => {
            console.log(response);
          },
          (error) => console.log(error) 
        );
  }

  onGet() {
    this.dataStorageService.getRecipes();
  }
  
  onLogout() {
    this.authService.logout();
  }
}
