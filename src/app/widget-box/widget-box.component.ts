import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-widget-box",
  templateUrl: "./widget-box.component.html",
  styleUrls: ["./widget-box.component.scss"]
})
export class WidgetBoxComponent implements OnInit, AfterViewInit {
  original_width = 0;
  original_height = 0;
  original_x = 0;
  original_y = 0;
  original_mouse_x = 0;
  original_mouse_y = 0;
  element: HTMLElement;
  // @ViewChild('resizable', {static: false}) element: ElementRef

  ngAfterViewInit(): void {}
  constructor() {}

  ngOnInit() {
    this.element = document.querySelector(".conatiner-resizable");
  }

  startResizing(event: any) {
    this.original_x = this.element.getBoundingClientRect().left;
    this.original_y = this.element.getBoundingClientRect().top;
    this.original_width = parseFloat(
      getComputedStyle(this.element, null)
        .getPropertyValue("width")
        .replace("px", "")
    );
    this.original_height = parseFloat(
      getComputedStyle(this.element, null)
        .getPropertyValue("height")
        .replace("px", "")
    );
    this.original_mouse_x = event.pageX;
    this.original_mouse_y = event.pageY;
    console.log(this.original_width, this.original_height, this.original_mouse_x,this.original_mouse_y );

    if (event.target.hasAttribute("id")) {
      const target = event.target.getAttribute("id");
      if (target.indexOf("top-n") > -1) {
        this.resizeN(event);
      } else if (target.indexOf("bottom-s") > -1) {
        this.resizeS(event);
      } else if (target.indexOf("right-e") > -1) {
        this.resizeE(event);
      } else if (target.indexOf("left-w") > -1) {
        this.resizeW(event);
      } else if (target.indexOf("corner-ne") > -1) {
        this.resizeN(event);
        this.resizeE(event);
      } else if (target.indexOf("corner-nw") > -1) {
        this.resizeN(event);
        this.resizeW(event);
      } else if (target.indexOf("corner-se") > -1) {
        this.resizeE(event);
        this.resizeS(event);
      } else if (target.indexOf("corner-sw") > -1) {
        this.resizeW(event);
        this.resizeS(event);
      }
    }
  }

  resizeN(event: any) {}
  resizeS(event: any) {
    const height = this.original_height + (event.pageY - this.original_mouse_y)
  }
  resizeE(event: any) {
    const width = this.original_width + (event.pageX - this.original_mouse_x);
       
  }
  resizeW(event: any) {
    const height = this.original_height + (event.pageY - this.original_mouse_y)
        const width = this.original_width - (event.pageX - this.original_mouse_x)
  }
}
