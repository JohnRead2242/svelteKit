import { c as create_ssr_component, b as subscribe, e as escape } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log($page.params.id);
  $$unsubscribe_page();
  return `<div><p>id: ${escape($page.params.id)}</p></div>`;
});
export {
  Page as default
};
