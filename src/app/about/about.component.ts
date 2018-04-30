import { Component, OnInit } from "@angular/core";
import { PrismicService } from "./../shared/prismic.service";
import { GlobalService } from "../shared/variables.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  public innerHeight: number = window.innerHeight;
  pageTitle: string = "Product List";
  paginationInProcess: boolean = false;
  listFilter: string;
  errorMessage: string;
  feed: any;
  filteredText: any;
  returnText: any;
  bgImgStem: Object;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _feedService: PrismicService,
    private _globalService: GlobalService,
    private sanitizer: DomSanitizer
  ) {
    let sanitized = sanitizer.bypassSecurityTrustUrl(this.returnText);
    console.log(sanitized);
  }

  ngOnInit(): void {
    this._globalService.setLoading(true);
    console.log("ng on init");
    if (!this.feed) {
      this.getPage(0);
    }
  }

  parseHref(text) {
    // for each span that is listed as a link
    const spans = text.value["0"].spans;
    let returnText = text.value["0"].text;
    console.log(spans);
    if (spans.length > 0) {
      let counter = 0;
      spans.forEach(i => {
        let firstInsert =
          "<a target='_blank' style='color: #00c8ff' href=" +
          i.data.value.url +
          ">";
        let firstInsertLength = firstInsert.length;
        let first = i.start + counter;

        let secondInsert = "</a>";
        let secondInsertLength = secondInsert.length;
        let last = i.end + 1 + counter;

        let arr = returnText.split("");
        arr.splice(first, 0, firstInsert);
        arr.splice(last, 0, secondInsert);
        returnText = arr.join("");
        counter += firstInsertLength + secondInsertLength;
      });
    }
    return returnText;
  }

  getPage(page): void {
    this._feedService.getFeed("information", page).subscribe(
      feed => {
        if (page == 0) {
          this.feed = feed;
          console.log("in feed");
          console.log(this.feed);
          this.filteredText = this.parseHref(
            feed.results["0"].data.information.background
          );
          console.log(this.filteredText);

          //

          this._globalService.setLoading(false);
        } else {
          console.log("in else block");
        }
      },
      error => {
        console.log("there was an error");
        this.errorMessage = error;
        this._globalService.setLoading(false);
      }
    );
  }

  columnWrap() {
    if (
      this.feed.results["0"].data.information.body.value["0"].repeat.length > 5
    ) {
      return "column-wrap";
    } else {
      return "normal";
    }
  }
}
