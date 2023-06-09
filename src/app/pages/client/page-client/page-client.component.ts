import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ClientDto} from "../../../../gs-api/src/models/client-dto";
import {CltfrsService} from "../../../service/ctlfrs/cltfrs.service";

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.css']
})
export class PageClientComponent implements OnInit{
  listClient: Array<ClientDto> = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private cltFrsService: CltfrsService
  ) { }

  ngOnInit(): void {
    this.findAllClients();

  }

  findAllClients(): void {
    this.cltFrsService.findAllClients()
      .subscribe(clients => {
        this.listClient = clients;
        console.log(clients)
      });
  }

  nouveauClient(): void {
    this.router.navigate(['nouveauclient']);
  }

  handleSuppression(event: any): void {
    if (event === 'success') {
      this.findAllClients();
    } else {
      this.errorMsg = event;
    }
  }
}
