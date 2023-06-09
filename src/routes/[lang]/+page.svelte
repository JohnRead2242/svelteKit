<script>
  import { page } from "$app/stores";

  const greetings = {
    en: "hello",
    ru: "Привет",
  };

  const { lang } = $page.params;
  const greeting = greetings[lang];
</script>

<h1>{greeting}</h1>
