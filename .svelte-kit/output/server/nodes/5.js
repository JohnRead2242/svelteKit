import * as server from '../entries/pages/posts/_page.server.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/posts/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/posts/+page.server.js";
export const imports = ["_app/immutable/nodes/5.47d00e1d.js","_app/immutable/chunks/index.13b2c16a.js"];
export const stylesheets = [];
export const fonts = [];
