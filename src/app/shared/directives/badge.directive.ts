import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[dirBadge]'
})
export class BadgeDirective {
  @Input() dirBadge:string= "";
  @Input() color = "#FD0087";
  @Input() textColor = "white";

  constructor(private el:ElementRef) { 
  }

  ngOnInit(){
    let badge = document.createElement("div");
    let t = document.createTextNode(this.dirBadge);
    badge.appendChild(t);
    badge.style.fontSize = "13px";	
    badge.style.lineHeight = "18px";
    badge.style.backgroundColor = this.color;
    badge.style.color = this.textColor;
    badge.style.position = "absolute";
    badge.style.margin = ".5em 0";
    badge.style.width = "22px";
    badge.style.height = "22px";
    badge.style.top = "-10px";
    badge.style.right = "-3px";
    badge.style.borderRadius = "50%";
    badge.style.display = "flex";
    badge.style.flexDirection = "column";
    badge.style.alignItems = "center";
    badge.style.justifyContent = "center";

    this.el.nativeElement.style.position = "relative";
    this.el.nativeElement.appendChild(badge);
  }

}
