import {
    storiesOf as storiesOfReal,
    action as actionReal,
    linkTo as linkToReal
} from '@storybook/react';

import {
    specs as specsReal,
    describe as describeReal,
    it as itReal,
    beforeEach as beforeEachReal,
    before as beforeReal,
    after as afterReal,
    afterEach as afterEachReal,
    xit as xitReal,
    fit as fitReal,
    xdescribe as xdescribeReal,
} from 'storybook-addon-specifications';
import * as expect from "expect";

export const specs = (spec) => {
    console.log("Calling spec", spec)
    spec()
};

export const storiesOf = function storiesOf() {
    var api = {};
    var story;
    api.add = (name, func)=> {
        story = func();
        snapshot(name, story);
        return api;
    };
    api.addWithInfo = (name, func)=> {
        story = func();
        snapshot(name, story);
        return api;
    };
    return api;
};export const action = actionReal;
export const linkTo = linkToReal;
export const describe = describeReal;
export const it = itReal;

export const beforeEach = beforeEachReal;
export const afterEach = afterEachReal;
export const before = beforeReal;
export const after = afterReal;

export const xit = xitReal;
export const fit = fitReal;
export const xdescribe = xdescribeReal;

global.storiesOf = storiesOf;
global.action = action;
global.linkTo = linkTo;
global.specs = specs;
global.describe = describe;
global.it = it;
global.after = after;
global.before = before;
global.beforeEach = beforeEach;
global.afterEach = afterEach;
global.expect = expect;