import { Component, OnInit, NgZone } from "@angular/core";

const MAX_WIDTH_BREAKPOINT = 720;

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(
    `(max-width : ${MAX_WIDTH_BREAKPOINT}px)`
  );

  constructor(private zone: NgZone) {
    this.mediaMatcher.addEventListener(mql => {
      zone.run(() => (this.mediaMatcher = mql));
    });
  }

  ngOnInit(): void {}
}
