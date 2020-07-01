import { Drawer } from './drawer';
export declare class DrawerPlugin {
    protected pluginHost: Drawer;
    constructor(pluginHost: Drawer);
    onSetRange(): void;
    predraw(): void;
    draw(): void;
    postdraw(): void;
}
export declare class ExclusiveDrawerPlugin extends DrawerPlugin {
}
export declare type DrawerPluginConstructor = typeof DrawerPlugin;
export declare type ExclusiveDrawerPluginConstructor = typeof ExclusiveDrawerPlugin;
