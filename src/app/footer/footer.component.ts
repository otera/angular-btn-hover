import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  @ViewChild("prevBtn", { static: false }) prevBtn: ElementRef;
  @ViewChild("nextBtn", { static: false }) nextBtn: ElementRef;

  prevVal = 3;
  nextVal = 1;
  prevHref = "page3";
  nextHref = "page1";

  constructor(private router: Router) {}

  private calcMinMax(num: number) {
    if (num === 0) {
      return 3;
    } else if (num === 4) {
      return 1;
    }
    return num;
  }

  private createHref(which: string) {
    if (which === "prev") {
      this.prevVal = this.calcMinMax(this.prevVal - 1);
      this.nextVal = this.calcMinMax(this.nextVal - 1);
    } else {
      this.prevVal = this.calcMinMax(this.prevVal + 1);
      this.nextVal = this.calcMinMax(this.nextVal + 1);
    }
    this.prevHref = "page" + this.prevVal;
    this.nextHref = "page" + this.nextVal;
  }

  clickPrev() {
    this.router.navigate([this.prevHref]);
    this.createHref("prev");
    this.prevBtn.nativeElement.blur();
  }

  clickNext() {
    this.router.navigate([this.nextHref]);
    this.createHref("next");
    this.nextBtn.nativeElement.blur();
  }

  ngOnInit() {}
}
