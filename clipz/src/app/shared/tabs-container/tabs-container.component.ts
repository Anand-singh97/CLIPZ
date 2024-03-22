import {Component, ContentChildren, AfterContentInit, QueryList} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.css'
})
export class TabsContainerComponent implements AfterContentInit
{
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>;

  constructor() {
  }

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter((tab: TabComponent): void=>{
      tab.active;
    });
    if(!activeTabs || activeTabs.length === 0)
    {
      this.selectTab(this.tabs?.first);
    }
  }

  selectTab(tab?: TabComponent, e?: Event): void{

    e?.preventDefault();
    this.tabs?.forEach((t: TabComponent):void =>{
      t.active = false;
    })
    tab!.active = true;
  }
}
