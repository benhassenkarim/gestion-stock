import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {UtilisateurDto} from "../../../gs-api/src/models/utilisateur-dto";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  connectedUser:UtilisateurDto={};

constructor(
  private userService:UserService
) {
}
  ngOnInit(): void {
  this.connectedUser=this.userService.getConnectedUser();
  }
}
