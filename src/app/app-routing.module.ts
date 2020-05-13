import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashBoardComponent } from "./dash-board/dash-board.component";
import { Com1Component } from "./com1/com1.component";
import { Com2Component } from "./com2/com2.component";
import { Com3Component } from "./com3/com3.component";

const routes: Routes = [
  {
    path: "",
    component: DashBoardComponent,
  },
  {
    path: "page1",
    component: Com1Component,
  },
  {
    path: "page2",
    component: Com2Component,
  },
  {
    path: "page3",
    component: Com3Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
