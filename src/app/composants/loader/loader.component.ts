import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoaderState} from "./loader.model";
import {ServiceService} from "./service/service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit,OnDestroy{
  show = false;
  subscription: Subscription | undefined;

  constructor(
    private loaderService: ServiceService
  ) { }

  ngOnInit(): void {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}

