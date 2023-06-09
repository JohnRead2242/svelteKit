<script>
  import { page } from "$app/stores";
  console.log($page.params.id);

  // const { id, title, body } = data.post;
</script>

<div>
  <p>id: {$page.params.id}</p>
</div>
