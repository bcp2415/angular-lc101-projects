import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Exercises: Angular Lesson 3";

  color: string = "green";
  height: number = 0;
  width: number = 0;
  message: string = "Space shuttle ready for takeoff!";
  takeOffEnabled: boolean = true;

  handleTakeOff(rocketImage) {
    let result = window.confirm(
      "Are you sure the shuttle is ready for takeoff?"
    );

    if (result) {
      this.color = "blue";
      this.height = 10000;
      rocketImage.style.bottom = "10px";
      this.width = 0;
      this.message = "Shuttle in flight.";
      this.takeOffEnabled = false;
    }
  }

  handleLanding(rocketImage) {
    window.alert("The shuttle is landing. Landing gear engaged.");
    this.message = "The shuttle has landed.";
    this.color = "green";
    this.height = 0;
    rocketImage.style.bottom = "0px";
    this.takeOffEnabled = true;
  }

  handleAbort(rocketImage) {
    let result = window.confirm("Are you sure you want to abort the mission?");

    if (result) {
      this.message = "Mission aborted.";
      this.color = "red";
      this.height = 0;
      rocketImage.style.bottom = "0px";
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === "right") {
      let movement = (parseInt(rocketImage.style.left) + 10).toString() + "px";
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
      this.issueWarning(rocketImage);
    } else if (direction === "left") {
      let movement = parseInt(rocketImage.style.left) - 10 + "px";
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
      this.issueWarning(rocketImage);
    } else if (direction === "up") {
      let movement = parseInt(rocketImage.style.bottom) + 10 + "px";
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
      this.issueWarning(rocketImage);
    } else if (direction === "down") {
      let movement = parseInt(rocketImage.style.bottom) - 10 + "px";
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
      this.issueWarning(rocketImage);
    }
  }

  issueWarning(rocketImage) {
    if (rocketImage.style.bottom > 100) {
      this.color = "orange";
    }
  }
}
