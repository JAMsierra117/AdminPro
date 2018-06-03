import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NpfComponent } from './npf/npf.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';



@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        NpfComponent,
        BreadcrumbsComponent
    ],
    imports: [],
    exports: [
        HeaderComponent,
        SidebarComponent,
        NpfComponent,
        BreadcrumbsComponent
    ],
    providers: [],
})
export class SharedModule { }
