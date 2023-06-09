import { c as create_ssr_component, b as subscribe, e as escape } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log($page.params);
  const slugArr = $page.params.slug.split("/");
  $$unsubscribe_page();
  return `<h1>docs home page</h1>

${slugArr.length === 1 ? `<h1>Viewing docs for feature ${escape(slugArr[0])}</h1>` : `${slugArr.length == 2 ? `<h1>Viewing docs for feature ${escape(slugArr[0])} and concept ${escape(slugArr[1])}</h1>` : ``}`}`;
});
export {
  Page as default
};
