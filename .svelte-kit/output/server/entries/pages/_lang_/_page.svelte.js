import { c as create_ssr_component, b as subscribe, e as escape } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const greetings = { en: "hello", ru: "Привет" };
  const { lang } = $page.params;
  const greeting = greetings[lang];
  $$unsubscribe_page();
  return `<h1>${escape(greeting)}</h1>`;
});
export {
  Page as default
};
