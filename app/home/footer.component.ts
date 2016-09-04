import { Component } from '@angular/core';

@Component({
    selector: 'home-footer',
    template: `
        <!-- Main Footer -->
        <footer class="main-footer">
            <!-- To the right -->
            <div class="pull-right hidden-xs">
                Smart Office 好望角智能办公平台 version 1.0
            </div>
            <!-- Default to the left -->
            <strong>版权 &copy; 2016 <a href="http://www.goodhopevisa.cn" target="_blank">好望角</a></strong> GoodHope Inc.
            </footer>
    `
})
export class FooterComponent { }