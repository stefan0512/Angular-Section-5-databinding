import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  OnChangeFirst() {
    console.log('* 01 - OnChangeFirst called');
    this.serverElements[0].name = this.serverElements[0].name + '1';
    //this.serverElements[0].name = "Changed!";
  }

  OnDestroyFirst() {
    console.log('* 02 - OnDestroyFirst called');
    this.serverElements.splice(0,1);

  }
}
