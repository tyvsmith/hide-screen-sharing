import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';

import * as Main from 'resource:///org/gnome/shell/ui/main.js';


export default class HideScreenSharingExtension extends Extension {
    enable() {
        Main.panel.statusArea.screenSharing.get_parent().hide()
    }

    disable() {
        Main.panel.statusArea.screenSharing.get_parent().show()
    }
}