import "./love.arg";
import "./love.audio";
import "./love.data";
import "./love.event";
import "./love.filesystem";
import "./love.font";
import "./love.graphics";
import "./love.image";
import "./love.joystick";
import "./love.keyboard";
import "./love.math";
import "./love.mouse";
import "./love.path";
import "./love.physics";
import "./love.sound";
import "./love.system";
import "./love.thread";
import "./love.timer";
import "./love.touch";
import "./love.video";
import "./love.window";
import "./love";

declare module "love" {
    export const audio: typeof import("love.audio");
    export const data: typeof import("love.data");
    export const event: typeof import("love.event");
    export const filesystem: typeof import("love.filesystem");
    export const font: typeof import("love.font");
    export const graphics: typeof import("love.graphics");
    export const image: typeof import("love.image");
    export const joystick: typeof import("love.joystick");
    export const keyboard: typeof import("love.keyboard");
    export const math: typeof import("love.math");
    export const mouse: typeof import("love.mouse");
    export const physics: typeof import("love.physics");
    export const sound: typeof import("love.sound");
    export const system: typeof import("love.system");
    export const thread: typeof import("love.thread");
    export const timer: typeof import("love.timer");
    export const touch: typeof import("love.touch");
    export const video: typeof import("love.video");
    export const window: typeof import("love.window");
    export const handlers: import("./love/handlers").Handlers;
}
