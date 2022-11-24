export default interface Iserver {
    middleware(): void;
    routers(): void;
    pipeline(): void;
    server(): void;
}